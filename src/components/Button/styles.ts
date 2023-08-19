import styled from "styled-components";
import { colors } from "../utils/colors";
export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button<{ customType?: string }>`
  min-height: 35px;
  min-width: 80px;
  border-radius: 8px;
  border: 0;

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
