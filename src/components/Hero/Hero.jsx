// works as expected

import Swiper from "@/FullPageSwiper/Swiper";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export const Hero = () => {
  return (
    <div className="my-5 overflow-x-auto">
      <Swiper />
    </div>
  );
};
