import React from "react";
import { IoIosShare } from "react-icons/io";

import profile from "../../../public/avatar.jpeg";

import Avatar from "../Atoms/Avatar";

import ButtonIcon from "../Molecules/ButtonIcon";

const Logo = () => {
  return <div>RateMe</div>;
};

const Header = () => {
  return (
    <header className="sticky  top-0 z-50 flex w-full items-center justify-between rounded-2xl bg-white p-3 drop-shadow-md ">
      <Logo />
      <div className="flex items-center gap-x-4">
        <ButtonIcon
          Icon={<IoIosShare className="text-2xl" />}
          size="md"
          variant="ghost"
          onClick={() => {
            console.log("cool");
          }}
        ></ButtonIcon>
        <Avatar variant="circle" size="sm" image={profile} />
      </div>

      {/* shareLink button */}
    </header>
  );
};

export default Header;
