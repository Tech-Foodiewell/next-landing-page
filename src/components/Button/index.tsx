import { ReactNode } from "react";

type ButtonType = {
  className?: string;
  children: ReactNode;
};

const Button = ({ className, children }: ButtonType) => {
  return (
    <button
      className={`text-white bg-primary px-4 py-2 rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
