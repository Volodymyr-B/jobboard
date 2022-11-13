import React, { FC, ReactNode, useState } from "react";

interface ProviderProps {
  children: ReactNode;
  pic: string;
}

const Modal: FC<ProviderProps> = ({ children, pic }) => {
  const [modal, setModal] = useState<boolean>(false);
  const modalHandler = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("scrollOff");
  } else {
    document.body.classList.remove("scrollOff");
  }

  return (
    <>
      <div onClick={modalHandler}>{children}</div>
      {modal && (
        <div
          onClick={modalHandler}
          className="w-[100vw] h-[100vh] fixed top-0 left-0
          flex-container
          bg-[rgba(0,0,0,0.5)]"
        >
          <div onClick={(e) => e.stopPropagation()}>
            <img src={pic} alt="random img" />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
