import React, { FC } from "react";

interface IItem {
  item: string;
  color: string;
}

const OptionItem: FC<IItem> = ({ item, color }) => {
  const styles = { backgroundColor: color };
  return (
    <li
      style={styles}
      className="flex-container w-[222px] h-[50px]
       rounded-lg border-solid border-2 border-gray-300
       font-bold "
    >
      {item}
    </li>
  );
};

export default OptionItem;
