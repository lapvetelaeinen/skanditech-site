import Image from "next/image";
import Link from "next/link";
import drinkbolaget from "../../../public/drinkbolaget.jpg";

import skanditechIcon from "../../../public/skanditech-icon.svg";
import arrowDown from "../../../public/chevron-down.svg";

import filip from "../../../public/filip-lapvetelainen.jpg";

export default function Testimonials() {
  return (
    <main className="">
      <div className="fixed">
        <div className="relative flex flex-col w-full gap-4 overflow-clip pt-12 md:pt-20 pb-6">
          <div className="flex gap-2 md:mx-36 mx-6 md:text-lg text-sm text-lightolive py-4 mt-6">
            <p className="uppercase">Start</p>
            <p className="inline-block">/</p>
            <p className="uppercase">Kundcase</p>
          </div>
        </div>
        <a href="#case">
          <div className="md:hidden absolute bottom-0 left-[40%] w-[80px] h-[80px] flex justify-center items-center rounded-full animate-bounce border-[1px] border-lightolive">
            <Image src={arrowDown} width={25} alt="arrow pointing down icon" />
          </div>
        </a>
        {/*HEADER START*/}

        <div className="flex mx-6 md:mx-36 gap-16 justify-between w-full md:mt-6">
          <div className="flex flex-1 flex-col mb-36">
            <h1 className="md:text-5xl flex flex-col md:flex-row items-start text-4xl text-skandiblue font-head mb-4 font-semibold capitalize">
              Webshop till Drinkbolaget
            </h1>
            <p className="text-2xl text-lightolive mt-4 leading-normal">
              Låt dig inspireras av någa av våra tidigare projekt.{" "}
              <br className="hidden md:block" /> Vill du se ett projekt kopplat
              till din bransch?
            </p>
            <div className="flex mt-10 gap-4 md:gap-6 overflow-x-auto">
              <div className="">
                <div className="border-2 whitespace-nowrap font-semibold text-stoneolive border-lightolive px-6 py-1 rounded-xl">
                  Webshop
                </div>
              </div>
              <div className="">
                <div className="border-2 whitespace-nowrap font-semibold text-stoneolive border-lightolive px-6 py-1 rounded-xl">
                  Landningssidor
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 hidden md:block">
            <Image
              alt="drinkbolaget project"
              src={drinkbolaget}
              className="md:rounded-lg md:drop-shadow-card object-cover w-full h-[300px]"
            />
          </div>
        </div>
      </div>
      {/*EARLIER PROJECTS START*/}
      <div
        id="case"
        className="relative top-[80vh] pt-24 rounded-lg gap-16 md:gap-28 flex flex-col mx-0 bg-gradient-to-tl from-neutral-200 to-[#f3f2f0]"
      >
        <div className="flex flex-row gap-6 md:gap-12 md:px-36 overflow-x-auto snap-x snap-mandatory w-full">
          <div className="relative ml-4 md:ml-0 md:flex-1 w-[300px] h-[300px] flex-shrink-0 snap-start">
            <Image
              alt="drinkbolaget project"
              src={drinkbolaget}
              fill
              className="object-cover md:rounded-lg"
            />
          </div>
          <div className="relative md:flex-1 w-[300px] h-[300px] flex-shrink-0 snap-start">
            <Image
              alt="drinkbolaget project"
              src={drinkbolaget}
              fill
              className="object-cover md:rounded-lg"
            />
          </div>
          <div className="relative md:flex-1 w-[300px] h-[300px] flex-shrink-0 snap-start">
            <Image
              alt="drinkbolaget project"
              src={drinkbolaget}
              fill
              className="object-cover md:rounded-lg"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse justify-between gap-12 md:mt-8 md:px-36">
          <div className="flex-1">
            <Image
              alt="drinkbolaget project"
              src={drinkbolaget}
              className="object-cover md:rounded-lg w-full h-[500px]"
            />
          </div>
          <div className="flex-1 mx-6 md:mx-0">
            <h4 className="text-4xl font-head font-semibold text-stoneolive">
              Målsättning
            </h4>
            <p className="text-xl text-lightolive mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              maxime quam, illo unde distinctio dolorem quia doloribus tenetur
              accusamus, fugit sunt quas voluptates beatae. Ea blanditiis unde
              officia consectetur vel ipsa ut, fugit saepe praesentium quis, rem
              rerum voluptatum laboriosam eos eaque commodi dolor voluptas
              voluptatibus? Nostrum consequatur iusto recusandae.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse gap-12 mt-4 md:mt-8 md:px-36">
          <div className="flex-1">
            <Image
              alt="drinkbolaget project"
              src={drinkbolaget}
              className="object-cover md:rounded-lg w-full h-[500px]"
            />
          </div>
          <div className="flex-1 px-6">
            <h4 className="text-4xl font-head font-semibold text-stoneolive">
              Utförande
            </h4>
            <p className="text-xl text-lightolive mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              maxime quam, illo unde distinctio dolorem quia doloribus tenetur
              accusamus, fugit sunt quas voluptates beatae. Ea blanditiis unde
              officia consectetur vel ipsa ut, fugit saepe praesentium quis,
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-12 md:px-60 md:py-24">
          <div className="flex-1 px-6 md:px-0">
            <h4 className="text-5xl text-center font-head font-semibold text-stoneolive pt-8 md:pt-0">
              Resultat
            </h4>
            <p className="text-xl text-center md:mx-56 text-lightolive mt-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              maxime quam, illo unde distinctio dolorem quia doloribus tenetur
              accusamus, fugit sunt quas voluptates beatae. Ea blanditiis unde
              officia consectetur vel ipsa ut,
            </p>
          </div>
          <div className="flex md:flex-row flex-col justify-center gap-12 md:gap-24 mt-6">
            <div className="flex flex-col justify-center items-center rounded-lg">
              <p className="text-7xl font-head font-semibold text-stoneolive">
                1,5%
              </p>
              <p className="text-2xl text-lightolive">Högre konvertering</p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg">
              <p className="text-7xl font-head font-semibold text-stoneolive">
                1,5%
              </p>
              <p className="text-2xl text-lightolive">Högre konvertering</p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg">
              <p className="text-7xl font-head font-semibold text-stoneolive">
                1,5%
              </p>
              <p className="text-2xl text-lightolive">Högre konvertering</p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative bg-eggshell md:px-52 flex flex-col md:flex-row justify-center  pt-12 md:pt-24  md:pb-36 pb-16 md:gap-60 items-center overflow-clip">
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
                Vi skräddarsyr hemsidor, <br /> appar och interna system <br />{" "}
                med fokus på era specifika <br /> mål och utmaningar
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
          <div className="bg-eggshell w-full h-[500px] bg-gradient-to-tl from-neutral-200 to-[#f3f2f0] drop-shadow-card">
            lala
          </div>
        </div>
      </div>
      {/*CONTACT SECTION*/}
      {/*FOOTER*/}
    </main>
  );
}
