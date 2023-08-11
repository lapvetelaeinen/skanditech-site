import Image from "next/image";
import Link from "next/link";
import fistRaised from "../../public/fist-raised.svg";
import skanditechTeam from "../../public/skanditech-team.jpg";
import ContactSection from "../_components/ContactSection";
import quotes from "../../public/quotes.svg";
import blueWaves from "../../public/services-blue-waves.svg";
import happyEmployees from "../../public/happy-employees.webp";
import styles from "../../styles/Services.module.css";
import Footer from "../_components/Footer";
import CaseSection from "../_components/CaseSection";

export default function Services() {
  return (
    <main>
      <div className="relative flex flex-col w-full gap-4 overflow-clip pb-36 bg-gradient-to-r from-eggshell via-eggshell to-transparent">
        <div className="absolute md:-right-[200px] -z-10 w-full min-h-screen bg-eggshell">
          <Image
            alt="Glada medarbetare"
            src={happyEmployees}
            fill
            className={`${styles.hero} object-cover object-top opacity-50 translate-y-[-10px]`}
          />
        </div>
        <div className="flex gap-2 md:mx-36 mx-6 md:text-lg text-sm text-lightolive py-4 md:mt-24 mt-16">
          <Link href={"/"}>
            <p className="uppercase">Start</p>
          </Link>
          <p className="inline-block">/</p>
          <p className="uppercase">Vad vi gör</p>
        </div>
        <div className="flex items-center md:mt-8">
          <div className="">
            <div className="md:mx-36 mx-6">
              <h2 className="font-head font-medium text-xl text-lightolive uppercase">
                Vad vi gör
              </h2>
              <h1 className="text-4xl md:text-6xl font-head mt-6 mb-8 font-semibold">
                Flexibel utveckling
                <br />i en snabbt
                <br />
                föränderlig värld
              </h1>
              <div className="w-[180px] h-[1px] bg-lightolive" />
              <p className="text-xl md:text-2xl text-stoneolive mt-8">
                Med vårt flexibla arbetssätt <br /> är vi alltid med på noterna
                ifall
                <br /> ändringar behöver göras till projektet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row md:justify-evenly justify-between gap-16 md:gap-0 items-center py-24 md:py-0 md:h-[300px] w-full bg-skandiblue overflow-clip">
        <div className="absolute w-[800px] h-[800px] bg-auroragreen rounded-full blur-[200px] opacity-25 right-0 bottom-0 md:translate-x-[200px] md:translate-y-[500px]"></div>
        <div className="absolute w-[800px] h-[800px] bg-aurorapurple rounded-full blur-[200px] opacity-25 left-0 top-0 md:-translate-x-[200px] md:-translate-y-[300px]"></div>
        <div className="flex flex-col items-center gap-6 text-[#e4e4e4] mb-3 z-10">
          {/* <Image src={fistRaised} width={45} /> */}
          <h3 className="text-3xl">Flexibel planering</h3>
        </div>
        <div className="flex flex-col items-center gap-6 text-[#e4e4e4] mb-3 z-10">
          {/* <Image src={fistRaised} width={45} /> */}
          <h3 className="text-3xl">Stegvis utveckling</h3>
        </div>
        <div className="flex flex-col items-center gap-6 text-[#e4e4e4] mb-3 z-10">
          {/* <Image src={fistRaised} width={45} /> */}
          <h3 className="text-3xl">Nära dialog</h3>
        </div>
      </div>
      <div className="relative w-full -z-0">
        <div className="absolute top-0 right-0 bg-eggshell">
          <Image
            alt="Blått månsken"
            src={blueWaves}
            width={2000}
            className="opacity-[10%]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center md:px-52 pt-24 bg-eggshell">
        <h3 className="font-head font-medium text-xl text-lightolive uppercase z-20">
          Agil utveckling
        </h3>
        <h2 className="text-4xl md:text-6xl text-center font-head leading-tight mt-6 mb-8 font-semibold z-20">
          Hur vi jobbar
        </h2>
        <div className="w-[180px] h-[1px] bg-lightolive z-20" />
        <div className="relative flex w-full justify-center gap-20 items-center pt-24 px-6 md:px-0">
          <div className="absolute top-[50px] mx-auto md:mx-0 md:static md:w-full w-[150px] md:max-w-[400px]">
            <Image
              alt="Medarbetarna på Skanditech"
              src={skanditechTeam}
              className="rounded-full"
            />
          </div>
          <div className="mt-8 md:mt-0 z-10">
            <Image alt="Citattecken" src={quotes} width={100} />
            <p className="text-xl md:text-3xl text-stoneolive mt-6 max-w-[600px]">
              Förändring är oundvikligt. Oförutsägbara utmaningar uppstår,
              prioriteringar ändras och nya möjligheter avslöjar sig. Därför har
              vi valt ett agilt arbetssätt där vi kan anpassa och forma
              projektet på basis av kundens insikter och feedback.
            </p>
            <p className="italic mt-4 text-lightolive">
              Filip Lapveteläinen, grundare och account manager
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-eggshell gap-6 md:gap-16 z-10 md:pt-36 pt-16 md:px-56 pb-16">
        <div className="flex px-6 py-4">
          <div className="flex flex-col gap-6 mb-3">
            <h3 className="text-4xl z-10 md:text-5xl text-skandiblue font-semibold ">
              Flexibel planering
            </h3>
            <div className="flex md:flex-row flex-col gap-6 md:gap-12">
              <div className="relative md:w-[400px] w-full h-[300px] mt-2">
                <Image
                  alt="Glada medarbetare"
                  src={happyEmployees}
                  fill
                  className={`object-cover object-top`}
                />
              </div>

              <p className="text-stoneolive flex-1 text-xl">
                Vi förstår vikten av att vara flexibla i en ständigt föränderlig
                omvärld. Nya innovationer presenteras på marknaden,
                prioriteringar förändras och möjligheter som man inte visste
                fanns väntar på att bli utforskade. Det kan vara så att ni har
                en övergripande idé men är inte helt hundra på hur slutprodukten
                borde se ut. Ingen fara, vi ser till att dela upp projektet i
                mindre delar där vi först börjar med det allra viktigaste.
                Vartefter arbetet framskrider och ni kommer på fler idéer eller
                inser att någonting borde ändras så gör vi nödvändiga
                justeringar till den övergripande planen.
              </p>
            </div>
          </div>
        </div>
        <div className="flex px-6 py-4">
          <div className="flex flex-col gap-6 mb-3">
            <h3 className="text-4xl md:text-5xl text-skandiblue font-semibold ">
              Stegvis utveckling
            </h3>
            <div className="flex md:flex-row flex-col gap-6 md:gap-12">
              <div className="relative md:w-[400px] w-full h-[300px] mt-2">
                <Image
                  alt="Glada medarbetare"
                  src={happyEmployees}
                  fill
                  className={`object-cover object-top`}
                />
              </div>

              <p className="text-stoneolive flex-1 text-xl">
                Genom att dela upp projektet i mindre delmoment kan vi börja
                leverera fungerande delar av er lösning tidigt och regelbundet.
                Detta gör det möjligt att tidigt samla in användarfeedback,
                vilken kan användas för att säkerställa att vi går i rätt
                riktning direkt från start. Att vi bryter ner projektet i mindre
                steg, även kallade "sprintar", gör det möjligt för er att testa
                delar av er digitala lösning under hela projektets livscykel.
                Detta ger er större insyn och kontroll, och vi kan snabbt
                justera riktningen baserat på er återkoppling.
              </p>
            </div>
          </div>
        </div>
        <div className="flex px-6 py-4">
          <div className="flex flex-col gap-6 mb-3">
            <h3 className="text-4xl md:text-5xl text-skandiblue font-semibold ">
              Nära dialog
            </h3>
            <div className="flex md:flex-row flex-col gap-6 md:gap-12">
              <div className="relative md:w-[400px] w-full h-[300px] mt-2">
                <Image
                  alt="Glada medarbetare"
                  src={happyEmployees}
                  fill
                  className={`object-cover object-top`}
                />
              </div>

              <p className="text-stoneolive flex-1 text-xl">
                Förhoppningsvis har det tydligt framgått att era insikter och er
                input är av största betydelse för oss när vi utvecklar er
                digitala lösning. Efter varje avklarat delmoment eller “sprint”
                så håller vi ett möte där vi diskuterar nya insikter som kan
                komma att påverka projektet. Här diskuterar vi även feedback
                från användartester för att säkerställa att varje del av
                projektet uppfyller projektets krav. Genom att göra tester i
                samband med varje avslutad del kan vi garantera att den lösning
                vi utvecklar uppfyller sitt syfte och ständigt förbättras.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full pl-6 md:pl-0 md:justify-center bg-eggshell">
        <div className="w-[250px] h-[1px] bg-lightolive" />
      </div>
      {/*TESTIMONIALS SECTION*/}
      <CaseSection />
      {/*END TESTIMONIALS SECTION*/}
      {/*CONTACT SECTION*/}
      <ContactSection color="white" />
      {/*FOOTER*/}
      <div className="w-full h-[1px] bg-lightolive md:mb-[500px]"></div>
      <Footer />
    </main>
  );
}
