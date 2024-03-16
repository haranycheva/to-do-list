import styled from "styled-components";

export const ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 25vw;
  height: 50vh;
  padding: 20px;
  transform: translate(-50%, -50%);
  background-color: #fff;
`;

export const Btn = styled.button`
  padding: 10px;
  background-color: ${({ bgColor }) => bgColor};
  color: #fff;
  border: transparent;
`;

export const Title = styled.p`
font-size: 36px;
margin-bottom: 15px;
`;
