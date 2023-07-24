import React from "react";
import * as S from "./styles";

const Form = () => {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return <S.FormContainer onSubmit={handleSubmit}></S.FormContainer>;
};

export default Form;
