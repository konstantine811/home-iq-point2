import FullScreenSection from "@/components/common/full-screen-section";
import InfiniteCarousel from "@/components/common/infinite-carousel";
import ReviewCard from "@/components/common/review-card";
import { ReviewCardItems, ReviewCardItems2 } from "@/configs/cards";

const EightSection = () => {
  return (
    <section className="min-h-screen py-8 flex flex-col justify-center items-center">
      <div className="container">
        <h2 className="text-2xl md:text-3xl text-blue-900 font-extrabold pb-12">
          Google reviews
        </h2>
      </div>
      <div className="h-[216px] w-full mb-4">
        <InfiniteCarousel count={ReviewCardItems.length}>
          {ReviewCardItems.map((data, index) => {
            return <ReviewCard key={index} {...data} />;
          })}
        </InfiniteCarousel>
      </div>
      <div className="h-[216px] w-full">
        <InfiniteCarousel count={ReviewCardItems2.length}>
          {ReviewCardItems2.map((data, index) => {
            return <ReviewCard key={index} {...data} />;
          })}
        </InfiniteCarousel>
      </div>
    </section>
  );
};

export default EightSection;
