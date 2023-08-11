import Image from "next/image";
import Footer from "../_components/Footer";
import Link from "next/link";
import drinkbolaget from "../../public/drinkbolaget.jpg";
import ContactSection from "../_components/ContactSection";
import Case from "../_components/Case";

export default function Testimonials() {
  return (
    <main className="">
      <div className="relative flex flex-col w-full gap-4 overflow-clip pt-12 md:pt-20 pb-12 bg-eggshell">
        <div className="flex gap-2 md:mx-36 mx-6 md:text-lg text-sm text-lightolive py-4 mt-6">
          <p className="uppercase">Start</p>
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
        </div>
      </div>
      {/*EARLIER PROJECTS START*/}
      <div className="md:px-52 bg-eggshell pb-24">
        <Case
          businessCase={{
            name: "Rouge nattklubb",
            title: "Biljettsystem och hemsida",
            desc: "det blev kaos i början men senare löste vi allt",
          }}
        />
      </div>
      {/*CONTACT SECTION*/}
      <ContactSection color="white" />
      {/*FOOTER*/}
      <div className="w-full h-[1px] bg-lightolive md:mb-[500px]"></div>
      <Footer />
    </main>
  );
}
