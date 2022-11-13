import React, { FC } from "react";

import { MdLocationPin } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";

import { openDays } from "../../helpers/openDays";

import { useJobContext } from "../../context/contextHooks";

import { JobData } from "../../models/jobData";

interface IJob {
  job: JobData;
}

const Card: FC<IJob> = ({ job }) => {
  const { address, createdAt, name, pictures, description } = job;
  const { setJobHandler } = useJobContext();
  const openedAgo = openDays(createdAt);

  return (
    <li
      onClick={() => setJobHandler(job)}
      className="w-full bg-[#EFF0F5] sm:bg-white mb-2 rounded-lg 
      md:max-h-40 px-4 py-6 shadow-md"
    >
      <div className=" flex gap-6 justify-between text-[16px] text-secondary h-full">
        <div>
          <div
            className="w-[66px] h-[66px] md:w-[85px] md:h-[85px]
           overflow-hidden rounded-full"
          >
            <img src={pictures[0]} alt="randomIMG" />
          </div>
        </div>
        <div className="flex justify-between w-full relative">
          <div className="flex flex-col justify-between md:w-[75%]">
            <span
              className="text-lg md:text-[20px] font-bold text-primary
            h-14 overflow-hidden"
            >
              {description}
            </span>
            <div className="md:flex">
              <span>{name}</span>
              <span>{address}</span>
            </div>
            <div className="flex items-center gap-1 -ml-1">
              <MdLocationPin size={20} />
              <span>Vienna, Austria</span>
            </div>
          </div>
          <div
            className="absolute -top-5 -left-1 w-full md:w-auto
           md:static flex md:flex-col justify-between items-end"
          >
            <div>
              <CiBookmark size={20} />
            </div>
            <span className="text-sm md:text-base text-end">
              Posted {openedAgo} days ago
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
