import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const MainContainer = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentContainer = styled.div`
  @media (max-width: 1400px) {
    padding: 40px 38px;
  }

  padding: 60px 80px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const TextContainer = styled.div`
  @media (max-width: 1400px) {
    font-size: 32px;
    margin-bottom: 40px;
  }

  font-size: 50px;
  margin-bottom: 20px;

  display: flex;
  color: ${colors.darkSlateBlue};
  font-weight: bold;
`;

export const ButtonContainer = styled.div<{ backgroundColor?: string }>`
  background-color: ${(props) => props.backgroundColor};
  border-bottom-right-radius: 15px;
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
