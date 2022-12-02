import Avatar from "../Atoms/Avatar";
import Card from "../Atoms/Card";
import Typography from "../Atoms/Typography";

import profile from "../../../public/avatar.jpeg";

import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

const ReviewCard = () => {
  return (
    <Card className="flex w-full flex-col  space-y-1">
      <Avatar variant="circle" size="sm" image={profile} />
      <Typography size="lg" variant="heading">
        James Bold{" "}
      </Typography>
      <div className="flex items-center text-lg text-gray-900">
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
        <BsStar />
      </div>
      <Typography size="sm" variant="paragraph">
        A pasionate web developer that build on the web{" "}
      </Typography>
    </Card>
  );
};

export default ReviewCard;
