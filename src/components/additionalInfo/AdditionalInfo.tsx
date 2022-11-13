import React, { FC } from "react";

import Underline from "../commons/Underline";
import AdditionalInfoItem from "./AdditionalInfoList";

import { useJobContext } from "../../context/contextHooks";

const AdditionalInfo: FC = () => {
  const { job } = useJobContext();
  if (!job) return null;

  const { employment_type, benefits } = job;

  return (
    <div>
      <h4>Additional info</h4>
      <Underline />
      <AdditionalInfoItem
        listItem={employment_type}
        title={"Employment type"}
        color={"#A1B1DB"}
      />
      <AdditionalInfoItem
        listItem={benefits}
        title={"Benefits"}
        color={"rgba(255, 207, 0, 0.15)"}
      />
    </div>
  );
};

export default AdditionalInfo;
