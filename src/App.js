import { GlobalStyled } from "GlobalStyle.style";
import { ListToDo } from "ListToDo/ListToDo";
import { FormToDo2 } from "FormToDo/FormToDo";
import Clicker from "Try/Clicker";

export function App() {
  return (
    <>
    <GlobalStyled/>
    <Clicker/>
      <FormToDo2>
      </FormToDo2>
      <ListToDo></ListToDo>
    </>
  );
}
