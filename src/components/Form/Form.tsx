import React from "react";
import { useForm } from "react-hook-form";
import * as S from "./styles";
import Button from "../Button/Button";

type Props = {
  fullName: string;
};

const Form = () => {
  const { register, handleSubmit } = useForm<Props>();

  const onSubmitHandler = (values: Props) => {
    window.alert(values.fullName);
  };

  return (
    <S.FormContainer>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input {...register("fullName")} id="fullName" type="text" />
        </div>

        <div>
          <input
            name="approvesTutorial"
            id="approves-tutorial"
            type="checkbox"
          />
          <label htmlFor="approves-tutorial">
            Do you approve this tutorial?
          </label>
        </div>

        <Button type="submit" content="a" />
      </form>
    </S.FormContainer>
  );
};

export default Form;
