import Avatar from "../Atoms/Avatar";

import profile from "../../../public/avatar.jpeg";
import Typography from "../Atoms/Typography";

const MiniProfileCard = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Avatar variant="circle" size="sm" image={profile} />
      <div>
        <Typography variant="heading" size="md">
          John Doe
        </Typography>
        <Typography variant="paragraph" size="sm">
          posting publicly
        </Typography>
      </div>
    </div>
  );
};

export default MiniProfileCard;
