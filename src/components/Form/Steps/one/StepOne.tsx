import React from "react";
import { useForm } from "react-hook-form";
import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../../Schemas/Schema";
import { colors } from "../../../utils/colors";
import Button from "../../../Button/Button";
import useStepStore from "../../../../Zustand/store";
import Input from "../../../Input/Input";

export const StepOne: React.FC = () => {
  const { currentStep, goToStep } = useStepStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleNextStep = () => {
    const nextStep = currentStep + 1;
    if (nextStep <= 2) {
      goToStep(nextStep);
    }
  };

  const onSubmitHandler = (data: any) => {
    console.log({ data });
    handleNextStep();
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
        <S.InputContainer>
          <Input label={"label"} />
          <Input label={"label"} />
        </S.InputContainer>
      </S.ContentContainer>
      <S.ButtonContainer backgroundColor={colors.lightCream}>
        {/* <button type="submit">Sign in</button> */}
        <Button type="submit">Next</Button>
      </S.ButtonContainer>
    </S.MainContainer>
  );
};
