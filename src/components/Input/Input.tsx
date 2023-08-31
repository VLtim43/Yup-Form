import { IdentificationBadge } from "@phosphor-icons/react";
import * as S from "./styles";
import React, { InputHTMLAttributes, useState } from "react";
import { FieldError, DeepMap } from "react-hook-form";
import Icon from "../Icon/Icon";

const getInputType = (type: string): string => {
  switch (type) {
    case "firstname":
    case "lastname":
      return "text";
    case "password":
      return "password";
    case "email":
      return "email";
    case "number":
      return "number";
    case "phonenumber":
      return "tel";
    default:
      return "text";
  }
};

type Props = {
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "phonenumber"
    | "reset"
    | "firstname"
    | "lastname";
  placeholder?: string;
  label: string;
  register: any;
  errors?: DeepMap<any, FieldError>;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({
  type = "text",
  placeholder,
  label,
  errors,
  register,
  ...restProps
}) => {
  const [inputIcon, setInputIcon] = useState(true);

  const maskPhoneNumber = (value: string) => {
    let masked = value.replace(/\D/g, "");
    if (masked.length > 2) {
      masked = "(" + masked.substring(0, 2) + ") - " + masked.substring(2);
    }
    return masked;
  };

  const handleInputChange = (event: any) => {
    let inputValue = event.target.value;
    if (type === "number" && /\D/.test(inputValue)) {
      event.target.value = inputValue.replace(/\D/g, "");
    }
    if (type === "phonenumber") {
      event.target.value = maskPhoneNumber(inputValue);
    }
    setInputIcon(!inputValue);
  };

  return (
    <S.Container>
      <S.Label>{label}</S.Label>

      <S.InputWrapper>
        <S.IconWrapper>
          <Icon type={type} isVisible={inputIcon} />
        </S.IconWrapper>
        <S.Input
          autoComplete="false"
          {...register}
          {...restProps}
          type={getInputType(type)}
          placeholder={placeholder}
          onChange={handleInputChange}
        />
      </S.InputWrapper>
      {errors && (
        <S.ErrorMessage className="animate__animated animate__fadeInUp animate__faster ">
          {errors.message}
        </S.ErrorMessage>
      )}
    </S.Container>
  );
};

export default Input;
