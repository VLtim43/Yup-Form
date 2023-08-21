import React from "react";
import { useForm } from "react-hook-form";
import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../../Schemas/Schema";

export const StepOne: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data: any) => {
    console.log({ data });
    reset();
  };

  return (
    <>
      <S.TextContainer>Hello! Tell us a little about yourself</S.TextContainer>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        noValidate
        autoComplete="false"
      >
        <input
          {...register("email")}
          placeholder="email"
          type="email"
          required
        />
        <p>{errors.email?.message}</p>

        <button type="submit">Sign in</button>
      </form>
    </>
  );
};
