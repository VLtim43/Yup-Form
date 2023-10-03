import React from "react";
import image from "../assets/duotone5.png";

import { PawPrint } from "@phosphor-icons/react";
import useStepStore from "../zustand/stepStore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form1 } from "./Form1";
import { Form2 } from "./Form2";

const Card = () => {
  const { currentStep } = useStepStore();

  return (
    <div className="flex w-auto h-[39vw] rounded-xl overflow-hidden shadow-md bg-slate-200 relative">
      <div className="w-[22vw] bg-deeperBlue relative">
        <h2 className="font-young">
          <PawPrint size={32} weight="bold" />
          Pawnstatic
        </h2>
        <img src={image} className=" max-h-[240px] absolute bottom-0 left-0" />
      </div>
      <div className="w-[42vw] bg-palePink">
        {currentStep === 0 ? <Form1 /> : currentStep === 1 ? <Form2 /> : null}
      </div>
    </div>
  );
};

export default Card;
