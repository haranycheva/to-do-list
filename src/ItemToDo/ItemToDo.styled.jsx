import { colors } from "../constants";
import styled from "styled-components";

function getSelected({ selected }) {
  if (!selected) {
    return "solid";
  }
  return "double";
}

const getColor = ({ level }) => {
    switch (level) {
      case "hard":
        return colors.LEVEL_ONE;
      case "medium":
        return colors.LEVEL_TWO;
      case "easy":
        return colors.LEVEL_THREE;
      default:
        break;
    }
  };
  const getComp = ({ status }) => {
    switch (status) {
      case true:
        return colors.COMPLETE;
      case false:
        return "transparent";
      default:
        break;
    }
  };
  
  export const Item = styled.li`
    position: relative;
    width: calc((100% - 150px) / 3);
    padding: 10px;
    border: 4px ${getSelected} ${getColor};
    margin-bottom: 10px;
    background-color: ${getComp};
  `;
  
  export const Title = styled.p`
    font-size: 18px;
    font-style: italic;
    font-weight: 700;
  `;
  
  export const Text = styled.p`
    font-size: 14px;
    color: grey;
  `;
  export const Level = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 25px;
    border: 1px solid black;
  `;
  
  export const ButtonDel = styled.button`
    padding: 10px;
    border: transparent;
    background-color: #EF6F6C;
    color: #fff;
  `;