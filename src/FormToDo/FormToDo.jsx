import React, { Component } from "react";
import * as Yup from "yup";
import { Title, FormBtn, FormToDO, InputText, Select } from "./FormToDo.styled";
import { Formik, ErrorMessage } from "formik";

const schemaValidation = Yup.object({
  title: Yup.string()
    .min(2, "Must be at least 2 characters")
    .required("Title is required"),
  description: Yup.string().required("Description is required"),
  level: Yup.string()
    .oneOf(["easy", "medium", "hard"], "Invalid level")
    .required("Level is required"),
});

export class FormToDo extends Component {
  handleInputChange = (e, handleChange) => {
    handleChange(e);
    localStorage.setItem(e.target.name, JSON.stringify(e.target.value));
  };

  render() {
    return (
      <Formik
        initialValues={{
          title: JSON.parse(localStorage.getItem("title")) || "",
          description: JSON.parse(localStorage.getItem("description")) || "",
          level: JSON.parse(localStorage.getItem("level")) || "easy",
        }}
        validationSchema={schemaValidation}
        onSubmit={(values, { resetForm }) => {
          resetForm({ title: "", description: "", level: "easy" });
          localStorage.setItem("title", JSON.stringify(""));
          localStorage.setItem("description", JSON.stringify(""));
          localStorage.setItem("level", JSON.stringify("easy"));
          this.props.onAdd(values);
          
        }}
      >
        {({ values, handleChange }) => (
          <>
            <FormToDO>
              <Title>Enter your data</Title>
              <InputText
                name="title"
                placeholder="Enter title"
                onChange={(e) => this.handleInputChange(e, handleChange)}
                value={values.title}
              />
              <ErrorMessage name="title" />
              <InputText
                name="description"
                type="text"
                placeholder="Enter description"
                onChange={(e) => this.handleInputChange(e, handleChange)}
                value={values.description}
              />
              <ErrorMessage name="description" />
              <Select
                name="level"
                as="select"
                onChange={(e) => this.handleInputChange(e, handleChange)}
                value={values.level}
              >
                <option value="easy">Level 1</option>
                <option value="medium">Level 2</option>
                <option value="hard">Level 3</option>
              </Select>
              <FormBtn type="submit">Add</FormBtn>
            </FormToDO>
          </>
        )}
      </Formik>
    );
  }
}
