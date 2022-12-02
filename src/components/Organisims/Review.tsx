import ReviewCard from "../Molecules/ReviewCard";

const Review = () => {
  return (
    <div className="layout grid grid-cols-2 gap-3">
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </div>
  );
};

export default Review;
