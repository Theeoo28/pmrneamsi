import React from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import dynamic from "next/dynamic";
// import ReactAudioPlayer from "react-audio-player";

const Navbar = dynamic(
  () => import("../components/Navbar/Navbar").then((mod) => mod.Navbar),
  {
    ssr: false,
  }
);

export function HeroComp  ({heading, message})  {
  return (
    <div className="dark:bg-slate-500 bg-slate-200">
      <Navbar />
      <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center custom-img bg-cover">
        <div className="absolute top-24 left-0 right-0 bottom-0 bg-black/60 z-[2]" />
        <div className="p-5 text-white z-[2] mt-[-2rem]">
          <Typewriter
            options={{
              strings: ["WELCOME TO"],
              autoStart: true,
              loop: true,
              multiTextDelay: 1000,
              typeSpeed: 50,
            }}
          />
          <h2 key={heading} className="text-5xl py-2 font-bold">{heading}</h2>
          <p key={message} className="py-5 text-xl">{message}</p>
          <button className="px-8 py-2 border hover:opacity-60">
            <Link href="/detail">Detail</Link>
          </button>
          {/* <ReactAudioPlayer controls='true' autoPlay='true' loop='true' src='../public/audio/bgmusic.mp3'/> */}
        </div>
      </div>
    </div>
  );
};
