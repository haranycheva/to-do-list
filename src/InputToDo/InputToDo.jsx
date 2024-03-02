import { InputText } from "./InputToDo.styled";

export function InputToDo({ placeholder, onChange, value, name }) {
  return (
    <InputText
      name={name}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
