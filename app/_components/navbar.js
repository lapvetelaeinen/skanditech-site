"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";
import skanditech from "../../public/skanditech-logo.svg";
import { useNavContext } from "@/context/NavContext";

export default function NavBar() {
  const prevScrollYRef = useRef(0);
  const scrollDirectionRef = useRef("None");
  const scrollCount = useRef(0);
  const [isOpen, toggleNav] = useNavContext();
  const isOpenRef = useRef(false);

  function getWindowHeight() {
    return window.innerHeight;
  }

  useEffect(() => {
    const windowHeight = getWindowHeight();
    // changeHeight(windowHeight);
    const nav = document.getElementById("nav");
    const navHeight = nav.getBoundingClientRect().height;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < windowHeight / 3) {
        nav.style.backgroundColor = "transparent";
      } else {
        nav.style.backgroundColor = "#E6E4CE";
      }

      // if (isOpenRef.current) {
      //   return;
      // }

      if (currentScrollY > prevScrollYRef.current) {
        scrollDirectionRef.current = "Down";
        if (scrollCount.current < 10) {
          scrollCount.current += 1;
        } else {
          nav.style.top = -navHeight + "px";
        }
      } else if (currentScrollY < prevScrollYRef.current) {
        scrollDirectionRef.current = "Up";
        if (scrollCount.current > 0) {
          scrollCount.current -= 1;
        } else {
          nav.style.top = "0px";
        }
      }

      if (currentScrollY === 0) {
        nav.style.top = "0px";
      }

      prevScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("CHANGE: ", isOpen);
    isOpenRef.current = !isOpenRef.current;
  }, [isOpen]);

  const toggleBar = () => {
    toggleNav();
    // isOpenRef.current = !isOpenRef.current;
  };

  return (
    <div
      id="nav"
      className="w-full h-[70px] flex items-center justify-center px-6 py-4 md:px-36 md:py-6 fixed top-0 transition-all duration-300"
    >
      <div className="flex-1 md:static absolute top-0 left-6 hover:cursor-pointer">
        <Link href="/">
          <Image
            className="md:w-[250px] w-[175px] py-6 md:py-0"
            alt="Skanditech logo"
            src={skanditech}
          />
        </Link>
      </div>
      <div
        className="absolute top-0 right-0 flex flex-col md:hidden gap-[8px] p-6"
        onClick={() => toggleBar()}
      >
        <span
          className={`absolute top-[50%] translate-y-[-50%] w-[40px] h-[2px] bg-lightolive rounded-sm transition-all ${
            isOpenRef.current
              ? "rotate-45 opacity-100"
              : "rotate-0 opacity-0 transition-none"
          }`}
        ></span>
        <span
          className={`w-[40px] h-[2px] bg-lightolive rounded-sm transition-all  ${
            isOpenRef.current ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`w-[40px] h-[2px] bg-lightolive rounded-sm transition-all ${
            isOpenRef.current ? "rotate-[-45deg]" : "rotate-0"
          }`}
        ></span>
        <span
          className={`w-[40px] h-[2px] bg-lightolive rounded-sm transition-all ${
            isOpenRef.current ? "opacity-0" : "opacity-100"
          }`}
        ></span>
      </div>
      <div className="md:flex hidden text-xl font-light text-stoneolive gap-14 font-head">
        <Link href="/kontakta-oss">
          <div className="relative group">
            <p className="cursor-pointer hover:text-lightolive">Kontakt</p>
            <div className="absolute bg-stoneolive h-[1px] w-0 group-hover:w-full transition-all"></div>
          </div>
        </Link>
        <Link href="/om-oss">
          <div className="relative group">
            <p className="cursor-pointer hover:text-lightolive">Om oss</p>
            <div className="absolute bg-stoneolive h-[1px] w-0 group-hover:w-full transition-all"></div>
          </div>
        </Link>
        <Link href="/vara-tjanster">
          <div className="relative group">
            <p className="cursor-pointer hover:text-lightolive">Vad vi gör</p>
            <div className="absolute bg-stoneolive h-[1px] w-0 group-hover:w-full transition-all"></div>
          </div>
        </Link>
        <Link href="/kundcase">
          <div className="relative group">
            <p className="cursor-pointer hover:text-lightolive">Kundcase</p>
            <div className="absolute bg-stoneolive h-[1px] w-0 group-hover:w-full transition-all"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}
