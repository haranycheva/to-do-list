import { Form, Title, Select, FormBtn } from "./FormToDo.styled";

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
