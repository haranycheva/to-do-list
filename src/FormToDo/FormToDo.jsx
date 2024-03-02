import { Component } from "react";
import { Form, Title, Select, FormBtn } from "./FormToDo.styled";
import { InputToDo } from "InputToDo/InputToDo";

export function FormToDo({ children }) {
  return (
    <Form>
      <Title>enter your data</Title>
      {children}
      <Select>
        <option value="1">level 1</option>
        <option value="2">level 2</option>
        <option value="3">level 3</option>
      </Select>
      <FormBtn type="submit">Submit</FormBtn>
    </Form>
  );
}

export class FormToDo2 extends Component {
  state = {
    title: "",
    desc: "",
    agree: false,
    selected: 1,
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(name);
  };
  handleChangeCheckBox = (e) => {
    const { checked } = e.target;
    this.setState({ agree: checked });
  };
  handleChangeSelect = (e) => {
    const { value } = e.target;
    this.setState({ selected: value });
  }

  render() {
    return (
      <Form>
        <Title>enter your data</Title>
        <InputToDo
          name="title"
          placeholder="enter title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <InputToDo
          name="desc"
          type="text"
          placeholder="enter description"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input type="checkbox" checked={this.state.agree} onChange={this.handleChangeCheckBox}/>
        <Select onChange={this.handleChangeSelect}>
          <option value="1">level 1</option>
          <option value="2">level 2</option>
          <option value="3">level 3</option>
        </Select>
        <FormBtn type="submit">Submit</FormBtn>
      </Form>
    );
  }
}
