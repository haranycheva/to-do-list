import { GlobalStyled } from "GlobalStyle.style";
import { nanoid } from "nanoid";
import { ListToDo } from "ListToDo/ListToDo";
import { FormToDo } from "FormToDo/FormToDo";
import { Component } from "react";
import data from "./todo.json";
import { Modal } from "Modal/Modal";

export class App extends Component {
  state = {
    list: data,
    isLoading: false,
    showModal: false,
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
    const { list } = this.state;
    if (prevState.list !== list) {
      console.log(list);
      localStorage.setItem("todo", JSON.stringify(list));
    }
  }
  handleAddItem = (item) => {
    console.log(item);
    this.setState(({ list }) => ({
      list: [...list, { ...item, id: nanoid() }],
    }));
  };
  handleDelete = (deleteId) => {
    this.setState(({ list }) => ({
      list: list.filter((el) => el.id !== deleteId),
    }));
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    return (
      <>
        <GlobalStyled />
        <button type="button" onClick={this.toggleModal}>open</button>
        <FormToDo onAdd={this.handleAddItem}></FormToDo>
        {this.state.isLoading ? (
          <p>is loading....</p>
        ) : (
          <ListToDo
            list={this.state.list}
            onDelete={this.handleDelete}
          ></ListToDo>
        )}
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>dsfhhjdfshjdsfh</h1>
            <p>
            </p>
          </Modal>
        )}
      </>
    );
  }
}
