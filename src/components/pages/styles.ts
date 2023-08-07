import styled from "styled-components";

export const BackGround = styled.div<{ backgroundColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: ${(props) => props.backgroundColor};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
