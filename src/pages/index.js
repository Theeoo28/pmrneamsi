import Head from "next/head";
import dynamic from "next/dynamic";
import {SliderData} from "../../components/Slider/SliderData";

const HeroComp = dynamic(
  () => import("../../components/HeroComp").then((mod) => mod.HeroComp),
  {
    ssr: false,
  }
);

const Instagram = dynamic(
  () => import("../../components/Instagram/Instagram").then((mod) => mod.Instagram),
  {
    ssr: false,
  }
);

const Slider = dynamic(
  () => import("../../components/Slider/Slider").then((mod) => mod.Slider),
  {
    ssr: false,
  }
);


const Footer = dynamic(
  () => import("../../components/Footer/Footer").then((mod) => mod.Footer),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <>
      <Head>
        <title>PMR NEAMSI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pmrwira.png" />
      </Head>
      <div>
        <HeroComp
          heading="PMR SMKN 6 KOTA BEKASI"
          message="Kami Menolong Atas Moral Dan Kemanusiaan"
        />
        <Slider slides={SliderData} />
        <Instagram />
        <Footer />
      </div>
    </>
  );
}
