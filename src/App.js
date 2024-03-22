import { GlobalStyled } from "GlobalStyle.style";
import { nanoid } from "nanoid";
import { ListToDo } from "ListToDo/ListToDo";
import { FormToDo } from "FormToDo/FormToDo";
import { Component } from "react";
import { Modal } from "Modal/Modal";
import { PresentationBox } from "PresentationBox/PresentationBox";
import { ModalForDelete } from "ModalForDelete/ModalForDelete";
import { deleteToDo, postToDo, getToDo } from "Try/fetch";

export class App extends Component {
  state = {
    list: [],
    isLoading: false,
    showModal: false,
    showDeleteModal: false,
    deleteEl: null,
    selected: localStorage.getItem("selected")
      ? JSON.parse(localStorage.getItem("selected"))
      : null,
  };
  async componentDidMount() {
    this.setState({ isLoading: true });
    const data = await getToDo();
    this.setState({ list: data });
    this.setState({ isLoading: false });
  }
  componentDidUpdate(_, prevState) {
    const { selected } = this.state;
    if (prevState.selected.id !== selected.id) {
      localStorage.setItem("selected", JSON.stringify(selected));
    }
  }
  handleAddItem = async (item) => {
    this.setState({ isLoading: true });
    await postToDo(item);
    const data = await getToDo();
    this.setState({ list: data });
    this.setState({ isLoading: false });
  };
  toggleDeleteModal = (id) => {
    this.setState(({ showDeleteModal }) => {
      const todel = !showDeleteModal ? id : "";
      return { showDeleteModal: !showDeleteModal, deleteEl: todel };
    });
  };
  handleDelete = () => {
    this.setState(({ list, selected, deleteEl }) => {
      deleteToDo(deleteEl);
      return {
        selected: selected?.id === deleteEl ? "" : selected,
        list: list.filter((el) => el.id !== deleteEl),
        deletedEl: null,
      };
    });
    this.toggleDeleteModal();
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  handleClick = (e, id, title, description) => {
    if (e.target.nodeName === "BUTTON") {
      return;
    }
    this.setState({ selected: { id, title, description } });
  };
  render() {
    return (
      <>
        <GlobalStyled />
        <button type="button" onClick={this.toggleModal}>
          open
        </button>
        <FormToDo onAdd={this.handleAddItem}></FormToDo>
        {this.state.isLoading ? (
          <p>is loading....</p>
        ) : (
          <ListToDo
            list={this.state.list}
            onDelete={this.toggleDeleteModal}
            selected={this.state.selected}
            onClick={this.handleClick}
          />
        )}
        <PresentationBox
          selected={
            this.state.selected || {
              title: "You selected nothing",
              description: "...",
            }
          }
        />
        {this.state.showDeleteModal && (
          <ModalForDelete
            onClose={this.toggleDeleteModal}
            onDelete={this.handleDelete}
          />
        )}
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>dsfhhjdfshjdsfh</h1>
            <p></p>
          </Modal>
        )}
      </>
    );
  }
}
