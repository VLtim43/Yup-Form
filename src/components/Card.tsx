import React from "react";
import image from "../assets/duotone5.png";

import { PawPrint } from "@phosphor-icons/react";
import useStepStore from "../zustand/stepStore";

import { Form1 } from "./Form1";
import { Form2 } from "./Form2";

const Card = () => {
  const { currentStep } = useStepStore();

  return (
    <div className="flex w-auto h-[39vw] rounded-xl overflow-hidden shadow-md bg-slate-200 relative">
      <div className="flex flex-col justify-between w-[22vw] bg-deeperBlue">
        <div className="flex items-center justify-center py-12 space-x-3">
          <div className="bg-palePink rounded-full p-1.5 -rotate-45">
            <PawPrint size={28} weight="fill" color="#545871" />
          </div>
          <h2 className=" text-palePink font-young font-bold text-3xl">
            Pawnstatic
          </h2>
        </div>

        <div className="flex  content-center justify-center ">
          <img src={image} className="max-h-[200px]  bottom-0 left-0" />
        </div>
      </div>

      <div className="w-[42vw] bg-palePink">
        {currentStep === 0 ? <Form1 /> : currentStep === 1 ? <Form2 /> : null}
      </div>
    </div>
  );
};

export default Card;
