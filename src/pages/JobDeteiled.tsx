import React, { FC } from "react";
import { Navigate } from "react-router-dom";

import AdditionalInfo from "../components/additionalInfo/AdditionalInfo";
import AttachedImages from "../components/attachedImages/AttachedImages";
import ReturnBtn from "../components/buttons/ReturnBtn";
import ApplyBtn from "../components/buttons/ApplyBtn";
import JobDetails from "../components/jobDetails/JobDetails";
import Description from "../components/description/Description";
import Responsibilities from "../components/responsibilities/Responsibilities";
import Adress from "../components/adress/Adress";

import { useJobContext } from "../context/contextHooks";

const JobDeteiled: FC = () => {
  const { job } = useJobContext();

  if (!job) return <Navigate to="/jobboard" />;

  return (
    <div className="m-auto max-w-[1258px] mt-14 text-primary">
      <div className="lg:flex gap-[82px] mx-3">
        <div className="lg:max-w-[775px] md:mb-24">
          <JobDetails />
          <div className="hidden md:block">
            <ApplyBtn />
          </div>
          <Description />
          <Responsibilities />
          <div className="flex-container md:block sm:mb-10">
            <ApplyBtn />
          </div>
          <div className="flex flex-col-reverse md:block">
            <AdditionalInfo />
            <AttachedImages />
          </div>
          <ReturnBtn />
        </div>
        <Adress />
      </div>
    </div>
  );
};

export default JobDeteiled;
