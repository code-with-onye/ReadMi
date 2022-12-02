import Image from "next/image";
import clsx from "clsx";

interface AvatarProps {
  variant: "circle" | "box";
  size: "sm" | "md" | "lg" | "xl";
  image?: any;
  Icon?: any;
}
const Avatar = ({ variant, size, image, Icon }: AvatarProps) => {
  return (
    <div
      className={clsx([
        "overflow-hidden shadow-md",
        variant === "circle" && "rounded-full",
        size === "sm" && " h-12 w-12",
        size === "xl" && " h-44 w-44",
        image && "bg-purple-500",
        Icon && "flex items-center justify-center bg-gray-200 text-2xl  ",
      ])}
    >
      {image ? (
        <Image
          src={image}
          width={100}
          height={100}
          layout="responsive"
          alt="image"
          loading="lazy"
          placeholder="blur"
        />
      ) : (
        <div>{Icon}</div>
      )}
    </div>
  );
};

export default Avatar;
