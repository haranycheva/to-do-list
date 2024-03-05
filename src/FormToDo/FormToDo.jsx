import { Component } from "react";
import { Form, Title, Select, FormBtn } from "./FormToDo.styled";
import { InputToDo } from "InputToDo/InputToDo";

// export function FormToDo({ children }) {
//   return (
//     <Form>
//       <Title>enter your data</Title>
//       {children}
//       <Select>
//         <option value="1">level 1</option>
//         <option value="2">level 2</option>
//         <option value="3">level 3</option>
//       </Select>
//       <FormBtn type="submit">Submit</FormBtn>
//     </Form>
//   );
// }

const initialValue ={
  title: "",
  description: "",
  agree: false,
  level: 1,
}
export class FormToDo extends Component {
  state = initialValue;
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleChangeCheckBox = (e) => {
    const { checked } = e.target;
    this.setState({ agree: checked });
  };
  handleChangeSelect = (e) => {
    const { value } = e.target;
    this.setState({ level: value });
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onAdd(this.state)
    this.setState(initialValue)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Title>enter your data</Title>
        <InputToDo
          name="title"
          placeholder="enter title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <InputToDo
          name="description"
          type="text"
          placeholder="enter description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <input type="checkbox" checked={this.state.agree} onChange={this.handleChangeCheckBox}/>
        <Select value={this.state.level} onChange={this.handleChangeSelect}>
          <option value="1">level 1</option>
          <option value="2">level 2</option>
          <option value="3">level 3</option>
        </Select>
        <FormBtn type="submit">Add</FormBtn>
      </Form>
    );
  }
}
