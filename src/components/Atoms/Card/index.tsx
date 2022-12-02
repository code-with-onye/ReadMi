import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}
const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={clsx([
        "w-full rounded-md bg-white  p-4 text-gray-300 drop-shadow-sm",
        className,
      ])}
    >
      {children}
    </div>
  );
};

export default Card;
