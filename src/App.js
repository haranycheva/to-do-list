import { GlobalStyled } from "GlobalStyle.style";
import { ListToDo } from "ListToDo/ListToDo";
import { FormToDo } from "FormToDo/FormToDo";
import { Component } from "react";
import { Modal } from "Modal/Modal";
import { PresentationBox } from "PresentationBox/PresentationBox";
import { ModalForDelete } from "ModalForDelete/ModalForDelete";
import { deleteToDo, postToDo, getToDo } from "fetch";
import { Loader } from "Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import { FilterForm } from "FilterForm/FilterForm";

export class App extends Component {
  state = {
    list: [],
    filteredList: [],
    toFilter: false,
    isLoading: false,
    showModal: false,
    showDeleteModal: false,
    deleteEl: null,
    error: null,
    selected: localStorage.getItem("selected")
      ? JSON.parse(localStorage.getItem("selected"))
      : null,
  };
  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const data = await getToDo();
      this.setState({ list: data });
    } catch (error) {
      console.log("err");
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  componentDidUpdate(_, prevState) {
    const { selected } = this.state;
    if (prevState.selected.id !== selected.id) {
      localStorage.setItem("selected", JSON.stringify(selected));
    }
  }
  handleAddItem = async (item) => {
    this.setState({ isLoading: true, error: null });
    try {
      const dataAdd = await postToDo(item);
      this.setState(({ list }) => ({ list: [...list, dataAdd] }));
      toast.success("Success 👻");
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  toggleDeleteModal = (id) => {
    this.setState(({ showDeleteModal }) => {
      const todel = !showDeleteModal ? id : null;
      return { showDeleteModal: !showDeleteModal, deleteEl: todel };
    });
  };
  handleDelete = async () => {
    this.setState({ isLoading: true, error: null });
    try {
      const dataDel = await deleteToDo(this.state.deleteEl);
      this.setState(({ list, selected }) => {
        return {
          selected: selected?.id === dataDel.id ? "" : selected,
          list: list.filter((el) => el.id !== dataDel.id),
        };
      });
      toast.success("Success 👻");
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
      this.toggleDeleteModal();
    }
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
  handleFilter = async ({ textForFilter, levelForFilter }) => {
    this.setState({ isLoading: true });
    try {
      this.setState(({ list }) => ({
        filteredList: list.filter(
          ({ title, level }) =>
            title.toLowerCase().includes(textForFilter) &&
            level === levelForFilter
        )
      }));
      this.setState({toFilter: true})
    } catch (error) {
      console.log("err");
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  handleResetFilters = () =>{
    this.setState({toFilter: false})
  }
  render() {
    const { isLoading, error, list, toFilter, filteredList } = this.state;
    return (
      <>
        <GlobalStyled />
        <Toaster position="top-center" reverseOrder={false} />
        <button type="button" onClick={this.toggleModal}>
          open
        </button>
        <FormToDo onAdd={this.handleAddItem}></FormToDo>
        <FilterForm onFilter={this.handleFilter} />
        <button type="button" onClick={this.handleResetFilters}>reset filters</button>
        {error && <p>Ooooooooooops.... Something went wrong.....</p>}
        {isLoading && <Loader />}
        {list.length > 0 && (
          <ListToDo
            list={toFilter ? filteredList : list}
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
