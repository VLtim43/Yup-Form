import React from "react";
import useStepStore from "../zustand/stepStore";
import { schema } from "../validation/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "./Input";

export const Form1 = () => {
  const { currentStep, goToStep } = useStepStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleNextStep = () => {
    const nextStep = currentStep + 1;
    if (nextStep <= 2) {
      goToStep(nextStep);
    }
  };

  const onSubmitHandler = (data: any) => {
    console.log({ data });
    handleNextStep();
    // reset();  // Uncomment if you want to reset form after submission
  };

  return (
    <div className="p-10 w-full h-full flex flex-col content-center">
      <h1 className="text-deeperBlue  font-young text-4xl font-bold">
        Hello! Tell us a little about yourself
      </h1>
      <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
        {/* <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          register={register("email")}
          errors={errors.email}
        />
        <button type="submit">Submit</button> */}
      </form>
    </div>
  );
};
