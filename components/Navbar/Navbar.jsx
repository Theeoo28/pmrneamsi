import Image from "next/legacy/image";
import React, {useEffect, useState} from "react";
import navimg from "/public/navbar.png";
import Link from "next/link";
import NavLink from "./NavLink";
import Button from "../Button";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import instaimg from "../../public/instacomp/instagram.png";
import dicimg from "/public/discord.png";

export function Navbar () {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("#e2e8f0");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("#e2e8f0");
        setTextColor("#44403c");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <nav
      style={{backgroundColor: `${color}`}}
      className=" shadow-xl z-[999] fixed w-full duration-700">
      <div className="flex font-medium justify-around">
        <div className="z-50 p-5 lg:w-auto w-full flex justify-between">
          <Image
            src={navimg}
            alt="logo"
            width={100}
            height={60}
            className="md:cursor-pointer h-9"
          />
          <div
            className="text-2xl text-slate-700 mt-5 block lg:hidden z-10"
            onClick={handleNav}>
            {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
        <ul
          style={{color: `${textColor}`}}
          className="lg:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link
              href="/"
              className="text-slate-700 inline-block hover:text-sky-700 hover:text-lg duration-300">
              <h1>Beranda</h1>
            </Link>
          </li>
          <NavLink />
        </ul>
        <div className="lg:block hidden">
          <Button />
        </div>
        {/* Mobile Nav */}
        <ul
          style={{backgroundColor: `${color}`}}
          className={`
        lg:hidden justify-center overflow-x-scroll items-center ease-in absolute w-full h-[1240px] bottom-0 py-2 top-[70px] pl-4 duration-300 ${
          nav ? "left-0" : "left-[100%]"
        }
        `}>
          <li>
            <Link
              href="/"
              className="text-slate-700 hover:text-lg  duration-300 my-7 mx-4 inline-block hover:text-sky-700">
              Beranda
            </Link>
          </li>
          <NavLink />
          <div className="py-1">
            <Button />
            <div className="border-slate-700 border-b-2 py-3" />
          </div>
          <div className="mx-auto max-w-max">
            <a
            href="https://www.instagram.com/redcrossosix6/"
            target="_blank"
            rel="noopener noreferrer">
            <div className="hover:animate-pulse mt-[40px]">
              <Image src={instaimg} width="30" height="30" />
            </div>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <div className="hover:animate-pulse ml-20 -mt-[35px]">
              <Image src={dicimg} width="30" height="30" className=" mr-20" />
            </div>
          </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};
