import { ReactNode } from "react";

type CTAButtonType = {
  isOutlined?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const CTAButton = ({
  isOutlined,
  children,
  className,
  onClick,
}: CTAButtonType) => {
  return (
    <button
      className={`${
        isOutlined
          ? "text-primary_green bg-white border-primary_green border-2 font-medium"
          : "text-white bg-[#085235]"
      } px-4 py-2 rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CTAButton;
