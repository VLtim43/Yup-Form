import * as S from "./styles";
import Form from "../Form/Form";
import { colors } from "../utils/colors";
import SideBar from "../SideBar/SideBar";

const FormPage = () => {
  return (
    <S.BackGround backgroundColor={colors.darkGray}>
      <S.Container>
        <SideBar />
        <Form />
      </S.Container>
    </S.BackGround>
  );
};

export default FormPage;
