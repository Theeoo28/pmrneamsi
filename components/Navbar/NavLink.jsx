import Link from "next/link";
import React, {useState} from "react";
import {links} from "./Mylinks";

const NavLink = () => {
  const [heading, setHeading] = useState("");
  const [subheading, setSubHeading] = useState("");
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      {links.map((link, i) => (
        <div key={i}>
          <div className="text-slate-700 px-[13px] text-left lg:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}>
              {link.name}
              <span className="inline-flex lg:hidden text-xl">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}></ion-icon>
              </span>
              <span className="lg:block hidden lg:ml-2 text-xl group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon
                  name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div >
                <div className="absolute top-20 hidden group-hover:lg:block hover:lg:block text-slate-900">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-3.5 rounded-md shadow-md">
                    {/* grid grid-cols-2 gap-10 */}
                    {link.sublinks.map((mysublinks, i) => (
                      <div key={i}>
                        <h1 className="text-lg font-bold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink, i) => (
                          <li className="text-sm text-slate-700 my-2.5" key={i}>
                            <Link
                              href={slink.name}
                              className="hover:text-sky-700 hover:text-base duration-300">
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile Menu */}
          <div
            className={`
          ${heading === link.name ? "lg:hidden" : "hidden"}
          `}>
            {/* Sublinks */}
            {link.sublinks.map((slinks, i) => (
              <div key={i}>
                <div>
                  <h1
                    onClick={() =>
                      subheading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold lg:pr-0 pr-5 flex justify-between items-center text-slate-900">
                    {slinks.Head}
                    <span className="inline-flex bottom-7 lg:mt-1 text-xl lg:ml-2">
                <ion-icon
                  name={`${
                    subheading === slinks.Head ? "chevron-up" : "chevron-down"
                  }`}></ion-icon>
              </span>
                  </h1>
                  <div
                    className={`${
                      subheading === slinks.Head ? "lg:hidden" : "hidden"
                    }`}>
                    {slinks.sublink.map((slinks, i) => (
                      <li className="py-3 pl-14" key ={i}>
                        <Link href={slinks.link} className='hover:text-sky-800 hover:text-lg text-slate-700 duration-300'>{slinks.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLink;
