import React from "react";

import Button from "../components/Atoms/Button";
import Typography from "../components/Atoms/Typography";
import Avatar from "../components/Atoms/Avatar";
import Card from "../components/Atoms/Card";
import Field, { TextArea } from "../components/Atoms/Field";

import ButtonIcon from "../components/Molecules/ButtonIcon";
import profile from "../../public/avatar.jpeg";
import ProfileCard from "../components/Molecules/ProfileCard";
import ReviewCard from "../components/Molecules/ReviewCard";
import RatingForm from "../components/Molecules/RatingForm";
import RatingFooter from "../components/Molecules/RatingFooter";

import Header from "../components/Organisims/Header";

import { FiShare2 } from "react-icons/fi";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaSignInAlt } from "react-icons/fa";

import { GrInstagram } from "react-icons/gr";
import MiniProfileCard from "../components/Molecules/MiniProfileCard";
import RateMeForm from "../components/Organisims/RateMeForm";
import AuthButton from "../components/Molecules/AuthButton";

const components = () => {
  return (
    <div className="bg-gray-300">
      <Typography size="md" variant="heading">
        cool
      </Typography>
      <Button size="sm" variant="outline" onClick={() => {}}>
        Cool
      </Button>
      <Button
        size="sm"
        variant="fill"
        className="text-xs tracking-wider"
        onClick={() => {}}
      >
        submit
      </Button>
      <ButtonIcon
        Icon={<FiShare2 />}
        size="md"
        variant="outline"
        onClick={() => {}}
      >
        Share
      </ButtonIcon>
      <Header />
      <Avatar variant="circle" size="xl" image={profile} />
      <div className="flex">
        <Avatar variant="circle" size="sm" Icon={<BsTwitter />} />
        <Avatar variant="circle" size="sm" Icon={<GrInstagram />} />
        <Avatar variant="circle" size="sm" Icon={<BsFacebook />} />
      </div>
      <RateMeForm />
      <Card className="mb-4">gdgdkhsksjs</Card>
      <Field type="text" placeholder="Enter details" />
      <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-500 pb-8 ">
        <TextArea
          rows={4}
          placeholder="Rate james for his wondeful job done"
          required
        />
      </div>
      <AuthButton Icon={<FaSignInAlt />} variant="outline" onClick={() => {}}>
        {" "}
        Login{" "}
      </AuthButton>
      <AuthButton Icon={<FcGoogle />} variant="ghost" onClick={() => {}}>
        {" "}
        Sign With Google{" "}
      </AuthButton>

      <MiniProfileCard />
      <RatingForm />
      <RatingFooter />
      {/* <ProfileCard /> */}
      <ReviewCard />
    </div>
  );
};

export default components;
