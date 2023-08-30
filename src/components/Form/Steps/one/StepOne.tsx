import React from "react";
import { useForm } from "react-hook-form";
import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../../Schemas/Schema";
import { colors } from "../../../utils/colors";
import Button from "../../../Button/Button";
import Input from "../../../Input/Input";
import useStepStore from "../../../../Zustand/store";

export const StepOne = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { currentStep, goToStep } = useStepStore();

  const handleNextStep = () => {
    const nextStep = currentStep + 1;
    if (nextStep <= 2) {
      goToStep(nextStep);
    }
  };

  const onInvalid = (errors: any) => console.error(errors);
  const onSubmitHandler = () => {
    console.log("submit");
    handleNextStep();
  };

  return (
    <S.MainContainer
      onSubmit={handleSubmit(onSubmitHandler, onInvalid)}
      //@ts-ignore
      autocomplete="off"
    >
      <S.ContentContainer>
        <S.TextContainer>
          Hello! Tell us a little about yourself
        </S.TextContainer>
        <S.InputContainer>
          <Input
            register={register("firstName")}
            type="text"
            label="First Name"
            placeholder="Enter your First Name"
            errors={errors.firstName}
            style={{ textTransform: "capitalize" }}
          />
          <Input
            register={register("lastName")}
            type="text"
            label="Last Name"
            placeholder="Enter your last Name"
            errors={errors.lastName}
          />
          <Input
            register={register("email")}
            type="text"
            label="Email"
            placeholder="Enter your email "
            errors={errors.email}
          />
          <Input
            register={register("phoneNumber")}
            type="tel"
            label="Phone Number"
            placeholder="Enter your Phone Number "
            errors={errors.phoneNumber}
          />
        </S.InputContainer>
      </S.ContentContainer>
      <S.ButtonContainer backgroundColor={colors.lightCream}>
        <Button type="submit">Sign in</Button>
      </S.ButtonContainer>
    </S.MainContainer>
  );
};

export default StepOne;
