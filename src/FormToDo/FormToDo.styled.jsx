import styled from "styled-components";
import { Form, Field } from "formik";

export const FormToDO = styled(Form)`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const InputText = styled(Field)`
    width: 500px;
    height: 30px;
    display: block;
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: 44px;
  text-transform: uppercase;
`;
export const Select = styled(Field)`
  width: 500px;
  height: 30px;
`;

export const FormBtn = styled.button`
  background-color: #175637;
  color: #fff;
  padding: 10px 40px;
  border: none;
`;
