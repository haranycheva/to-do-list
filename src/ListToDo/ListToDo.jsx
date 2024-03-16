
import { List } from "./ListToDo.styled";
import { ItemToDo } from "ItemToDo/ItemToDo";
export function ListToDo({ list, onDelete, selected, onClick,}) {
  return (
    <List>
      {list.map(({ title, description, level, id, status}) => (
        <ItemToDo
          key={id}
          title={title}
          description={description}
          level={level}
          id={id}
          status={status}
          onDelete={onDelete}
          selected={selected.id === id}
          onClick={(e) => onClick(e, id, title, description)}
        ></ItemToDo>
      ))}
    </List>
  );
}
