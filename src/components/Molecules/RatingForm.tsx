import { TextArea } from "../Atoms/Field";

import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import RatingFooter from "./RatingFooter";

const RateMe = () => {
  return (
    <div className="mb-4 flex  items-center gap-3 text-4xl">
      <BsStarFill />
      <BsStarFill />
      <BsStarHalf />
      <BsStar />
    </div>
  );
};

export default function RatingForm() {
  return (
    <div className="flex  w-full flex-col items-center justify-center ">
      <RateMe />

      <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-200 ">
        <TextArea
          rows={4}
          placeholder="Rate james for his wondeful job done"
          required
        />
        <RatingFooter className="my-3 ml-2" />
      </div>
    </div>
  );
}
