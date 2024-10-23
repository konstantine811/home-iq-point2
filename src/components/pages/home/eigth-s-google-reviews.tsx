"use client";

import InfiniteCarousel from "@/components/common/infinite-carousel";
import PlayButton from "@/components/common/play-button";
import ReviewCard from "@/components/common/review-card";
import { ReviewCardItems, ReviewCardItems2 } from "@/configs/cards";
import { useState } from "react";

const EigthSGoogleReview = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <section className="md:min-h-screen py-8 flex flex-col justify-center items-center">
      <div className="container flex justify-between">
        <h2 className="text-2xl md:text-3xl text-blue-900 font-extrabold pb-12">
          Google reviews
        </h2>
        <PlayButton onPlay={setIsPlaying} />
      </div>
      <div className="h-[216px] w-full mb-4">
        <InfiniteCarousel isPlaying={isPlaying}>
          {ReviewCardItems.map((data, index) => {
            return <ReviewCard className="mx-3" key={index} {...data} />;
          })}
        </InfiniteCarousel>
      </div>
      <div className="h-[216px] w-full">
        <InfiniteCarousel delayBeforeStart={1000} isPlaying={isPlaying}>
          {ReviewCardItems2.map((data, index) => {
            return <ReviewCard className="mx-3" key={index} {...data} />;
          })}
        </InfiniteCarousel>
      </div>
    </section>
  );
};

export default EigthSGoogleReview;
