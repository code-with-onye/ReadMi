import React from "react";
import clsx from "clsx";

export interface ButtonProps {
  variant?: "outline" | "fill" | "ghost";
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick: () => void;
}
const Button = ({
  variant,
  children,
  size,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={clsx([
        "rounded-lg",
        variant === "outline" && " border-2 border-purple-500 bg-transparent",
        variant === "fill" &&
          " border-2 border-purple-500 bg-purple-500 text-white",
        variant === "ghost" && "bg-gray-200 text-gray-900",
        size === "sm" && "px-3 py-1.5",
        size === "md" && "px-6 py-2",
        size === "lg" && "",
        className,
      ])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
