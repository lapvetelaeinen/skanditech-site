"use client";

import Image from "next/image";
import Link from "next/link";
import Case from "./_components/Case.js";
import Footer from "./_components/Footer.js";
import ContactSection from "./_components/ContactSection.js";
import { useEffect, useState, useRef } from "react";
import filip from "../public/filip-lapvetelainen.jpg";
import greenWaves from "../public/green-waves.svg";
import heart from "../public/heart-circle.svg";
import target from "../public/bullseye-pointer.svg";
import chart from "../public/chart-line.svg";
import hands from "../public/hands-helping.svg";
import drinkbolaget from "../public/drinkbolaget.jpg";

export default function Home() {
  const prevScrollYRef = useRef(0);
  const scrollDirectionRef = useRef("None");
  const scrollCount = useRef(0);
  const [windowHeight, setWindowHeight] = useState(null);
  const [activeWord, setActiveWord] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  function getWindowHeight() {
    return window.innerHeight;
  }

  useEffect(() => {
    function isElementVisible(element) {
      const rect = element.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      if (rect.bottom < 0 || rect.top > viewportHeight) {
        return false;
      }
      return true;
    }

    const windowHeight = getWindowHeight();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const introEl = document.getElementById("intro");
      const uspHeading = document.getElementById("uspHeading");

      const isVisible = isElementVisible(uspHeading);
      console.log(isVisible);

      //CHECK IF THE INTRO SECTION IS REACHED
      const progress = Math.floor((currentScrollY - windowHeight) / 5);

      // if (currentScrollY > windowHeight) {
      //   introEl.style.position = "sticky";
      //   introEl.style.top = "0px";

      //   if (progress <= 66) {
      //     console.log(progress);
      //     setScrollProgress(progress);
      //     const modifiedProgress = Math.ceil(progress * 1.5151);
      //     progressBarTop.style.width = modifiedProgress + "%";
      //     setScrollProgress(modifiedProgress + "%");
      //   } else if (progress >= 66 && progress <= 100) {
      //     const modifiedProgress = Math.ceil((progress - 66) * 2.94117);
      //     progressBarBot.style.width = modifiedProgress + "%";
      //     setScrollProgress(modifiedProgress + "%");
      //   }
      // }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/*HERO SECTION*/}

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
              Krossa <br /> <strong>era mål</strong> <br /> med rätt{" "}
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
              <button className="border-2 hidden md:block border-stoneolive text-stoneolive hover:text-lightolive hover:border-s-stoneolive md:px-12 px-6 py-4 rounded-lg md:text-2xl text-lg hover:scale-105 duration-100">
                Kundcase
              </button>
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
      {/*END HERO SECTION*/}
      {/*USP SECTION*/}

      <div
        id="intro"
        className="relative text-white flex flex-col justify-center items-"
      >
        <div className="bg-gradient-to-tl from-neutral-200 to-[#f3f2f0]">
          <h3 className="mb-12 pl-6 md:pl-0 font-head md:text-center mt-24 md:mt-36 font-medium text-xl text-lightolive uppercase">
            Varför skanditech?
          </h3>

          <div className="flex flex-col md:gap-2 justify-center mx-auto">
            <div id="uspHeading" className="mx-auto relative">
              <div
                id="progressBarTop"
                className="absolute top-0 left-0 h-full bg-[#b9ff82]"
              ></div>
              <h2 className="absolute top-0 left-0 text-5xl px-6 md:text-center font-head leading-normal text-skandiblue font-semibold">
                Affärsnytta, affärsnytta,
              </h2>
              <h2 className="text-5xl px-6 md:text-center font-head leading-normal text-skandiblue font-semibold">
                Affärsnytta, affärsnytta,
              </h2>
            </div>
            <div className="md:mx-auto relative">
              <div
                id="progressBarBot"
                className="absolute top-0 left-0 h-full bg-[#b9ff82]"
              ></div>
              <h2 className="absolute top-0 left-0 text-5xl px-6 md:text-center font-head leading-normal text-skandiblue font-semibold">
                affärsnytta.
              </h2>
              <h2 className="text-5xl px-6 md:text-center font-head leading-normal text-skandiblue font-semibold">
                affärsnytta.
              </h2>
            </div>
          </div>
          <p className="text-2xl pl-6 md:pl-0 md:text-center text-stoneolive mb-4 mt-8">
            Det är ingen hemlighet att nya plattformar och outsourcing
            <br /> gör det möjligt att skapa hemsidor och appar till förmånliga
            priser.
          </p>
          <p className="text-2xl px-6 md:px-0  text-stoneolive md:text-center mb-20">
            Så låt oss berätta vad som gör oss annorlunda
            <br /> och hur{" "}
            <strong>vi kommer bidra i resan mot era långsiktiga mål.</strong>
          </p>
          <div className="w-full flex md:justify-center pl-6 md:pl-0">
            <div className="w-[180px] h-[1px] bg-lightolive" />
          </div>
          <div className="grid md:grid-cols-2 md:grid-rows-2 gap-12 z-10 mt-16 md:mt-36 md:mx-56 mx-4 mb-16">
            <div className="flex flex-col px-6 py-4 border-2 border-stoneolive rounded-lg hover:-translate-y-4 transition-transform">
              <div className="flex items-center gap-6 text-skandiblue font-semibold mb-3">
                <Image src={target} width={45} alt="cursor target icon" />
                <h3 className="text-3xl">Målinriktade lösningar</h3>
              </div>
              <div className="w-1/3 h-[1px] bg-stoneolive mb-4 mt-2"></div>
              <p className="text-stoneolive text-xl">
                Fler kunder, högre snittordrar, bättre kundförståelse eller
                lägre administrationskostnader? Med hjälp av en grundlig
                behovsanalys för att uppnå förståelse för er verksamhet, era
                utmaningar och er målgrupp så kommer vi kunna skräddarsy en
                lösning som är optimerad att uppnå ett förutbestämt mål.
              </p>
            </div>
            <div className="flex flex-col px-6 py-4 border-2 border-stoneolive rounded-lg hover:-translate-y-4 transition-transform">
              <div className="flex items-center gap-6 text-skandiblue font-semibold mb-3">
                <Image src={chart} width={45} alt="statistics chart icon" />
                <h3 className="text-3xl">Data-drivna optimeringar</h3>
              </div>
              <div className="w-1/3 h-[1px] bg-stoneolive mb-4 mt-2"></div>
              <p className="text-stoneolive text-xl">
                Målgruppens beteende på er hemsida eller app ger oss god grund
                för att göra data-drivna optimeringar av er digitala lösning.
                Allt för att säkerställa att vi är påväg mot det uppsatta målet.
              </p>
            </div>
            <div className="flex flex-col px-6 py-4 border-2 border-stoneolive rounded-lg hover:-translate-y-4 transition-transform">
              <div className="flex items-center gap-6 text-skandiblue font-semibold mb-3">
                <Image src={heart} width={45} alt="heart in circle icon" />
                <h3 className="text-3xl">Starkare varumärke</h3>
              </div>
              <div className="w-1/3 h-[1px] bg-stoneolive mb-4 mt-2"></div>
              <p className="text-stoneolive text-xl">
                Vi säkerställer att er hemsida eller app förmedlar de känslor
                och budskap som ligger till grund för ert varumärke. I och med
                att vi skriver varje rad av kod så har vi full kontroll över
                användarnas upplevelse. Har ni inget tydligt varumärke än så
                hjälper vi er gärna med detta.
              </p>
            </div>
            <div className="flex flex-col px-6 py-4 border-2 border-stoneolive rounded-lg hover:-translate-y-4 transition-transform">
              <div className="flex items-center gap-6 text-skandiblue font-semibold mb-3">
                <Image src={hands} width={45} alt="hands shaking icon" />
                <h3 className="text-3xl">Långsiktiga relationer</h3>
              </div>
              <div className="w-1/3 h-[1px] bg-stoneolive mb-4 mt-2"></div>
              <p className="text-stoneolive text-xl">
                Direkt från start kommer ni märka av vårt personliga engagemang.
                Detta engagemang försvinner ingenstans när er lösning
                levererats, utan vi kommer göra kontinuerliga uppföljningar för
                att utvärdera er lösnings prestation. Sen att vi har det
                otroligt trevligt under våra samtal är bara en bonus!
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href={"/vara-tjanster"}>
              <button className="bg-skandiblue z-10 px-12 py-4 text-neutral-50 rounded-lg text-2xl hover:scale-105 duration-100 text-center mt-4 md:mt-16 mb-24">
                Se hur vi jobbar
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/*TESTIMONIALS SECTION*/}
      <div className="md:px-52 pb-24 pt-12 md:pt-36 bg-eggshell">
        <div className="md:text-center flex flex-col items-center">
          <h3 className="font-head font-medium text-xl text-lightolive uppercase">
            Referenser
          </h3>
          <h2 className="text-5xl mx-8 pb-4 md:pb-12 text-skandiblue text-center font-head leading-tight mt-6 mb-8 font-semibold capitalize">
            Tidigare projekt
          </h2>
        </div>
        <Case
          businessCase={{
            name: "Rouge nattklubb",
            title: "Biljettsystem och hemsida",
            desc: "det blev kaos i början men senare löste vi allt",
          }}
        />
        <div className="flex flex-col items-center mt-24 md:mt-44">
          <Link href={"/kundcase"}>
            <button className="border-2 border-skandiblue px-12 py-4 text-skandiblue rounded-lg text-2xl hover:scale-105 duration-100 text-center mb-16">
              Se fler projekt
            </button>
          </Link>
          <div className="md:w-[350px] w-[150px] h-[1px] bg-lightolive" />
        </div>
      </div>
      {/*END TESTIMONIALS SECTION*/}
      {/*CONTACT SECTION*/}
      <ContactSection color="white" />
      <div className="w-full h-[1px] bg-lightolive md:mb-[500px]"></div>

      {/*FOOTER*/}

      <Footer />

      {/*END USP SECTION*/}
    </main>
  );
}
