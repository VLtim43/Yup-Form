import React from "react";
import * as S from "./styles";
import { colors } from "../utils/colors";
import useFormStore from "../../Zustand/store";
import Button from "../Button/Button";
import { StepOne } from "./Steps/StepOne";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./schema";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data: any) => {
    console.log({ data });
    // reset();
  };

  return (
    <S.FormContainer backgroundColor={colors.palePink}>
      <S.MainContainer>
        <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
          {currentStep === 0 && <StepOne register={register} errors={errors} />}
          {/* {currentStep === 0 && <StepOne />}
          {currentStep === 1 && <p></p>}
          {currentStep === 2 && <p></p>} */}
        </form>
      </S.MainContainer>

      <S.ButtonContainer backgroundColor={colors.lightCream}>
        <Button
          onClick={handlePreviousStep}
          customType={currentStep == 0 ? "inactive" : "active"}
        >
          Back
        </Button>
        {currentStep < 2 ? (
          <Button onClick={handleNextStep}>Next</Button>
        ) : (
          <Button onClick={resetForm}>Send</Button>
        )}
      </S.ButtonContainer>
    </S.FormContainer>
  );
};

export default Form;
