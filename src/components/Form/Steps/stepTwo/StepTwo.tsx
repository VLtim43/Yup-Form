import React from "react";
import { useForm } from "react-hook-form";
import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../../Schemas/Schema";
import { colors } from "../../../utils/colors";
import Button from "../../../Button/Button";
import useStepStore from "../../../../Zustand/store";

export const StepTwo: React.FC = () => {
  const { currentStep, goToStep } = useStepStore();

  const handleNextStep = () => {
    const nextStep = currentStep + 1;
    if (nextStep <= 2) {
      goToStep(nextStep);
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
    reset();
  };

  return (
    <>
      <S.MainContainer>
        <S.TextContainer>
          Hello! Tell us a little about yourself
        </S.TextContainer>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          noValidate
          autoComplete="false"
        >
          <input
            {...register("email")}
            placeholder="email"
            type="email"
            required
          />
          <p>{errors.email?.message}</p>

          <button type="submit">Sign in</button>
        </form>
      </S.MainContainer>
      <S.ButtonContainer backgroundColor={colors.lightCream}>
        <Button onClick={handleNextStep}>Next</Button>
      </S.ButtonContainer>
    </>
  );
};
