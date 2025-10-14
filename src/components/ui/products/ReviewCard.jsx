import { Star } from "lucide-react";

const ReviewCard = ({ review }) => {
  return (
    <div className="border-b border-gray-300 pb-6">
      <div className="flex items-center mb-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-6 h-6 ${
                i < review.rating ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-sm text-[#3D2b1F] mb-2">
        <span className="font-semibold text-gray-800">{review.author}</span>
        <span className="mx-2 text-gray-400">|</span>
        <span>
          {new Date(review.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </p>
      <p className="text-gray-700 leading-relaxed">{review.comment}</p>
    </div>
  );
};

export default ReviewCard;
