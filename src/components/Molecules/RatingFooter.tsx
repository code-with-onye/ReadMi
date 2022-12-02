import clsx from "clsx";

import Button from "../Atoms/Button";

type RatingFooterProps = {
  className?: string;
};

const RatingFooter = ({ className }: RatingFooterProps) => {
  return (
    <div className={clsx(["flex items-center gap-3", className])}>
      <Button variant="outline" size="sm" onClick={() => {}}>
        Cancel
      </Button>
      <Button variant="fill" size="sm" onClick={() => {}}>
        Post
      </Button>
    </div>
  );
};

export default RatingFooter;
