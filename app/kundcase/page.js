import Image from "next/image";
import Link from "next/link";
import drinkbolaget from "../../public/drinkbolaget.jpg";
import bic from "../../public/bic-factory.jpg";
import fistRaised from "../../public/fist-raised.svg";
import gradientIcon from "../../public/gradient-icon.svg";
import skanditechTeam from "../../public/skanditech-team.jpg";
import skanditechIcon from "../../public/skanditech-icon.svg";
import skanditechMask from "../../public/skanditech-mask.svg";
import filip from "../../public/filip-lapvetelainen.jpg";
import happyEmployees from "../../public/happy-employees.webp";
import styles from "../../styles/Icon.module.css";

export default function Testimonials() {
  return (
    <main className="">
      <div className="relative flex flex-col w-full gap-4 overflow-clip pt-12 md:pt-20 pb-12">
        <div className="flex gap-2 md:mx-36 mx-6 md:text-lg text-sm text-lightolive py-4 mt-6">
          <p className="uppercase">Start</p>
          <p className="inline-block">/</p>
          <p className="uppercase">Kundcase</p>
        </div>
      </div>
      {/*HEADER START*/}

      <div className="flex flex-col md:justify-center md:items-center mb-24">
        <h1 className="mx-6 md:mx-0 md:text-5xl flex flex-col md:flex-row items-start text-4xl md:text-center text-skandiblue font-head md:mt-6 mb-4 font-semibold capitalize">
          Tidigare projekt
        </h1>
        <p className="text-2xl mx-6 md:mx-0 text-lightolive mt-4 md:text-center leading-normal">
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
          så sköter vi det!
        </p>
        <div className="flex mt-10 pl-4 pb-4 md:pb-0 md:pl-0 gap-4 md:gap-0 overflow-x-auto">
          <div className="md:p-4 cursor-pointer group">
            <div className="border-2 whitespace-nowrap font-semibold text-neutral-50 border-lightolive px-12 py-2 rounded-xl bg-skandiblue">
              Allt
            </div>
          </div>
          <div className="md:p-4 cursor-pointer group">
            <div className="border-2 whitespace-nowrap font-semibold text-stoneolive border-lightolive px-12 py-2 rounded-xl group-hover:bg-lightolive group-hover:bg-opacity-20">
              Hemsidor
            </div>
          </div>
          <div className="md:p-4 cursor-pointer group">
            <div className="border-2 whitespace-nowrap font-semibold text-stoneolive border-lightolive px-12 py-2 rounded-xl group-hover:bg-lightolive group-hover:bg-opacity-20">
              Appar
            </div>
          </div>
          <div className="md:p-4 cursor-pointer group">
            <div className="border-2 whitespace-nowrap font-semibold text-stoneolive border-lightolive px-12 py-2 rounded-xl group-hover:bg-lightolive group-hover:bg-opacity-20 mr-4 md:mr-0">
              Interna lösningar
            </div>
          </div>
        </div>
      </div>
      {/*EARLIER PROJECTS START*/}
      <div className="md:px-52 pb-24 mt-16 bg-eggshell">
        <div className="relative overflow-clip border-2 mx-4 md:mx-0 border-lightolive md:px-24 md:py-20 rounded-xl flex md:flex-row flex-col-reverse justify-between items-center md:gap-28 md:mt-20 mt-8">
          <div className="flex-1">
            <h4 className="font-head text-skandiblue font-bold md:text-5xl text-4xl md:mt-0 mt-6 md:px-0 px-2">
              Renoverad webshop optimerad för ökad försäljning
            </h4>
            <p className="italic text-lightolive md:mt-6 mt-2 md:px-0 px-2">
              Drinkbolaget
            </p>
            <div className="w-[140px] h-[1px] bg-lightolive opacity-50 mt-3 md:mx-0 mx-2" />
            <p className="md:text-xl text-lg mt-4 text-stoneolive md:px-0 px-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              esse eos est quam iusto velit dolor ut tenetur nemo error?
            </p>
            <div className="flex pt-6 md:pt-0">
              <button className="z-10 flex-1 md:flex-initial md:mx-0 mx-4 my-4 px-12 py-4 bg-skandiblue text-neutral-100 rounded-lg text-xl hover:scale-105 duration-100 text-center md:mt-12">
                Läs mer om projektet
              </button>
            </div>
          </div>
          <div className="relative w-full h-[300px] md:w-[400px] md:h-[500px]">
            <Image
              alt="drinkbolaget project"
              src={drinkbolaget}
              fill
              className="md:rounded-lg md:drop-shadow-card object-cover"
            />
          </div>
        </div>
      </div>
      {/*CONTACT SECTION*/}
      <div className="relative bg-gradient-to-tl from-neutral-200 to-[#f3f2f0] md:px-52 flex flex-col md:flex-row justify-center pt-12 md:pt-24 md:pb-36 pb-16 md:gap-60 items-center overflow-clip">
        <div className="absolute -z-0 md:top-0 right-0 -rotate-[30deg] translate-x-[250px] translate-y-[300px]">
          <Image
            alt="waves"
            src={skanditechIcon}
            className="w-[1500px] scale-[250%] md:scale-100 pointer-events-none select-none"
          />
        </div>
        <div>
          <h3 className="font-head font-medium text-xl text-lightolive md:mt-12 uppercase">
            Ta kontakt
          </h3>
          <h2 className="text-5xl font-head mt-6 mb-8 font-semibold capitalize">
            Vi ser fram
            <br /> emot att
            <br /> prata med dig
          </h2>
          <div className="w-[250px] h-[1px] bg-lightolive" />
          <p className="text-2xl text-stoneolive mt-8">
            Vi skräddarsyr hemsidor, <br /> appar och interna system <br /> med
            fokus på era specifika <br /> mål och utmaningar
          </p>
        </div>
        <div className="md:max-w-[300px] max-w-[75%] text-center">
          <div className="relative mb-5 mt-16 md:mt-0">
            <Image
              alt="Filip Lapveteläinen"
              src={filip}
              className="rounded-full md:drop-shadow-md select-none pointer-events-none"
            />
            <div className="absolute bottom-5 left-5 w-[50px] h-[50px] bg-gradient-to-t from-green-500 to-auroragreen drop-shadow-md rounded-full"></div>
          </div>
          <button className="relative bg-skandiblue hover:scale-105 duration-100 px-12 py-4 rounded-full text-2xl text-white z-10">
            Prata med Filip
          </button>
        </div>
      </div>
      {/*FOOTER*/}
      <div className="bg-eggshell w-full h-[400px] bg-gradient-to-tl from-neutral-200 to-[#f3f2f0] drop-shadow-card">
        lala
      </div>
    </main>
  );
}
