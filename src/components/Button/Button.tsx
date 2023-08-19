import * as S from "./styles";
import React from "react";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  customType?: string;
};

const Button: React.FC<Props> = ({ children, onClick, type, customType }) => {
  return (
    <S.Container>
      <S.Button customType={customType} type={type} onClick={onClick}>
        {children}
      </S.Button>
    </S.Container>
  );
};

export default Button;
