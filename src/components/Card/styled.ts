// src/YourComponent/styled.tsx
import styled from "styled-components";
import { colors } from "../../utils/colors";

export const MainContainer = styled.div`
  height: 500px;
  width: 870px;
  display: flex;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Sidebar = styled.div`
  flex: 4;
  background-color: ${colors.deeperBlue};
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
`;

export const MainContent = styled.div`
  flex: 7;
  background-color: ${colors.lightCream};
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`;
