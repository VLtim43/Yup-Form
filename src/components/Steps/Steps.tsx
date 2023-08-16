import React from "react";
import * as S from "./styles";
import { colors } from "../utils/colors";
import { Circle } from "@phosphor-icons/react";

type StepsProps = {
  activeStep: 0 | 1 | 2;
};

const Steps: React.FC<StepsProps> = ({ activeStep }) => {
  return (
    <S.Container>
      <S.IconContainer>
        <Circle
          size={31}
          color={colors.offWhite}
          weight={activeStep === 0 ? "regular" : "fill"}
        />
        <Circle
          size={31}
          color={colors.offWhite}
          weight={activeStep === 1 ? "regular" : "fill"}
        />
        <Circle
          size={31}
          color={colors.offWhite}
          weight={activeStep === 2 ? "regular" : "fill"}
        />
      </S.IconContainer>
    </S.Container>
  );
};

export default Steps;
