import Image from "next/image";
import Link from "next/link";
import skanditechIcon from "../../public/skanditech-icon.svg";
import filip from "../../public/filip-lapvetelainen.jpg";

export default function ContactSection({ color }) {
  return (
    <div
      className={`${
        color === "eggshell"
          ? "bg-eggshell"
          : "bg-gradient-to-tl from-neutral-200 to-[#f3f2f0]"
      } relative md:px-52 flex flex-col md:flex-row justify-center pt-24 md:pb-36 pb-16 md:gap-60 md:items-center overflow-clip`}
    >
      <div className="absolute -z-0 md:top-0 right-0 -rotate-[30deg] translate-x-[250px] translate-y-[300px]">
        <Image
          alt="waves"
          src={skanditechIcon}
          className="w-[1500px] scale-[250%] md:scale-100 pointer-events-none select-none"
        />
      </div>
      <div className="mx-6 md:mx-0 z-10">
        <h3 className="font-head font-medium text-xl text-lightolive md:mt-12 uppercase">
          Ta kontakt
        </h3>
        <h2 className="text-4xl md:text-5xl font-head mt-6 mb-8 font-semibold">
          Vi ser fram
          <br /> emot att
          <br /> prata med er!
        </h2>
        <div className="w-[250px] h-[1px] bg-lightolive" />
        <p className="text-xl md:text-2xl text-stoneolive mt-8">
          Låt oss diskutera er situation <br /> och era visioner så ska vi se{" "}
          <br /> hur vi på bästa sätt kan hjälpa er.
          <br />
        </p>
        <p className="text-md italic text-lightolive mt-4">
          Oavsett om ni redan vet vad ni <br />
          är ute efter eller bara vill bolla idéer <br />
          så står vi alltid till hands!
        </p>
      </div>
      <div className="md:max-w-[300px] max-w-[75%] text-center mx-auto md:mx-0">
        <div className="relative mb-5 mt-16 md:mt-0">
          <Image
            alt="Filip Lapveteläinen"
            src={filip}
            className="rounded-full md:drop-shadow-md select-none pointer-events-none"
          />
          <div className="absolute bottom-5 left-5 w-[50px] h-[50px] bg-gradient-to-t from-green-500 to-auroragreen drop-shadow-md rounded-full"></div>
        </div>
        <Link href="/kontakta-oss">
          <button className="relative bg-skandiblue hover:scale-105 duration-100 px-12 py-4 rounded-full text-2xl text-white z-10">
            Prata med Filip
          </button>
        </Link>
      </div>
    </div>
  );
}
