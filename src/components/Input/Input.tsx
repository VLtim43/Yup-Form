import * as S from "./styles";
import React, { InputHTMLAttributes } from "react";
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
  register: any;
  errors?: DeepMap<any, FieldError>;
} & InputHTMLAttributes<HTMLInputElement>; // Extend Props with InputHTMLAttributes

const Input: React.FC<Props> = ({
  type = "text",
  placeholder,
  label,
  register,
  errors,
  ...restProps // Rest of the input props
}) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input
        type={type}
        placeholder={placeholder}
        {...register}
        {...restProps}
      />
      {errors && <S.ErrorMessage>{errors.message}</S.ErrorMessage>}
    </S.Container>
  );
};

export default Input;
