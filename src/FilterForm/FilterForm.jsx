import { Field, Form, Formik } from "formik";
import { Component } from "react";

export class FilterForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{ textForFilter: "", levelForFilter: "easy" }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          this.props.onFilter(values)
        }}
      >
        <Form>
          <Field name="textForFilter" type="text" />
          <Field name="levelForFilter" as="select">
            <option value="easy">Level 1</option>
            <option value="medium">Level 2</option>
            <option value="hard">Level 3</option>
          </Field>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
  }
}
