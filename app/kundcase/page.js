"use client";

import Footer from "../_components/Footer";
import Link from "next/link";
import ContactSection from "../_components/ContactSection";
import Case from "../_components/Case";
import { useState } from "react";

export default function Testimonials() {
  const [category, setCategory] = useState("all");

  const chooseCategory = (el) => {
    setCategory(el.target.id);
  };

  return (
    <main className="">
      <div className="relative flex flex-col w-full gap-4 overflow-clip pb-12 bg-eggshell">
        <div className="flex gap-2 md:mx-36 mx-6 md:text-lg text-sm text-lightolive py-4  md:mt-24 mt-16">
          <Link href={"/"}>
            <p className="uppercase">Start</p>
          </Link>
          <p className="inline-block">/</p>
          <p className="uppercase">Kundcase</p>
        </div>
      </div>
      {/*HEADER START*/}

      <div className="flex flex-col md:justify-center md:items-center pb-16 bg-eggshell">
        <h1 className="mx-6 md:mx-0 md:text-6xl flex flex-col md:flex-row items-start text-4xl md:text-center text-skandiblue font-head md:mt-6 mb-4 font-semibold">
          Tidigare projekt
        </h1>
        <p className="text-xl md:text-2xl mx-6 md:mx-0 text-lightolive mt-4 md:text-center leading-normal">
          Låt dig inspireras av någa av våra tidigare projekt.{" "}
          <br className="hidden md:block" /> Vill du se ett projekt kopplat till
          din bransch?
          <br />{" "}
          <Link
            href="/kontakta-oss"
            className="cursor-pointer text-stoneolive hover:text-lightolive"
          >
            <u>Kontakta oss</u>
          </Link>{" "}
          så löser vi det!
        </p>
        <div className="flex mt-10 pl-4 pb-4 md:pb-0 md:pl-0 gap-4 md:gap-0 overflow-x-auto">
          <div className="md:p-4 cursor-pointer group">
            <div
              id="all"
              className={`${
                category === "all"
                  ? "bg-skandiblue text-neutral-50"
                  : "text-lightolive"
              } border-2 whitespace-nowrap font-semibold border-lightolive px-12 py-2 rounded-xl`}
              onClick={chooseCategory}
            >
              Allt
            </div>
          </div>
          <div className="md:p-4 cursor-pointer group">
            <div
              id="websites"
              className={`${
                category === "websites"
                  ? "bg-skandiblue text-neutral-50"
                  : "text-lightolive"
              } border-2 whitespace-nowrap font-semibold  border-lightolive px-12 py-2 rounded-xl`}
              onClick={chooseCategory}
            >
              Hemsidor
            </div>
          </div>
          <div className="md:p-4 cursor-pointer group">
            <div
              id="apps"
              className={`${
                category === "apps"
                  ? "bg-skandiblue text-neutral-50"
                  : "text-lightolive"
              } border-2 whitespace-nowrap font-semibold border-lightolive px-12 py-2 rounded-xl`}
              onClick={chooseCategory}
            >
              Appar
            </div>
          </div>
        </div>
      </div>
      {/*EARLIER PROJECTS START*/}
      <div className="md:px-52 bg-eggshell pb-24">
        {category === "apps" ? (
          <div className="relative overflow-clip border-2 mx-4 md:mx-0 border-lightolive md:px-24 md:py-20 rounded-xl flex justify-center items-center md:pt-20">
            <div className="relative text-center text-xl w-full h-[300px] md:w-[400px] md:h-[500px]">
              Inget att visa än!
            </div>
          </div>
        ) : (
          <Case
            businessCase={{
              name: "Rouge nattklubb",
              title: "Biljettsystem och hemsida",
              desc: "Skräddarsytt biljettsystem till nattklubb i Umeå",
            }}
          />
        )}
      </div>
      {/*CONTACT SECTION*/}
      <ContactSection color="white" />
      {/*FOOTER*/}
      <div className="w-full h-[1px] bg-lightolive md:mb-[500px]"></div>
      <Footer />
    </main>
  );
}
