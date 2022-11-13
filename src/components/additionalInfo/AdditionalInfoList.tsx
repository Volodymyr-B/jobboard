import React, { FC } from "react";

import OptionItem from "./OptionItem";

interface IList {
  listItem: string[] | undefined;
  title: string;
  color: string;
}

const AdditionalInfoList: FC<IList> = ({ listItem, title, color }) => {
  return (
    <div className="mb-6">
      <h6 className="mb-[10px]">{title}</h6>
      <div className="flex gap-2">
        {listItem?.map((item, index) => (
          <OptionItem key={index} item={item} color={color} />
        ))}
      </div>
    </div>
  );
};

export default AdditionalInfoList;
