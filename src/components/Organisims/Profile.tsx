import ProfileCard from "../Molecules/ProfileCard";

export interface ProfilProps {
  imgURL: any;
  username?: string | undefined | null;
}
const Profile = ({ imgURL, username }: ProfilProps) => {
  return (
    <div className="layout">
      <ProfileCard imgURL={imgURL} username={username} />
    </div>
  );
};

export default Profile;
