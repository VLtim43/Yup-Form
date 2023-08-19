import styled from "styled-components";

export const FormContainer = styled.div<{ backgroundColor?: string }>`
  height: 80vh;
  width: 40vw;

  box-shadow: 0 8px 32px 0 rgba(0.1, 0.1, 0.1, 0.37);
  background: rgba(255, 246, 246, 0.19);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  background-color: ${(props) => props.backgroundColor};

  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;

  @media (min-width: 1300px) {
    width: 40vw;
  }

  @media (min-width: 1700px) {
    width: 40vw;
  }
`;

export const ButtonContainer = styled.div<{ backgroundColor?: string }>`
  background-color: ${(props) => props.backgroundColor};
  border-bottom-right-radius: 15px;

  height: 15%;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 70%;
  height: 85%;
`;
