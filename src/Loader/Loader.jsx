import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";
import { rootModal } from "index";
import { createPortal } from "react-dom";

export const LoaderBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Loader = () => {
  return createPortal(
    <LoaderBack>
      <ClipLoader color="#ab2346" size={100} />
    </LoaderBack>,
    rootModal
  );
};
