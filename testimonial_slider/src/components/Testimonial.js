import React, { useState } from "react";
import Card from "./Card";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

function Testimonial(props) {
  const reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function SurpriseHandler() {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }
  return (
    <div
      className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 transition-all
     duration-700 hover:shadow-xl rounded-md px-2"
    >
      <Card reviews={reviews[index]} />

      <div className=" flex text-3xl mt-9 gap-3 text-rose-400 font-bold mx-auto">
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer hover:text-rose-500"
        >
          <FiChevronsLeft />
        </button>
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-rose-500"
        >
          <FiChevronsRight />
        </button>
      </div>

      <div className=" mt-6">
        <button
          onClick={SurpriseHandler}
          className=" bg-rose-400 hover:bg-rose-500 transition-all duration-200 cursor-pointer 
        px-10 py-2 rounded-md font-bold text-white text-lg mb-7"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
