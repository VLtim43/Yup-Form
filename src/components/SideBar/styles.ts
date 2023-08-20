import styled from "styled-components";
import { colors } from "../utils/colors";

export const SideContainer = styled.div<{ backgroundColor?: string }>`
  display: flex;
  align-items: center;
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
`;

export const Icon = styled.div<{ color?: string }>`
  background-color: ${(props) => props.color};
  margin: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const Header = styled.h2`
  font-size: 28px;
  color: ${colors.lightCream};
  @media (min-width: 1900px) {
    font-size: 40px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 30px 12px 30px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex: 1;

  img {
    filter: blur(0.5px) opacity(70%) 16vw;
    align-self: flex-end;
    height: 16vw;
    width: 16vw;
  }
`;
