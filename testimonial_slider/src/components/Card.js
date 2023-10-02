import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card(props) {
  const review = props.reviews;
  return (
    <div className=" flex flex-col relative">
      <div className=" absolute md:top-[-2rem] md:left-[3rem] z-10 mx-auto">
        <img
          className=" aspect-square rounded-full w-[110px] h-[110px] z-[25]"
          src={review.image}
        />
      </div>

      <div className=" text-center mt-7">
        <p className=" font-bold text-2xl capitalize">{review.name}</p>
        <p className=" text-rose-300 uppercase text-sm">{review.job}</p>
      </div>

      <div className=" text-rose-400 mx-auto mt-5">
        <FaQuoteLeft />
      </div>

      <div className=" text-center mt-4 text-slate-500">{review.text}</div>

      <div className=" text-rose-400 mx-auto mt-5">
        <FaQuoteRight />
      </div>
    </div>
  );
}

export default Card;
