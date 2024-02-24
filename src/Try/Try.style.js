import styled from "styled-components";

const getColor = ({typeBox}) => {
    switch (typeBox) {
        case "approve":
            return "#00f";
        case "error":
            return "#f00";
        default:
            return "#000";
    }
}

export const BoxEl = styled.div`
width: 300px;
height:300px;
background-color: ${getColor} ;
`;