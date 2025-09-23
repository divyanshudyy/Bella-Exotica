import { StarRating } from "../ui/StarRating";

const ReviewCard = ({ review, isActive }) => {
  return (
    <div
      className={`bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-[380px] transition-opacity duration-300 shadow-md ${
        !isActive ? "opacity-60" : ""
      }`}
    >
      <div>
        <p className="text-sm font-bold tracking-widest text-gray-400 uppercase">
          {review.category}
        </p>
        <p className="mt-4 text-lg sm:text-xl text-gray-800 font-medium leading-tightest">
          {review.text}
        </p>
      </div>
      <div className="mt-6 relative pt-6 border-t border-gray-100">
        <div className="absolute -top-14 right-0 text-[8rem] sm:text-[10rem] font-bold text-gray-100 leading-none select-none z-0">
          ”
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <StarRating rating={review.rating} />
            <span className="font-bold text-gray-700 text-lg">
              {review.rating.toFixed(1)}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={review.author.avatarUrl}
              alt={review.author.name}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex flex-col justify-center">
              <p className="font-bold text-gray-800 leading-tight">
                {review.author.name}
              </p>
              <p className="text-sm text-gray-500 leading-tight">
                {review.author.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
