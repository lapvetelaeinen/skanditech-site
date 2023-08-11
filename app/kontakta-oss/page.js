"use client";

import Image from "next/image";
import Link from "next/link.js";
import { useState } from "react";
import Map from "../_components/Map.js";
import { useForm } from "react-hook-form";
import Footer from "../_components/Footer.js";
import bic from "../../public/bic-factory.jpg";
import filip from "../../public/filip-lapvetelainen.jpg";
import happyEmployees from "../../public/happy-employees.webp";
import styles from "../../styles/Services.module.css";

export default function Contact() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <main className="">
      <div className="relative flex flex-col w-full gap-4 overflow-clip pb-0 bg-gradient-to-r from-eggshell via-eggshell to-transparent h-screen">
        <div className="absolute md:-right-[200px] -z-10 w-full min-h-screen bg-eggshell">
          <Image
            alt="Bild på glada medarbetare"
            src={happyEmployees}
            fill
            className={`${styles.hero} object-cover object-top opacity-50`}
          />
        </div>
        <div className="flex gap-2 md:mx-36 mx-6 md:text-lg text-sm text-lightolive py-4 md:mt-24 mt-16">
          <Link href={"/"}>
            <p className="uppercase">Start</p>
          </Link>
          <p className="inline-block">/</p>
          <p className="uppercase">Kontakt</p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:mt-8">
          <div className="">
            <div className="md:mx-36 mx-6">
              <h2 className="font-head font-medium text-xl text-lightolive uppercase">
                Kontakta oss
              </h2>
              <h1 className="md:text-6xl text-4xl font-head mt-6 mb-8 font-semibold">
                Vilka möjligheter
                <br className="hidden md:block" /> väntar på att
                <br />
                utforskas?
              </h1>
              <div className="w-[180px] h-[1px] bg-lightolive" />
              <p className="text-xl md:text-2xl text-stoneolive pt-8 pb-14">
                Dela med dig av dina frågor och tankar
                <br className="hidden md:block" /> så guidar vi dig på rätt
                spår! <br className="hidden md:block" /> Du kan ringa och maila
                oss{" "}
                <a
                  href="#contact"
                  className="cursor-pointer hover:text-lightolive"
                >
                  <u>direkt</u>
                </a>{" "}
                <br className="hidden md:block" /> eller använda
                kontaktformuläret.
              </p>
            </div>
          </div>
          <div className="md:w-[500px] w-full px-4 md:px-0 md:mr-36">
            <div className="flex justify-end gap-2 items-end mb-8 w-full">
              <h3 className="text-stoneolive">
                Vi svarar <strong>alltid</strong> <br /> inom 24 timmar!
              </h3>
              <div className="relative w-[100px]">
                <Image
                  alt="Filip Lapveteläinen"
                  src={filip}
                  className="rounded-full drop-shadow-md select-none pointer-events-none"
                />
                <div className="absolute bottom-1 left-1 w-[30px] h-[30px] bg-gradient-to-t from-green-500 to-auroragreen drop-shadow-md rounded-full"></div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
            >
              <div className="flex flex-col gap-3 text-lg md:drop-shadow-card">
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email"
                  className="py-3 pl-2"
                />
                <input
                  type="phone"
                  {...register("phone")}
                  placeholder="Telefon"
                  className="py-4 pl-2"
                />

                <textarea
                  {...register("message")}
                  placeholder="Ditt meddelande"
                  className="pt-2 pb-4 pl-2"
                />
                <input
                  type="submit"
                  value="Skicka"
                  className="cursor-pointer bg-skandiblue text-neutral-50 py-4 rounded-md hover:scale-105 duration-100"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="flex justify-center md:pt-36 pt-12 md:pb-24 pb-16 bg-eggshell"
      >
        <div className="md:w-[380px] w-[200px] h-[1px] bg-lightolive" />
      </div>
      <div className="relative md:px-36 md:pb-36 bg-eggshell">
        <div className="flex md:flex-row flex-col gap-16">
          {/* <div className="md:inline-block flex flex-col items-center">
            <p className="text-2xl text-stoneolive">Skanditech AB</p>
            <p className="text-xl text-stoneolive mt-4">Besöksadress</p>
            <p className="text-lg text-lightolive">Rådhusesplanaden 6F</p>
            <p className="text-lg text-lightolive">903 28 Umeå</p>
            <p className="text-xl text-stoneolive mt-6">Kontakt</p>
            <p>
              <a
                href="mailto:filip@skanditech.se"
                className="text-lg text-lightolive underline"
              >
                filip@skanditech.se
              </a>
            </p>
            <a
              href="tel:+46738780569"
              className="text-lg text-lightolive underline"
            >
              +46738780569
            </a>
            <p className="text-xl text-stoneolive mt-6">Öppettider</p>
            <p className="text-lg text-lightolive">Vardagar 8-17</p>
          </div> */}

          <div className="flex md:justify-end justify-center gap-16 text-right md:pb-0 pb-12">
            <div className="md:inline-block flex flex-col items-center">
              <p className="text-2xl text-stoneolive font-head font-medium">
                Besöksadress
              </p>
              <p className="text-lg text-lightolive">Rådhusesplanaden 6F</p>
              <p className="text-lg text-lightolive">903 28 Umeå</p>
              <p className="text-2xl text-stoneolive font-head font-medium mt-4">
                Kontakt
              </p>
              <p>
                <a
                  href="mailto:filip@skanditech.se"
                  className="text-lg text-lightolive"
                >
                  filip@skanditech.se
                </a>
              </p>
              <a href="tel:+46738780569" className="text-lg text-lightolive">
                +46738780569
              </a>
              <p className="text-2xl text-stoneolive font-head font-medium mt-4">
                Öppettider
              </p>
              <p className="text-lg text-lightolive">Vardagar 8-17</p>
            </div>
          </div>
          <div className="flex-1">
            <Map />
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-lightolive md:mb-[500px]"></div>

      {/*FOOTER*/}
      <Footer />
    </main>
  );
}
