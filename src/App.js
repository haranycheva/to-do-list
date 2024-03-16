import { GlobalStyled } from "GlobalStyle.style";
import { nanoid } from "nanoid";
import { ListToDo } from "ListToDo/ListToDo";
import { FormToDo } from "FormToDo/FormToDo";
import { Component } from "react";
import data from "./todo.json";
import { Modal } from "Modal/Modal";
import { PresentationBox } from "PresentationBox/PresentationBox";
import { ModalForDelete } from "ModalForDelete/ModalForDelete";

export class App extends Component {
  state = {
    list: data,
    isLoading: false,
    showModal: false,
    showDeleteModal: false,
    deleteEl: null,
    selected: localStorage.getItem("selected")
      ? JSON.parse(localStorage.getItem("selected"))
      : "",
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    const data = localStorage.getItem("todo");
    const parseData = JSON.parse(data);
    if (parseData) {
      this.setState({ list: parseData });
    }
    this.setState({ isLoading: false });
  }
  componentDidUpdate(prevProps, prevState) {
    const { list, selected } = this.state;
    if (prevState.list !== list) {
      localStorage.setItem("todo", JSON.stringify(list));
    }
    if (prevState.selected.id !== selected.id) {
      localStorage.setItem("selected", JSON.stringify(selected));
    }
  }
  handleAddItem = (item) => {
    this.setState(({ list }) => ({
      list: [...list, { ...item, id: nanoid() }],
    }));
  };
  toggleDeleteModal = (id) => {
    this.setState(({ showDeleteModal }) => {
      const todel = !showDeleteModal ? id : "";
      return { showDeleteModal: !showDeleteModal, deleteEl: todel };
    });
  };
  handleDelete = () => {
    this.setState(({ list, selected, deleteEl }) => {
      console.log(deleteEl);
      return {
        selected: selected.id === deleteEl ? "" : selected,
        list: list.filter((el) => el.id !== deleteEl),
        deletedEl: null,
      };
    });
    this.toggleDeleteModal()
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
