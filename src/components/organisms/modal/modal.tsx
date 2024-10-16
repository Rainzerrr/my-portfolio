"use client";
import React, { Dispatch, FC, ReactNode } from "react";

import "./modal.scss";

interface ModalProps {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ setIsOpen, children }) => {
  return (
    <div className="modal">
      <div className="modal__overlay" onClick={() => setIsOpen(false)}></div>
      <div className="modal__children">{children}</div>
    </div>
  );
};

export default Modal;
