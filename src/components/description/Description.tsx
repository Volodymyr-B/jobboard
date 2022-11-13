import React, { FC } from "react";

import { MdEuroSymbol } from "react-icons/md";

import { openDays } from "../../helpers/openDays";
import { salaryConverter } from "../../helpers/salaryConverter";

import { useJobContext } from "../../context/contextHooks";

const Description: FC = () => {
  const { job } = useJobContext();

  if (!job) return null;

  const { createdAt, salary, title } = job;
  const openedAgo = openDays(createdAt);
  const convertedSalary = salaryConverter(salary);

  return (
    <>
      <div className="flex justify-between relative mb-6 md:mb-0">
        <div className="max-w-[500px]">
          <div className="font-bold text-2xl mb-6 md:mb-2">{title}</div>
          <div className="my-2">
            <span className="text-secondary text-sm md:text-base">
              Posted {openedAgo} days ago
            </span>
          </div>
        </div>
        <div
          className="flex items-end md:items-start flex-col-reverse md:flex-col
      text-lg absolute md:static bottom-0 right-0"
        >
          <span className="flex-container font-bold">
            <MdEuroSymbol className="mr-1" /> {convertedSalary}
          </span>
          <span>Brutto,per year</span>
        </div>
      </div>
      <p>
        At WellStar, we all share common goals. That's what makes us so
        successful – and such an integral part of our communities. We want the
        same things, for our organization, for our patients, and for our
        colleagues. As the most integrated healthcare provider in Georgia, this
        means we pride ourselves on investing in the communities that we serve.
        We continue to provide innovative care models, focused on improving
        quality and access to healthcare.
      </p>
    </>
  );
};

export default Description;
