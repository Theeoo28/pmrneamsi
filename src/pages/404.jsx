import React from "react";
import Head from "next/head";
import Image from "next/image";
import notfound from "/public/404notfound.png";
import Link from "next/link";

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>PMR NEAMSI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="pmrwira.png" />
      </Head>
      <div className="flex justify-center pt-28">
        <div>
        <Image
          src={notfound}
          alt="/"
          width="auto"
          height="auto"
        />
        <div>
          <Link href="/" className="flex justify-center">
            <button className="bg-sky-900 hover:bg-sky-800 text-white px-6 py-3 rounded-full">Back To Home</button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
