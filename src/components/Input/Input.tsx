import * as S from "./styles";
import React, { InputHTMLAttributes } from "react";
import { FieldError, DeepMap } from "react-hook-form";
import Icon from "../Icon/Icon";
import { useInputIcon } from "../utils/inputHandler";
import { IconType } from "../utils/types";
import { usePhoneNumberMask } from "../utils/phoneMask";

enum InputType {
  text = "text",
  telephone = "tel",
  email = "email",
  password = "password",
  birthday = "date",
}

type Props = {
  type?: keyof typeof InputType;
  placeholder?: string;
  icon?: IconType;
  label: string;
  register: any;
  errors?: DeepMap<any, FieldError>;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({
  type = "text",
  placeholder,
  icon,
  label,
  errors,
  register,
  ...restProps
}) => {
  const [inputIcon, handleInputChange] = useInputIcon(true);

  const getInputType = (type: keyof typeof InputType): string => {
    return InputType[type] || "text";
  };

  const applyPhoneMask = usePhoneNumberMask();

  const handlePhoneMask = (type: keyof typeof InputType) => (event: any) => {
    handleInputChange(type)(event);
    if (type === "telephone") {
      applyPhoneMask(event);
    }
  };

  return (
    <S.Container>
      <S.Label>{label}</S.Label>

      <S.InputWrapper>
        <S.IconWrapper>
          <Icon name={icon} isVisible={inputIcon} />
        </S.IconWrapper>
        <S.Input
          autoComplete="off"
          {...register}
          {...restProps}
          type={getInputType(type as keyof typeof InputType)}
          placeholder={placeholder}
          onChange={handlePhoneMask(type as keyof typeof InputType)}
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
