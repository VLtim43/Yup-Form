import styled from "styled-components";

export const SideContainer = styled.div<{ backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 24vw;

  box-shadow: 0 8px 32px 0 rgba(0.1, 0.1, 0.1, 0.37);
  background: rgba(255, 246, 246, 0.19);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  background-color: ${(props) => props.backgroundColor};

  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;

  @media (min-width: 1300px) {
    width: 26vw;
  }

  @media (min-width: 1700px) {
    width: 24vw;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex: 1; /* Expand to take available space */
  }
`;
