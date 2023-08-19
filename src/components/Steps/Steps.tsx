import React from "react";
import * as S from "./styles";
import { colors } from "../utils/colors";
import { Circle } from "@phosphor-icons/react";
import useFormStore from "../../Zustand/store";

const Steps: React.FC = () => {
  const currentStep = useFormStore((state) => state.currentStep);

  return (
    <S.Container>
      <S.IconContainer>
        <Circle
          size={currentStep === 0 ? 38 : 36}
          color={colors.steelGray}
          weight={currentStep === 0 ? "fill" : "regular"}
        />
        <Circle
          size={currentStep === 1 ? 38 : 36}
          color={colors.steelGray}
          weight={currentStep === 1 ? "fill" : "regular"}
        />
        <Circle
          size={currentStep === 2 ? 38 : 36}
          color={colors.steelGray}
          weight={currentStep === 2 ? "fill" : "regular"}
        />
      </S.IconContainer>
    </S.Container>
  );
};

export default Steps;
