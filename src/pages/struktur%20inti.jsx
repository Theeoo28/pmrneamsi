import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const SiComp = dynamic(
  () => import("../../components/StrukturInti/SiComp").then((mod) => mod.SiComp),
  {
    ssr: false,
  }
);
const Navbar = dynamic(
  () => import("../../components/Navbar/Navbar").then((mod) => mod.Navbar),
  {
    ssr: false,
  }
);

function StrukturInti  ()  {
  return (
    <>
      <Head>
        <title>Struktur Inti</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pmrwira.png" />
      </Head>
      <div>
        <Navbar />
        <SiComp />
      </div>
    </>
  );
};

export default StrukturInti;