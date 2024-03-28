import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BackgroundGradient } from "./ui/background-gradient";

const Card = ({ data }) => {
  console.log(data);
  return (
    <Link to={`/products/${data?.id}`} className="">
      <div>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-secondary dark:bg-zinc-900">
          <img
            src={data.image}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            {data.title}
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {data.description}
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              {data.price}
            </span>
          </button>
        </BackgroundGradient>
      </div>
    </Link>
  );
};

export default Card;
