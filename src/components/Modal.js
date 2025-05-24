import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
      <div className="modal">
        <span onClick={onClose} className="close">×</span>
        {children}
      </div>
    );
};

export default Modal;