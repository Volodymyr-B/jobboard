import React, { FC } from "react";

import Underline from "../commons/Underline";

import { useJobContext } from "../../context/contextHooks";
import Modal from "../commons/Modal";

const AttachedImages: FC = () => {
  const { job } = useJobContext();

  return (
    <div className="mt-[40px] md:mt-[85px]">
      <h4>Attached images</h4>
      <Underline />
      <div className="flex gap-[10px] mt-6 mb-14 md:mb-[98px] overflow-y-auto">
        {job?.pictures.map((picture, index) => (
          <div key={index}>
            <Modal pic={picture}>
              <div
                className="w-[200px] h-[116px] cursor-pointer
              rounded-lg overflow-hidden"
              >
                <img src={picture} alt={picture} />
              </div>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttachedImages;
