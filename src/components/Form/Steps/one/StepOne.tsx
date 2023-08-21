import React from "react";
import { useForm } from "react-hook-form";
import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../../Schemas/Schema";
import { colors } from "../../../utils/colors";
import Button from "../../../Button/Button";
import useStepStore from "../../../../Zustand/store";

export const StepOne: React.FC = () => {
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
    <S.MainContainer
      onSubmit={handleSubmit(onSubmitHandler)}
      noValidate
      autoComplete="false"
    >
      <S.ContentContainer>
        <S.TextContainer>
          Hello! Tell us a little about yourself
        </S.TextContainer>

        <input
          {...register("email")}
          placeholder="email"
          type="email"
          required
        />
        <p>{errors.email?.message}</p>
      </S.ContentContainer>
      <S.ButtonContainer backgroundColor={colors.lightCream}>
        {/* <button type="submit">Sign in</button> */}
        <Button type="submit">Next</Button>
      </S.ButtonContainer>
    </S.MainContainer>
  );
};
