import { div } from "motion/react-client";
import React from "react";

// Generic building blocks
const SkeletonBox = ({ className }) => (
  <div className={`bg-gray-300 animate-pulse rounded ${className}`} />
);

// 🏠 Home page skeleton
export const HomeSkeleton = () => (
  <div className="min-h-screen w-full flex flex-col justify-center  items-center  gap-5">
    <SkeletonBox className="h-20 w-2/3 " />
    <SkeletonBox className="h-10 w-1/2 mb-10" />

    <SkeletonBox className="h-12 w-40" />
  </div>
);

// 📦 Products page skeleton
export const ProductsSkeleton = () => (
  <div className="px-40 pt-25 grid grid-cols-2 md:grid-cols-3 gap-10 ">
    {[...Array(9)].map((_, i) => (
      <div key={i} className="space-y-2">
        <SkeletonBox className="h-32 w-full" />
        <SkeletonBox className="h-4 w-2/3" />
        <SkeletonBox className="h-4 w-1/3" />
      </div>
    ))}
  </div>
);

// ⚙️ Technology page skeleton
export const TechnologySkeleton = () => (
  <div className="min-h-screen w-full flex flex-col justify-center items-end gap-5 px-50">
    <SkeletonBox className="h-6 w-1/3" />
    <SkeletonBox className="h-4 w-2/3" />
    <SkeletonBox className="h-64 w-full" />
    <SkeletonBox className="h-14 w-full" />
  </div>
);

// ℹ️ About page skeleton
export const AboutSkeleton = () => (
  <div className="min-h-screen w-full flex flex-col justify-center  gap-5 px-50">
    <SkeletonBox className="h-6 w-1/4" />
    <SkeletonBox className="h-4 w-3/4" />
    <SkeletonBox className="h-48 w-full" />
  </div>
);

// 📞 Contact page skeleton
export const ContactSkeleton = () => (
  <div className="min-h-screen w-full flex flex-col justify-center items-center gap-5 px-50">
    <SkeletonBox className="h-12 w-1/3" />
    <SkeletonBox className="h-4 w-2/4" />
    <SkeletonBox className="h-80 w-1/2" />
  </div>
);
