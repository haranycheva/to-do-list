
import { List } from "./ListToDo.styled";
import { ItemToDo } from "ItemToDo/ItemToDo";
export function ListToDo({ list, onDelete }) {
  return (
    <List>
      {list.map(({ title, description, level, id, status }) => (
        <ItemToDo
          key={id}
          title={title}
          description={description}
          level={level}
          id={id}
          status={status}
          onDelete={onDelete}
        ></ItemToDo>
      ))}
    </List>
  );
}
