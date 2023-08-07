import * as S from "./styles";
import { colors } from "../utils/colors";
import image from "../../assets/duotone.png";

const SideBar = () => {
  return (
    <S.SideContainer backgroundColor={colors.darkSlateBlue}>
      <div className="image-container">
        <img
          src={image}
          style={{
            width: "240px", // Adjust the width as needed
            height: "240px", // Adjust the height as needed
            alignSelf: "flex-end", // Align the image at the bottom
            filter: "blur(0.5px)",
          }}
        />
      </div>
    </S.SideContainer>
  );
};

export default SideBar;
