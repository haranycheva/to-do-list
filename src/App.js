import { ListToDo } from "ListToDo/ListToDo";
import { FormToDo } from "FormToDo/FormToDo";
import { InputToDo } from "InputToDo/InputToDo";

export function App() {
  return (
    <>
      <FormToDo>
        <InputToDo placeholder="enter title"></InputToDo>
        <InputToDo placeholder="enter description"></InputToDo>
      </FormToDo>
      <ListToDo></ListToDo>
    </>
  );
}
