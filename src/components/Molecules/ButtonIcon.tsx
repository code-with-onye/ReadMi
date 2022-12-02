import Button from "../Atoms/Button";
import { FiShare2 } from "react-icons/fi";
import { ButtonProps } from "../Atoms/Button";
import clsx from "clsx";

interface ButtonIconProps {
  Icon?: any;
}
const ButtonIcon = ({
  children,
  Icon,
  size,
  variant,
}: ButtonIconProps & ButtonProps) => {
  return (
    <div className="">
      <Button
        size={size}
        variant={variant}
        className={clsx(["flex items-center gap-2 "])}
      >
        {/* <FiShare2 className="text-sm text-white" /> */}
        {Icon}
        {children}
      </Button>
    </div>
  );
};

export default ButtonIcon;
