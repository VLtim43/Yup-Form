import React from "react";
import * as S from "./styles";
import { colors } from "../utils/colors";
import useFormStore from "../../Zustand/store";

const Form = () => {
  const { currentStep, goToStep, resetForm } = useFormStore();

  const handleNextStep = () => {
    const nextStep = currentStep + 1;
    if (nextStep <= 2) {
      goToStep(nextStep);
    }
  };

  const handlePreviousStep = () => {
    const previousStep = currentStep - 1;
    if (previousStep >= 0) {
      goToStep(previousStep);
    }
  };

  return (
    <S.FormContainer backgroundColor={colors.palePink}>
      <S.MainContainer>
        {currentStep === 0 && <p></p>}
        {currentStep === 1 && <p></p>}
        {currentStep === 2 && <p></p>}
      </S.MainContainer>

      <S.ButtonContainer backgroundColor={colors.lightCream}>
        {currentStep > 0 && (
          <button onClick={handlePreviousStep}>Previous</button>
        )}
        {currentStep < 2 ? (
          <button onClick={handleNextStep}>Next</button>
        ) : (
          <button onClick={resetForm}>Reset</button>
        )}
      </S.ButtonContainer>
    </S.FormContainer>
  );
};

export default Form;
