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
          size={23}
          color={currentStep === 0 ? colors.lightCream : colors.steelGray}
          weight={currentStep === 0 ? "fill" : "bold"}
        />
        <p
          style={{
            color: currentStep === 0 ? colors.lightCream : colors.darkGray,
          }}
        >
          Owner information
        </p>
      </S.IconContainer>
      <S.IconContainer>
        <Circle
          size={23}
          color={currentStep === 1 ? colors.lightCream : colors.steelGray}
          weight={currentStep === 1 ? "fill" : "bold"}
        />
        <p
          style={{
            color: currentStep === 1 ? colors.lightCream : colors.darkGray,
          }}
        >
          Pet information
        </p>
      </S.IconContainer>
      <S.IconContainer>
        <Circle
          size={23}
          color={currentStep === 2 ? colors.lightCream : colors.steelGray}
          weight={currentStep === 2 ? "fill" : "bold"}
        />
        <p
          style={{
            color: currentStep === 2 ? colors.lightCream : colors.darkGray,
          }}
        >
          Review
        </p>
      </S.IconContainer>
    </S.Container>
  );
};

export default Steps;
