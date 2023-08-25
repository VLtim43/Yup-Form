import React from "react";
import { useForm } from "react-hook-form";
import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../../Schemas/Schema";
import { colors } from "../../../utils/colors";
import Button from "../../../Button/Button";
import Input from "../../../Input/Input";

export const StepOne = () => {
  // Define your Yup schema here
  // const schema = ...

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Provide your Yup schema here
  });

  const onSubmitHandler = (data: any) => {
    window.alert(data); // Do something with the form data
  };

  return (
    <S.MainContainer onSubmit={handleSubmit(onSubmitHandler)} noValidate>
      <S.ContentContainer>
        <S.TextContainer>
          Hello! Tell us a little about yourself
        </S.TextContainer>
        <S.InputContainer>
          <Input
            type="text"
            label="First Name"
            placeholder="Enter your First Name"
            register={register("firstName")}
            errors={errors.firstName}
            style={{ textTransform: "capitalize" }}
          />
          <Input
            type="text"
            label="Last Name"
            placeholder="Enter your Last Name"
            register={register("lastName")}
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
