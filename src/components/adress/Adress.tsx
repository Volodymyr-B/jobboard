import React, { FC } from "react";

import { MdLocationPin } from "react-icons/md";
import map from "../../assets/images/map.png";

import { useJobContext } from "../../context/contextHooks";

const Adress: FC = () => {
  const { job } = useJobContext();
  if (!job) return null;

  const { address, phone, email, name } = job;
  return (
    <div className="flex-column">
      <div
        className="flex flex-col justify-center max-w-[402px] h-[218px] gap-1
        bg-[#202336] text-white pl-14 lg:text-[18px] rounded-t-lg pr-10 w-full"
      >
        <span className="lg:text-xl font-bold">Department name.</span>
        <span className="lg:text-xl font-bold">{name}.</span>
        <span className="flex items-center gap-1 -ml-1">
          <MdLocationPin color="grey" size={25} />
          {address}
        </span>
        <span>{phone}</span>
        <span>{email}</span>
      </div>
      <div className="max-w-[402px] h-[218px] rounded-b-lg overflow-hidden ">
        <img src={map} alt="google map" />
      </div>
    </div>
  );
};

export default Adress;
