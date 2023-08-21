import React from "react";
import * as S from "./styles";
import { colors } from "../utils/colors";
import useFormStore from "../../Zustand/store";

import { StepOne } from "./Steps/one/StepOne";

const Form = () => {
  const { currentStep } = useFormStore();

  return (
    <S.FormContainer backgroundColor={colors.palePink}>
      <S.StepsContainer>
        {currentStep === 0 && <StepOne />}
        {currentStep === 1 && <p></p>}
        {currentStep === 2 && <p></p>}
      </S.StepsContainer>
    </S.FormContainer>
  );
};

export default Form;
