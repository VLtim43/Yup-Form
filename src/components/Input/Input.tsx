import { IdentificationBadge } from "@phosphor-icons/react";
import * as S from "./styles";
import React, { InputHTMLAttributes, useState } from "react";
import { FieldError, DeepMap } from "react-hook-form";
import { colors } from "../utils/colors";

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
  const [inputIcon, setInputIcon] = useState(true);

  const handleInputChange = (event: any) => {
    const inputValue = event.target.value;
    setInputIcon(!inputValue);
  };

  return (
    <S.Container>
      <S.Label>{label}</S.Label>

      <S.InputWrapper>
        <S.IconWrapper>
          <IdentificationBadge
            size={25}
            style={{
              visibility: inputIcon ? "initial" : "hidden",
              cursor: "text",
            }}
            color={colors.lightBeige}
          />
        </S.IconWrapper>
        <S.Input
          type={type}
          placeholder={placeholder}
          {...register}
          {...restProps}
          onChange={handleInputChange}
        />
      </S.InputWrapper>
      {errors && <S.ErrorMessage>{errors.message}</S.ErrorMessage>}
    </S.Container>
  );
};

export default Input;
