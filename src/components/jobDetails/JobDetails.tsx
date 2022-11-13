import React, { FC } from "react";

import Underline from "../commons/Underline";

import { CiBookmark } from "react-icons/ci";
import { BsFillShareFill } from "react-icons/bs";

const JobDetails: FC = () => {
  return (
    <>
      <div className="flex justify-between relative">
        <h4>Job Details</h4>
        <div className="flex gap-6 absolute sm:static -bottom-14 text-secondary">
          <button className="flex-container gap-2">
            <CiBookmark size={20} />
            <span className="text-base md:text-lg">Save to my list</span>
          </button>
          <button className="flex-container gap-2">
            <BsFillShareFill size={20} />
            <span className="text-base md:text-lg">Share</span>
          </button>
        </div>
      </div>
      <Underline />
      <div className="mb-20 sm:mb-0"></div>
    </>
  );
};

export default JobDetails;
