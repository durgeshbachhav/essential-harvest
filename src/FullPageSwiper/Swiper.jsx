import React from "react";
import eh1 from "../assets/eh1.png";
import eh2 from "../assets/eh2.png";

import "./swiper.css";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Swiper = () => {
  const projects = [
    {
      image: eh1,
      title: "Rose Generium",
      description:
        "Our cosmetic products are formulated with natural and organic ingredients, free from harsh chemicals, to promote healthy and radiant skin.",
      link: "",
    },
    {
      image: eh2,
      title: "Rose Generium Oil",
      description:
        "From cleansers and moisturizers to serums and masks, our skincare range offers a comprehensive regimen for all skin types.",
      link: "",
    },
  ];
  return (
    <div className="container  gap-4">
      <section className="relative w-full section one rounded-lg border bg-secondary flex flex-col-reverse md:px-12  snap-always  lg:flex-row lg:px-20">
        <BackgroundBeams className={"absolute bg-green"} />
        <div className="px-4 lg:w-1/2">
          <h1 className="text-3xl font-bold text-start">
            <TextGenerateEffect
              words={"Introduction to Essential Harvest"}
              className={"text-3xl text-primary font-bold"}
            />
          </h1>
          <p className="text-lg">
            <TextGenerateEffect
              words={`Essential Harvest is a leading provider of high-quality cosmetic and
            herbal products. We believe in harnessing the power of nature to
            create exceptional beauty and wellness solutions.`}
              className={"text-xl text-black font-thin "}
            />
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src={eh1} alt="w-full mt-4 lg:mt-0" />
        </div>
      </section>
      <section className="relative w-full section one rounded-lg border bg-secondary flex flex-col-reverse md:px-12  snap-always  lg:flex-row lg:px-20 my-4">
        <BackgroundBeams className={"absolute"} />
        <div className="lg:w-1/2 h-full">
          <img src={eh2} alt="" className="mt-4 lg:mt-0 lg:w-[70%]" />
        </div>
        <div className="px-4 mb-2 lg:w-1/2">
          <h1 className="text-3xl font-bold ">
            <TextGenerateEffect
              words={"Essential Harvest Rose Geranium Hydrosol"}
              className={"text-3xl text-primary font-bold"}
            />
          </h1>
          <p className="text-lg">
            <TextGenerateEffect
              words={`A skincare elixir harvested from rose geranium leaves, offering a natural toner with a captivating floral scent, promoting refreshed and soothed skin.`}
              className={"text-xl text-black font-thin "}
            />
          </p>
        </div>
      </section>
      <section className="relative w-full section one rounded-lg border bg-secondary flex flex-col-reverse md:px-12  snap-always   lg:flex-row lg:px-20 my-4 ">
        <BackgroundBeams className={"absolute bg-green"} />

        <div className="py-10">
          <h1 className="text-3xl text- font-bold text-center py-5 h-[10%]">
            Our Products
          </h1>
          <div className="mb-8 h-[90%]"></div>
        </div>
      </section>
    </div>
  );
};

export default Swiper;
