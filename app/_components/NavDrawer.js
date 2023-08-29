"use client";

import { useNavContext } from "@/context/NavContext";
import { useEffect } from "react";
import Link from "next/link";

export default function NavDrawer() {
  const [isOpen, toggleNav] = useNavContext();

  //great for preventing scroll
  // https://dirask.com/posts/JavaScript-stop-page-scroll-with-e-preventDefault-Dl5z4p

  useEffect(() => {
    const drawer = document.getElementById("drawer");

    var handleEvent = function (e) {
      e.preventDefault(); // disables scrolling by mouse wheel and touch move
    };

    drawer.addEventListener("scroll", handleEvent, false);
    drawer.addEventListener("mousewheel", handleEvent, false);
    drawer.addEventListener("touchmove", handleEvent, false);
  }, []);

  const handleClick = () => {
    toggleNav(!isOpen);
  };

  return (
    <>
      <div
        id="drawer"
        className={`w-full fixed h-screen bg-eggshell flex justify-center items-center flex-col gap-0 transition-all duration-500 ${
          isOpen ? "top-0" : "top-[-100vh]"
        }`}
      >
        <Link href={"/"} className="w-full" onClick={() => handleClick()}>
          <p className="border-[1px] text-center border-x-0 py-8 border-lightolive text-2xl text-lightolive font-light">
            Hem
          </p>
        </Link>
        <Link
          href={"/kontakta-oss"}
          className="w-full"
          onClick={() => handleClick()}
        >
          <p className="border-[1px] text-center border-x-0 border-t-0 py-8 border-lightolive text-2xl text-lightolive font-light">
            Kontakt
          </p>
        </Link>
        <Link href={"/om-oss"} className="w-full" onClick={handleClick}>
          <p className="border-[1px] text-center border-x-0 border-t-0 py-8 border-lightolive text-2xl text-lightolive font-light">
            Om oss
          </p>
        </Link>
        <Link href={"/vara-tjanster"} className="w-full" onClick={handleClick}>
          <p className="border-[1px] text-center border-x-0 border-t-0 py-8 border-lightolive text-2xl text-lightolive font-light">
            Vad vi gör
          </p>
        </Link>
        {/* <Link href={"/kundcase"} className="w-full" onClick={handleClick}>
          <p className="border-[1px] text-center border-x-0 border-t-0 py-8 border-lightolive text-2xl text-lightolive font-light">
            Kundcase
          </p>
        </Link> */}
      </div>
    </>
  );
}
