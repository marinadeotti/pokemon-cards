import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  type?: "submit" | "reset" | "button"
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, type, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className="px-4 py-2 rounded-lg bg-indigo-600 text-white disabled:opacity-50"
    >
      {children}
    </button>
  );
};

export default Button;
