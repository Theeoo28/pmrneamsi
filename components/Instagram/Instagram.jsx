import React from "react";
import dynamic from "next/dynamic";
import {DataInsta} from "./DataInsta";
import Link from "next/link";

const InstagramImg = dynamic(
  () => import("./InstagramImg").then((mod) => mod.InstagramImg),
  {
    ssr: false,
  }
);

export function Instagram() {
  return (
    <div className="lg:max-w-6xl max-w-md md:max-w-3xl mx-auto text-center py-24">
      <p className="text-2xl font-bold">Follow Instagram Kami</p>
      <p className="pb-4">Capture</p>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 p-4">
        {DataInsta.map((konten, id) => (
          <button key={id}>
            <Link
              href="https://www.instagram.com/redcrossosix6/"
              target="_blank"
              rel="noopener noreferrer">
              <InstagramImg socialimg={konten.photoUrl} />
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
}
