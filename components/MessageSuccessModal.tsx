"use client";

import type React from "react";
import { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MessageSuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="success-message">
      <button className="success-message-button" onClick={onClose}>
        <IoCloseSharp />
      </button>
      <p>YOUR MESSAGE HAS BEEN SUCCESSFULLY SENT!</p>
    </div>
  );
};

export default MessageSuccessModal;
