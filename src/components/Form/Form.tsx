import React from "react";
import * as S from "./styles";
import { colors } from "../utils/colors";
import MultiStepForm from "./MultiStep";

const Form = () => {
  return (
    <S.FormContainer backgroundColor={colors.palePink}>
      <S.MainContainer></S.MainContainer>

      <S.ButtonContainer
        backgroundColor={colors.lightCream}
      ></S.ButtonContainer>
    </S.FormContainer>
  );
};

export default Form;
