import { Item, Level, Text, Title, ButtonDel } from "./ItemToDo.styled";

export function ItemToDo({
  status,
  level,
  id,
  title,
  description,
  onDelete,
  onClick,
  selected,
}) {
  return (
    <Item status={status} level={level} onClick={onClick} selected={selected}>
      <Title>{title}</Title>
      <Text>{description}</Text>
      <Level>{level}</Level>
      <ButtonDel
        onClick={(e) => {
          console.log(onDelete)
          onDelete(id);
        }}
      >
        del
      </ButtonDel>
    </Item>
  );
}
