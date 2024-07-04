import React, { useRef } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="shadow-lg max-w-lg w-full rounded-2xl bg-indigo-950 text-white p-4 relative mx-6"
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-2xl">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
