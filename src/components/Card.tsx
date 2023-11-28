import React from "react";
import image from "../assets/duotone5.png";

import { PawPrint } from "@phosphor-icons/react";
import useStepStore from "../zustand/stepStore";

import { Form1 } from "./Form1";
import { Form2 } from "./Form2";
import ShouldRender from "../utils/souldRender";

const Card = () => {
  const { currentStep } = useStepStore();

  return (
    <>
      <p>card</p>
    </>
  );
};

export default Card;
// <div className="flex w-[880px] h-[520px] rounded-xl overflow-hidden shadow-md  relative">
//   <div className="flex flex-col justify-between w-[400px] bg-deeperBlue">
//     <div className="flex items-center justify-center py-12 space-x-3">
//       <div className="bg-palePink rounded-full p-1.5 -rotate-45">
//         <PawPrint size={28} weight="fill" color="#545871" />
//       </div>
//       <h2 className=" text-palePink font-young font-bold text-3xl">
//         Pawnstatic
//       </h2>
//     </div>

//     <div className="flex  content-center justify-center ">
//       <img src={image} className="w-52 bottom-0 left-0" />
//     </div>
//   </div>

//   <div className="w-full bg-palePink">
//     {currentStep === 0 ? <Form1 /> : currentStep === 1 ? <Form2 /> : null}
//   </div>
// </div>
