import { Component } from "react";
import * as Yup from "yup";
import { Title, FormBtn, FormToDO, InputText, Select} from "./FormToDo.styled";
// import { InputToDo } from "InputToDo/InputToDo";
import { Formik, Field, ErrorMessage } from "formik";
const schemaValidation = Yup.object({
  title: Yup.string()
    .min(2, "must be min 2 simbols")
    .required("Title must be required"),
  description: Yup.string().required("Title must be required"),
  level: Yup.number().oneOf([1, 2, 3]).required("Title must be required"),
});
export class FormToDo extends Component {
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.onAdd(this.state);
  //   this.setState(initialValue);
  // };

  render() {
    return (
      <Formik
        initialValues={{ title: "", description: "", level: 1 }}
        validationSchema={schemaValidation}
        onSubmit={(values, {resetForm} ) => {
          console.log(values)
          resetForm({ title: "", description: "", level: 1 })
          this.props.onAdd(values)
        }}
      >
        <FormToDO>
          <Title>enter your data</Title>
          <InputText name="title" placeholder="enter title" />
          <ErrorMessage name="title"></ErrorMessage>
          <InputText
            name="description"
            type="text"
            placeholder="enter description"
          />
          <ErrorMessage name="description" />
          <Select name="level" as="select">
            <option value="1">level 1</option>
            <option value="2">level 2</option>
            <option value="3">level 3</option>
          </Select>
          <FormBtn type="submit">Add</FormBtn>
        </FormToDO>
      </Formik>
    );
    // <Form onSubmit={this.handleSubmit}>
    //   <Title>enter your data</Title>
    //   <InputToDo
    //     name="title"
    //     placeholder="enter title"
    //     value={this.state.title}
    //     onChange={this.handleChange}
    //   />
    //   <InputToDo
    //     name="description"
    //     type="text"
    //     placeholder="enter description"
    //     value={this.state.description}
    //     onChange={this.handleChange}
    //   />
    //   <input type="checkbox" checked={this.state.agree} onChange={this.handleChangeCheckBox}/>
    //   <Select value={this.state.level} onChange={this.handleChangeSelect}>
    //     <option value="1">level 1</option>
    //     <option value="2">level 2</option>
    //     <option value="3">level 3</option>
    //   </Select>
    //   <FormBtn type="submit">Add</FormBtn>
    // </Form>
    // );
  }
}
