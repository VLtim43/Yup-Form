import React from "react";
import * as S from "./styles";
import { colors } from "../utils/colors";
import image from "../../assets/duotone5.png";

const SideBar = () => {
  return (
    <S.SideContainer backgroundColor={colors.darkSlateBlue}>
      <div className="image-container">
        <img
          src={image}
          style={{
            width: "240px",
            height: "240px",
            alignSelf: "flex-end",
            filter: "blur(0.5px) opacity(70%) ",
          }}
        />
      </div>
    </S.SideContainer>
  );
};

export default SideBar;
