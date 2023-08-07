import * as S from "./styles";
import Form from "../Form/Form";
import { colors } from "../utils/colors";

const FormPage = () => {
  return (
    <S.FormPage backgroundColor={colors.palePink}>
      <Form />
    </S.FormPage>
  );
};

export default FormPage;
