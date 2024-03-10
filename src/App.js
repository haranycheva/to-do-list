import { GlobalStyled } from "GlobalStyle.style";
import { nanoid } from 'nanoid'
import { ListToDo } from "ListToDo/ListToDo";
import { FormToDo } from "FormToDo/FormToDo";
import Clicker from "Try/Clicker";
import { Component } from "react";
import data from "./todo.json";

export class App extends Component {
  state = {
    list: data,
  };
  handleAddItem = (item) => {
    console.log(item)
    this.setState(({list}) => ({
      list: [
        ...list,
        { ...item, id: nanoid()}
      ],
    }));
  };
  handleDelete = (deleteId) => {
    this.setState(({ list }) => ({
      list: list.filter((el) => el.id !== deleteId),
    }));
  };
  render() {
    return (
      <>
        <GlobalStyled />
        <FormToDo
        onAdd={this.handleAddItem}
        ></FormToDo>
        <ListToDo
          list={this.state.list}
          onDelete={this.handleDelete}
        ></ListToDo>
      </>
    );
  }
}
