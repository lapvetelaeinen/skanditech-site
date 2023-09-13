import Image from "next/image";
import Link from "next/link";
import drinkbolaget from "../../../public/drinkbolaget.jpg";
import rougeHome from "../../../public/rouge-homepage.jpg";
import rougeBuy from "../../../public/rouge-buy-ticket.jpg";
import rougeTicket from "../../../public/rouge-ticket.jpg";
import ContactSection from "@/app/_components/ContactSection";
import skanditechIcon from "../../../public/skanditech-icon.svg";
import arrowDown from "../../../public/chevron-down.svg";

import filip from "../../../public/filip-lapvetelainen.jpg";

export default function Testimonials() {
  return (
    <main className="">
      <div className="fixed">
        <div className="relative flex flex-col w-full gap-4 overflow-clip pb-6">
          <div className="flex gap-2 md:mx-36 mx-6 md:text-lg text-sm text-lightolive py-4 md:mt-24 mt-16">
            <Link href={"/"}>
              <p className="uppercase">Start</p>
            </Link>
            <p className="inline-block">/</p>
            <Link href={"/kundcase"}>
              <p className="uppercase">Kundcase</p>
            </Link>
            <p className="inline-block">/</p>
            <p className="uppercase">Rouge nattklubb</p>
          </div>
        </div>
        <a href="#case">
          <div className="md:hidden absolute bottom-[50px] left-[40%] w-[80px] h-[80px] flex justify-center items-center rounded-full animate-bounce border-[1px] border-lightolive">
            <Image src={arrowDown} width={25} alt="arrow pointing down icon" />
          </div>
        </a>
        {/*HEADER START*/}

        <div className="flex px-6 md:px-36 gap-16 justify-between w-full md:mt-">
          <div className="flex flex-1 flex-col mb-36">
            <h1 className="md:text-5xl flex flex-col md:flex-row items-start text-4xl text-skandiblue font-head mb-4 font-semibold">
              Biljettsystem och hemsida till Rouge nattklubb
            </h1>
            <p className="text-xl md:text-2xl text-lightolive mt-4 leading-normal">
              Låt dig inspireras av någa av våra tidigare projekt.{" "}
              <br className="hidden md:block" /> Vill du se ett projekt kopplat
              till din bransch?
            </p>
            <div className="flex flex-wrap mt-10 gap-x-4 gap-y-2 md:gap-6 overflow-x-auto">
              <div className="border-2 whitespace-nowrap font-semibold text-stoneolive border-lightolive px-6 py-1 rounded-xl">
                Biljettsystem
              </div>
              <div className="border-2 whitespace-nowrap font-semibold text-stoneolive border-lightolive px-6 py-1 rounded-xl">
                Swish
              </div>

              <div className="border-2 whitespace-nowrap font-semibold text-stoneolive border-lightolive px-6 py-1 rounded-xl">
                Hemsida
              </div>
            </div>
          </div>
          <div className="flex-1 asbolute top-0 hidden md:block">
            <div className="relative w-full h-[300px] md:w-full md:h-full md:rounded-lg md:drop-shadow-card overflow-clip">
              <video
                className="absolute md:top-[-40%] left-0 top-[-50px]"
                playsInline
                autoPlay
                muted
                loop
                src="/rouge-video.mp4"
                style={{ width: "100vw" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/*EARLIER PROJECTS START*/}
      <div
        id="case"
        className="relative top-[95vh] md:pt-12 rounded-lg flex flex-col mx-0 bg-[#f3f2f0]"
      >
        {/* <div className="flex flex-row gap-6 md:gap-12 md:px-36 overflow-x-auto snap-x snap-mandatory w-full">
          <div className="relative ml-4 md:ml-0 md:flex-1 w-[300px] h-[300px] flex-shrink-0 snap-start">
            <Image
              alt="drinkbolaget project"
              src={rougeHome}
              fill
              className="object-cover md:rounded-lg"
            />
          </div>
          <div className="relative md:flex-1 w-[300px] h-[300px] flex-shrink-0 snap-start">
            <Image
              alt="drinkbolaget project"
              src={rougeBuy}
              fill
              className="object-cover md:rounded-lg"
            />
          </div>
          <div className="relative md:flex-1 w-[300px] h-[300px] flex-shrink-0 snap-start">
            <Image
              alt="drinkbolaget project"
              src={rougeTicket}
              fill
              className="object-cover md:rounded-lg"
            />
          </div>
        </div> */}
        <div className="flex md:hidden md:flex-row flex-col justify-between gap-12 md:mt-12 md:px-36">
          <div className="flex-1">
            <div className="relative w-full h-[500px] md:rounded-lg md:drop-shadow-card overflow-clip">
              <video
                className="absolute md:top-[-40%] left-0 top-[-50px]"
                playsInline
                autoPlay
                muted
                loop
                src="/rouge-video.mp4"
                style={{ width: "100vw" }}
              />
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col-reverse justify-between gap-12 md:px-36 md:pb-24">
          <div className="flex-1">
            <div className="relative md:w-[90%] md:h-[700px] h-[500px] w-[100vw] md:rounded-lg overflow-clip">
              <video
                className="absolute left-0 "
                playsInline
                autoPlay
                muted
                loop
                src="/rouge-case-demo.mp4"
                style={{ width: "100vw" }}
              />
            </div>
          </div>
          <div className="flex-1 mx-6 md:mx-0 md:mt-36 mt-16">
            <h4 className="text-4xl font-head font-semibold text-stoneolive">
              Uppdraget
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
        {/* LÄGG TILL SEN */}
        {/* <div className="flex md:flex-row flex-col-reverse justify-between gap-12 mt-12 md:mt-24 md:px-36 md:pb-36">
          <div className="flex-1">
            <Image
              alt="drinkbolaget project"
              src={drinkbolaget}
              className="object-cover md:rounded-lg w-full h-[500px]"
            />
          </div>
          <div className="flex-1 mx-6 md:mx-0">
            <h4 className="text-4xl font-head font-semibold text-stoneolive">
              Utförande
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
        </div> */}

        {/* <div className="flex flex-col gap-12 md:px-60 pt-12 pb-16 md:py-24">
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
        </div> */}
        {/*CONTACT SECTION*/}
        <ContactSection color="eggshell" />
        {/*FOOTER*/}
        <div className="flex justify-center items-end bg-gradient-to-tl from-neutral-200 to-white w-full pt-0 md:pt-24">
          <div className="flex md:flex-row flex-col justify-center md:justify-between gap-12 w-full h-full items-center md:items-end relative px-4 md:px-12 pb-16">
            <div className="flex flex-1 flex-col gap-2 w-full">
              <p className="text-skandiblue text-center md:text-start font-head text-4xl md:text-5xl font-semibold md:pt-0 pt-24">
                Föreställ dig att...
              </p>
              <p className="text-stoneolive text-center md:text-start text-2xl md:pt-6 pt-4">
                ...börja varje måndag med en innovativ idé...{" "}
              </p>
              <p className="text-stoneolive text-center md:text-start text-2xl md:pt-0 mb-4">
                ...levererad rakt ner i din mail, lagomt till morgonkaffet.
              </p>
              <p className="text-lightolive text-center md:text-start md:text-stoneolive text-xl mb-6">
                Prenumerera på vårt nyhetsbrev och ta del av innovativa
                användningsområden för den nyaste tekniken.
              </p>
              <form
                action="
            "
                className="flex md:flex-row flex-col gap-4 md:pt-0 pt-6 md:pb-0 pb-12 drop-shadow-card"
              >
                <input
                  type="email"
                  placeholder="Ange din email"
                  className="text-xl text-center md:text-start py-4 px-4 rounded-md bg-white border-2 "
                />
                <input
                  type="submit"
                  value={"Prenumerera på idéer"}
                  className="text-xl py-4 px-8 bg-[#b9ff82] rounded-md cursor-pointer md:hover:translate-x-2 transition-all"
                />
              </form>
            </div>
            <div className="flex md:static absolute bottom-4 left-4 md:flex-1 w-[300px] justify-start items-start md:justify-end md:items-end gap-y-2 gap-x-3 flex-wrap md:h-full">
              <Link href={"/kontakta-oss"}>
                <p className="inline-block border-2 whitespace-nowrap text-stoneolive border-lightolive px-6 py-1 rounded-xl hover:bg-lightolive hover:text-neutral-100 transition-all">
                  Kontakt
                </p>
              </Link>
              <Link href={"/om-oss"}>
                <p className="inline-block border-2 whitespace-nowrap text-stoneolive border-lightolive px-6 py-1 rounded-xl hover:bg-lightolive hover:text-neutral-100 transition-all">
                  Om oss
                </p>
              </Link>
              <Link href={"/vara-tjanster"}>
                <p className="inline-block border-2 whitespace-nowrap text-stoneolive border-lightolive px-6 py-1 rounded-xl hover:bg-lightolive hover:text-neutral-100 transition-all">
                  Vad vi gör
                </p>
              </Link>
              <Link href={"/kundcase"}>
                <p className="inline-block border-2 whitespace-nowrap text-stoneolive border-lightolive px-6 py-1 rounded-xl hover:bg-lightolive hover:text-neutral-100 transition-all">
                  Kundcase
                </p>
              </Link>
            </div>

            <div className="flex justify-end gap-16 text-right md:pb-0 pb-36">
              <div className="md:inline-block flex flex-col items-center">
                <p className="text-2xl text-stoneolive font-head font-medium mt-4">
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
          </div>
        </div>
      </div>
    </main>
  );
}
