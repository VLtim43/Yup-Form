// src/YourComponent/index.tsx
import React from "react";
import * as S from "./styled";

const Card = () => {
  return (
    <S.MainContainer>
      <S.Sidebar></S.Sidebar>
      <S.MainContent></S.MainContent>
    </S.MainContainer>
  );
};

export default Card;
