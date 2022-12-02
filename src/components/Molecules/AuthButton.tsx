import Button from "../Atoms/Button";

type AuthProps = {
  Icon: any;
  className?: string;
  variant: "outline" | "fill" | "ghost";
  children: React.ReactNode;
  onClick: () => void;
};
export default function AuthButton({
  Icon,
  variant,
  children,
  onClick,
}: AuthProps) {
  return (
    <Button
      variant={variant}
      size="lg"
      className="flex w-full items-center justify-center gap-x-2 p-2 font-semibold tracking-wider"
      onClick={onClick}
    >
      {Icon}
      {children}
    </Button>
  );
}
