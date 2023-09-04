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
        <img src={image} draggable={false} />
      </S.ImageContainer>
    </S.SideContainer>
  );
};

export default SideBar;
