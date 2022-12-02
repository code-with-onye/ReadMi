import clsx from "clsx";
interface TypographyProps {
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  variant?: "heading" | "paragraph";
  className?: string;
}

const Typography = ({
  children,
  size,
  variant,
  className,
}: TypographyProps) => {
  return (
    <p
      className={clsx([
        "text-gray-800",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        size === "lg" && "text-base",
        variant === "heading" && "font-semibold",
        variant === "paragraph" && "text-light",
        className,
      ])}
    >
      {children}
    </p>
  );
};

export default Typography;
