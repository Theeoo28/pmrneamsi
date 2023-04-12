import Image from "next/legacy/image";
import React from "react";
import {AiFillInstagram} from "react-icons/ai";

export function InstagramImg({socialimg}) {
  return (
    <div className="relative">
      <Image
        src={socialimg}
        alt="/"
        className="w-full h-full rounded-md"
        layout="responsive"
        width="50"
        height="50"
      />
      <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 rounded-md group">
        <p className="text-gray-300 hidden group-hover:block">
          <AiFillInstagram size={30} />
        </p>
      </div>
    </div>
  );
}
