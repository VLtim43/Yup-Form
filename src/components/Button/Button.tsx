import * as S from "./styles";
import React from "react";
type Props = {
  content?: string;
  type?: "button" | "submit" | "reset";
  customType?: string;
};

const Button: React.FC<Props> = ({ content, type, customType }) => {
  return (
    <S.Container>
      <S.Button customType={customType} type={type}>
        {content}
      </S.Button>
    </S.Container>
  );
};

export default Button;
