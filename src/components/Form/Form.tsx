import React from "react";
import * as S from "./styles";
import { colors } from "../utils/colors";
import useStepStore from "../../Zustand/store";

import { StepOne } from "./Steps/stepOne/StepOne";
import { StepTwo } from "./Steps/stepTwo/StepTwo";
import { StepThree } from "./Steps/stepThree/StepThree";

const Form = () => {
  const { currentStep } = useStepStore();

  return (
    <S.FormContainer backgroundColor={colors.lightCream}>
      <S.StepsContainer>
        {currentStep === 0 && <StepOne />}
        {currentStep === 1 && <StepTwo />}
        {currentStep === 2 && <StepThree />}
      </S.StepsContainer>
    </S.FormContainer>
  );
};

export default Form;
