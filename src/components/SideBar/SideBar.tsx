import React from "react";
import * as S from "./styles";
import { colors } from "../utils/colors";
import image from "../../assets/duotone5.png";
import { PawPrint } from "@phosphor-icons/react";
const SideBar = () => {
  return (
    <S.SideContainer backgroundColor={colors.darkSlateBlue}>
      <S.TextContainer>
        <S.Icon color={colors.lightCream}>
          <PawPrint
            size={28}
            weight="fill"
            color={colors.darkSlateBlue}
            style={{ transform: "rotate(-25deg)" }}
          />
        </S.Icon>
        <S.Header>Dog Form</S.Header>
      </S.TextContainer>
      <S.ImageContainer>
        <img
          src={image}
          style={{
            width: "240px",
            height: "240px",
            alignSelf: "flex-end",
            filter: "blur(0.5px) opacity(70%) ",
          }}
        />
      </S.ImageContainer>
    </S.SideContainer>
  );
};

export default SideBar;
