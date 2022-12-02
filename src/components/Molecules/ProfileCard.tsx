import Avatar from "../Atoms/Avatar";
import Card from "../Atoms/Card";
import Typography from "../Atoms/Typography";

import profile from "../../../public/avatar.jpeg";

import { BsTwitter, BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

import { ProfilProps } from "../Organisims/Profile";

const ProfileCard = ({ imgURL, username }: ProfilProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-3">
      <Avatar variant="circle" size="xl" image={profile} />
      <Typography size="lg" variant="heading" className="text-center">
        {username}
      </Typography>
      <Typography size="sm" variant="paragraph" className="text-center">
        A pasionate web developer that build on the web{" "}
      </Typography>
      <div className="flex items-center gap-x-3">
        <Avatar variant="circle" size="sm" Icon={<BsTwitter />} />
        <Avatar variant="circle" size="sm" Icon={<GrInstagram />} />
        <Avatar variant="circle" size="sm" Icon={<BsFacebook />} />
      </div>
    </div>
  );
};

export default ProfileCard;
