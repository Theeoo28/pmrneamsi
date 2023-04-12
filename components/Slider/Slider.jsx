import React, {useState} from "react";
import {AiOutlineLeftCircle, AiOutlineRightCircle} from "react-icons/ai";
import Image from "next/legacy/image";
import {SliderData} from "./SliderData";

export function Slider({slides}) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
  }
  return (
    <div id="gallery" className="max-w-[1240px] mx-auto max-2xl:max-w-3xl mb-12">
      <h1 className="relative flex justify-center font-semibold text-3xl p-4">Gallery</h1>
      <div className="relative flex justify-center p-4 ">
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }>
              <AiOutlineLeftCircle
                onClick={prevSlide}
                className="absolute top-[50%] left-[5%] text-black/50 cursor-pointer select-none z-[2]"
                size={50}
              />
              {index === current && (
                <Image
                  src={slide.Image}
                  alt="/"
                  width="1440"
                  height="740"
                  className="rounded-xl shadow-lg outline-double"
                  objectFit="cover"
                />
              )}
              <AiOutlineRightCircle
                onClick={nextSlide}
                className="absolute top-[50%] right-[5%] text-black/50 cursor-pointer select-none z-[2]"
                size={50}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
