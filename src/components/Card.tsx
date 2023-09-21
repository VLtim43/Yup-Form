// src/YourComponent/index.tsx
import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";
import image from "../../assets/duotone5.png";

// Define styled components
const MainContainer = styled.div`
  height: 580px;
  width: 900px;
  display: flex;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Sidebar = styled.div`
  flex: 4;
  background-color: ${colors.deeperBlue};
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomImage = styled.img`
  height: 200px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  filter: sepia(15%);
`;

const MainContent = styled.div`
  flex: 7;
  background-color: ${colors.lightCream};
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const Card = () => {
  return (
    <MainContainer>
      <Sidebar>
        <BottomImage src={image} alt="Descriptive alt text" />{" "}
      </Sidebar>
      <MainContent></MainContent>
    </MainContainer>
  );
};

export default Card;
