import { HTMLAttributes } from "react";
import * as S from "./styles";

type Props = {
  content?: string;
  type?: "button" | "submit" | "reset"; // Allow type prop with specific values
};

const Button: React.FC<Props> = ({ content, type }) => {
  return (
    <S.Container>
      <S.Button type={type}>{content}</S.Button>
    </S.Container>
  );
};

export default Button;
