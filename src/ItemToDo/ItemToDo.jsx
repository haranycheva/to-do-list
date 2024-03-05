import { Item, Level, Text, Title, ButtonDel } from "./ItemToDo.styled";

export function ItemToDo({status, level, id, title, description, onDelete}){
    return(
        <Item status={status} level={level}>
            <Title>{title}</Title>
            <Text>{description}</Text>
            <Level>{level}</Level>
            <ButtonDel onClick={() => onDelete(id)}>del</ButtonDel>
          </Item>
    )
}