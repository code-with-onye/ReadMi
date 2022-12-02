import Typography from "../Atoms/Typography";

import { AiTwotoneLike } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <Typography size="lg" variant="heading" className="flex items-center ">
        RateMe <AiTwotoneLike />
      </Typography>
    </div>
  );
};

export default Footer;
