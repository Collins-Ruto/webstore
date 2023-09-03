"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import "~/styles/globals.css";
import localFont from "@next/font/local";
import Dropdown from "./Dropdown";
// import { Dropdown } from "flowbite-react";

const logoFont = localFont({
  src: "../assets/fonts/Saira_Stencil_One/SairaStencilOne-Regular.ttf",
  display: "fallback",
});

function Header() {
  const [opened, setOpened] = useState(false);
  const currentRoute = usePathname();

  return (
    <div className="  rdark:bg-slate-900 sticky top-0 z-40 bg-gray-100 py-2 text-black bg-blend-darken shadow-lg">
      <div className="container mx-auto max-w-7xl">
        <nav className="flex items-center justify-between">
          <div className="flex w-full items-center justify-between py-1.5 md:hidden">
            <Link href="/" className="flex items-center">
              <Image
                width={64}
                height={64}
                src="/c-bg-y.png"
                alt="Collins"
                className="h-11 w-11"
              />
              <h1
                className={`${logoFont.className} rdark:text-white ml-2 text-lg  `}
              >
                RUTO
              </h1>
            </Link>
            <div
              id="menuButton"
              className={`flex ${
                opened ? "open" : ""
              } cursor-pointer flex-col items-center justify-center space-y-1.5 p-2  md:hidden`}
              onClick={() => {
                setOpened(!opened);
              }}
            >
              <span className="duration-400 h-1 w-8 rounded bg-blue-600 transition-all sm:w-8"></span>
              <span className="duration-400 h-1 w-8 rounded bg-blue-600 transition-all sm:w-8"></span>
              <span className="duration-400 h-1 w-8 rounded bg-blue-600 transition-all sm:w-8"></span>
            </div>
          </div>
          <header className="hidden w-full md:block">
            <div className="container mx-auto flex items-center justify-between">
              <Link href="/" className="flex cursor-pointer items-center">
                <Image
                  width={408}
                  height={128}
                  src="/buyit-logo.png"
                  alt="Collins"
                  className="mr-2 h-14 w-32"
                  loading="eager"
                />
                <span
                  className={`${logoFont.className} rdark:text-white ml-1 text-2xl md:ml-2`}
                ></span>
              </Link>
              <div className="">
                <nav className="rdark:text-gray-300 w-full text-gray-700">
                  <ul className="flex items-center space-x-4 text-sm font-semibold md:text-lg lg:space-x-8">
                    <li>
                      {/* <Link
                        href={`/`}
                        className={` cursor-pointer items-center border-b-2 align-middle transition duration-200 ease-in-out hover:text-blue-600 ${
                          currentRoute === "/"
                            ? " border-orange-500"
                            : "border-transparent"
                        }`}
                      >
                        <span className="rounded">H</span>
                      </Link> */}
                    </li>
                    <li className="">
                      <Dropdown  />
                    </li>
                    
                    <li>
                      <input
                        placeholder="search products here ..."
                        className={`cursor-pointer items-center border-b-2 border-black bg-transparent align-middle placeholder-slate-300 transition duration-200 ease-in-out`}
                      />
                    </li>
                    <li className="rounded-full  border-2 border-[#FF0000] px-4">
                      Need Help? Call: 0716527700
                    </li> 
                    <li className="">
                      <Image
                        width={408}
                        height={128}
                        src="/icons/user.png"
                        alt="Collins"
                        className="mr-2 h-8 w-8"
                        loading="eager"
                      />
                    </li>
                    <li className="">
                      <Image
                        width={408}
                        height={128}
                        src="/icons/cart.png"
                        alt="Collins"
                        className="mr-2 h-10 w-10"
                        loading="eager"
                      />
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
        </nav>
      </div>
      <div className="md:hidden">
        <div
          className={`hidde absolute right-0 h-screen w-screen bg-black opacity-20 bg-blend-darken md:hidden ${
            opened ? "active block " : ` hidden `
          }`}
          onClick={() => {
            setOpened(false);
          }}
        ></div>
        <div
          className={`sidebar translate-x-4 transition-transform  duration-300 ease-in-out ${
            opened ? "active block " : ` hidden`
          }`}
        >
          <div
            onClick={() => {
              setOpened(!opened);
            }}
            className="
               rdark:bg-slate-900 rdark:text-white absolute right-0 flex h-screen w-[60%]  max-w-[20rem] flex-col gap-4 overflow-y-auto bg-[#F7F6FB] p-4 pt-[5rem] text-end text-2xl font-semibold  opacity-100 bg-blend-darken sm:text-3xl md:w-60 "
          >
            <Link
              href={`/`}
              className={` ml-auto w-fit cursor-pointer items-center border-b-2 px-2 transition duration-200 ease-in-out hover:text-blue-600 ${
                currentRoute === "/"
                  ? "  border-orange-500"
                  : "border-transparent"
              }`}
            >
              <span className="rounded">Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
