import { Star, Quote } from "lucide-react";

const ReviewCard = ({ review, isActive }) => (
  <div
    className={`bg-white rounded-2xl p-6 flex flex-col justify-between h-[360px] w-80
      transition-all duration-300 shadow-md
      ${
        !isActive ? "opacity-50 blur-[1px] scale-90" : "opacity-100 scale-110"
      }`}
  >
    <div>
      <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
        {review.category}
      </p>
      <p className="mt-4 text-lg sm:text-[1.1rem] text-gray-800 leading-snug font-medium">
        {review.text}
      </p>
    </div>

    <div className="mt-6 relative pt-6">
      <div className="absolute -top-0 right-0 text-[8rem] sm:text-[10rem] font-bold text-gray-300 select-none z-0">
        <Quote />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                fill="#FBCC1E"
                strokeWidth={1}
                className={`w-5 h-5 ${
                  i < Math.round(review.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
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

export default ReviewCard;
