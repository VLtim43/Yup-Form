import React from "react";
import * as S from "./styles";
import { colors } from "../utils/colors";
import image from "../../assets/duotone5.png";
import { PawPrint } from "@phosphor-icons/react";
import Steps from "../Steps/Steps";

const SideBar = () => {
  return (
    <S.SideContainer backgroundColor={colors.darkSlateBlue}>
      <S.TextContainer>
        <S.Icon color={colors.lightCream}>
          <PawPrint
            size={30}
            weight="fill"
            color={colors.darkSlateBlue}
            style={{ transform: "rotate(-25deg)", padding: "5px" }}
          />
        </S.Icon>
        <S.Header>Dog Form</S.Header>
      </S.TextContainer>
      <Steps />
      <S.ImageContainer>
        <img
          src={image}
          draggable={false}
          style={{
            width: "16vw",
            height: "16vw",
            marginLeft: "50px",
            alignSelf: "flex-end",
            filter: "blur(0.5px) opacity(70%) ",
          }}
        />
      </S.ImageContainer>
    </S.SideContainer>
  );
};

export default SideBar;
