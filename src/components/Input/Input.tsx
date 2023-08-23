import * as S from "./styles";
import React from "react";
import { FieldError, DeepMap } from "react-hook-form";

type Props = {
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "button"
    | "submit"
    | "reset";
  placeholder?: string;
  label: string;
  register: any; // Pass the register function from react-hook-form
  errors: DeepMap<any, FieldError>; // Pass the errors object from react-hook-form
};

const Input: React.FC<Props> = ({
  type = "text",
  placeholder,
  label,
  register,
  errors,
}) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input
        type={type}
        placeholder={placeholder}
        {...register} // Spread the register function to bind it to the input
      />
      {errors && <S.ErrorMessage>{errors.message}</S.ErrorMessage>}
    </S.Container>
  );
};

export default Input;
