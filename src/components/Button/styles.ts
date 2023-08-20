import styled from "styled-components";
import { colors } from "../utils/colors";
export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button<{ customType?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 0;
  color: ${colors.lightCream};

  @media (min-width: 1900px) {
    min-height: 50px;
    min-width: 100px;
    font-size: 19px;
  }

  @media (max-width: 1900px) {
    min-height: 35px;
    min-width: 70px;
    font-size: 15px;
  }

  background-color: ${({ customType }) =>
    customType === "inactive" ? colors.darkGray : colors.lightBeige};
  cursor: ${({ customType }) =>
    customType === "inactive" ? "not-allowed" : "pointer"};
  pointer-events: ${({ customType }) =>
    customType === "inactive" ? "none" : "auto"};

  &:hover {
    background-color: ${({ customType }) =>
      customType === "inactive" ? colors.grayishBlue : colors.lightBeige};
  }

  &:active {
    ${({ customType }) =>
      customType === "inactive"
        ? ""
        : `
      transform: scale(1);
    `}
  }
`;
