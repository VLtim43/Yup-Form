import * as S from "./styles";
import React from "react";
type Props = {
  placeholder?: string;
  label?: string;
};

const Input: React.FC<Props> = ({ placeholder, label }) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input type="text" placeholder={placeholder} />
    </S.Container>
  );
};
export default Input;
