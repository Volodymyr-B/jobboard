import React, { FC } from "react";

import { MdArrowBackIosNew } from "react-icons/md";

import { useGoBack } from "../../hooks/useGoBack";

const ReturnBtn: FC = () => {
  return (
    <button
      onClick={useGoBack()}
      className="flex-container w-[213px] h-[50px] 2xl:-ml-24
     bg-gray-300 m-auto md:m-0 my-8"
    >
      <MdArrowBackIosNew className="mr-3 -ml-3" size={25} />
      <span className="">RETURN TO JOB BOARD</span>
    </button>
  );
};

export default ReturnBtn;
