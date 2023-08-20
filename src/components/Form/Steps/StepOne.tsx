import React from "react";
import * as S from "./styles";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface StepOneProps {
  register: UseFormRegister<FieldValues>;
  errors?: any;
}

export const StepOne: React.FC<StepOneProps> = ({ register, errors }) => {
  return (
    <>
      <S.TextContainer>Hello! tell us a little about yourself</S.TextContainer>
      <input
        {...register("email")}
        placeholder="email"
        type="email"
        required
        autoComplete="false"
      />
      <p>{errors.email?.message}</p>
      <button type="submit">Sign in</button>
    </>
  );
};
