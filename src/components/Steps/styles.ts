import styled from "styled-components";
import { colors } from "../utils/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 78px;
`;

export const IconContainer = styled.div<{ active?: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 250px;

  p {
    flex: 1;
    color: ${colors.steelGray};
    text-transform: capitalize;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
