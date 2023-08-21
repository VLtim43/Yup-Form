import * as S from "./styles";
import React from "react";

type Props = {
  placeholder?: string;
  label: string;
  error?: string | undefined; // Adding an error prop
};

const Input: React.FC<Props> = ({ placeholder, label, error }) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input type="text" placeholder={placeholder} />
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Container>
  );
};
export default Input;
