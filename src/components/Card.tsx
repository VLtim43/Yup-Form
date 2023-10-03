// src/YourComponent/index.tsx

import image from "../assets/duotone5.png";

const Card = () => {
  return (
    <div className="flex w-auto h-[39vw]  rounded-xl overflow-hidden shadow-md bg-slate-200">
      <div className="w-[22vw] bg-deeperBlue"></div>
      <div className="w-[42vw] bg-palePink"></div>
    </div>
  );
};

export default Card;
