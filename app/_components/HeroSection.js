import Link from "next/link";
import Image from "next/image";
import filip from "../../public/filip-lapvetelainen.jpg";
import greenWaves from "../../public/green-waves.svg";

export default function HeroSection() {
  return (
    <div className="w-full bg-eggshell h-screen flex items-start bg-gradient-to-t pb-24">
      <div className="absolute w-full h-screen -z-0 opacity-75 overflow-hidden">
        <Image
          src={greenWaves}
          alt="green animated northern lights"
          fill
          className="absolute h-full object-cover object-left md:object-center md:object-contain md:scale-100 left-[100px]"
        />
      </div>
      <div className="pl-6 max-h-screen md:pl-0 w-full md:mx-52 flex justify-between md:pt-16 md:items-center z-40">
        <div>
          <h1 className="md:text-7xl text-6xl font-head text-skandiblue font-medium mb-4 md:mb-8 mt-24">
            Uppnå <br /> <strong>era mål</strong> <br /> med rätt{" "}
            <br className="md:hidden block" />
            <strong>tech</strong>
          </h1>
          <p className="md:text-3xl text-2xl text-stoneolive mb-6 md:mb-14">
            Vi skräddarsyr <br /> <strong>hemsidor</strong> och{" "}
            <strong>appar</strong> <br /> med fokus på era
            <br />
            specifika mål och <br className="md:hidden block" /> utmaningar
          </p>
          <div className="flex gap-6">
            <Link href={"/kontakta-oss"}>
              <button className="bg-skandiblue md:px-12 px-6 py-4 text-white rounded-lg md:text-2xl text-lg hover:scale-105 duration-100">
                Kontakta oss
              </button>
            </Link>
            <Link href={"/kundcase"}>
              <button className="border-2 hidden md:block border-stoneolive text-stoneolive hover:text-lightolive hover:border-s-stoneolive md:px-12 px-6 py-4 rounded-lg md:text-2xl text-lg hover:scale-105 duration-100">
                Kundcase
              </button>
            </Link>
          </div>
        </div>
        <div className="md:max-w-[300px] max-w-[150px] md:block absolute right-2 bottom-0 md:static text-center">
          <div className="relative mb-5">
            <Image
              alt="Filip Lapveteläinen"
              src={filip}
              className="rounded-full drop-shadow-md select-none pointer-events-none"
            />
            <div className="absolute md:bottom-5 md:left-5 bottom-2 left-2 md:w-[50px] md:h-[50px] w-[30px] h-[30px] bg-gradient-to-t from-green-500 to-auroragreen drop-shadow-md rounded-full"></div>
          </div>
          <button className="bg-skandiblue hidden md:inline hover:scale-105 duration-100 px-12 py-4 rounded-full text-2xl text-white">
            Prata med Filip
          </button>
        </div>
      </div>
    </div>
  );
}
