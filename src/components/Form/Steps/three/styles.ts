import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const MainContainer = styled.div`
  padding: 60px 20px;
  display: flex;
  height: 85%;
  flex-direction: column;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const TextContainer = styled.div`
  display: flex;
  font-size: 40px;
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
