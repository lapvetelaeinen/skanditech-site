import Image from "next/image";
import Footer from "../_components/Footer.js";
import quotes from "../../public/quotes-white.svg";
import ContactSection from "../_components/ContactSection.js";
import gradientIcon from "../../public/gradient-icon.svg";
import skanditechTeam from "../../public/skanditech-team.jpg";
import skanditechIcon from "../../public/skanditech-icon.svg";
import skanditechMask from "../../public/skanditech-mask.svg";
import filip from "../../public/filip-lapvetelainen.jpg";
import siyu from "../../public/siyu-luan.jpg";
import happyEmployees from "../../public/happy-employees.webp";
import serviceStyle from "../../styles/Services.module.css";
import styles from "../../styles/Icon.module.css";

export default function About() {
  return (
    <main className="">
      <div className="relative flex flex-col w-full gap-4 overflow-clip md:pt-20 pt-12 pb-28 md:pb-36 bg-gradient-to-r from-eggshell via-eggshell to-transparent">
        <div className="absolute md:-right-[200px] -z-10 w-full min-h-screen bg-eggshell">
          <Image
            src={happyEmployees}
            fill
            className={`${serviceStyle.hero} object-cover object-top opacity-50 translate-y-[-100px]`}
          />
        </div>
        {/* <div className="absolute -z-10 top-0 right-0 -rotate-[50deg] translate-x-[500px] translate-y-[100px]">
          <Image src={gradientIcon} width={2000} className="opacity-[10%]" />
        </div> */}
        <div className="flex gap-2 md:mx-36 mx-6 md:text-lg text-sm text-lightolive py-4 mt-6">
          <p className="uppercase">Start</p>
          <p className="inline-block">/</p>
          <p className="uppercase">Om oss</p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:mt-8">
          <div className="">
            <div className="mx-6 md:mx-36">
              <h2 className="font-head font-medium text-xl text-lightolive uppercase">
                Om oss
              </h2>
              <h1 className="text-4xl md:text-6xl font-head mt-6 mb-8 font-semibold">
                En förstående och
                <br />
                målinriktad byrå
              </h1>
              <div className="w-[180px] h-[1px] bg-lightolive" />
              <p className="md:text-2xl text-xl text-stoneolive mt-8">
                Grunden i allt vårt arbete <br /> är att tidigt skapa en
                förståelse
                <br /> av er verksamhets möjligheter <br /> och utmaningar.
                Först då kan <br /> vi diskutera hur en digital lösning <br />{" "}
                kan ta er till era mål.
              </p>
            </div>
          </div>
          <div className="max-w-[400px] hidden md:block">
            <Image src={skanditechTeam} className="rounded-full" />
          </div>
        </div>
      </div>
      {/*VALUES START*/}

      <div className="relative flex justify-center pt-28 pb-12 md:py-12 w-full bg-[#FF6262] overflow-clip">
        <div className="absolute w-[800px] h-[800px] bg-auroragreen rounded-full blur-[200px] opacity-25 right-0 bottom-0 translate-x-[200px] translate-y-[500px]"></div>
        <div className="absolute w-[800px] h-[800px] bg-aurorapurple rounded-full blur-[200px] opacity-25 left-0 top-0 -translate-x-[200px] -translate-y-[300px]"></div>
        <div className="relative flex flex-col items-center gap-6 text-[#e4e4e4] z-10 max-w-[800px]">
          <Image
            src={quotes}
            width={100}
            className="absolute left-0 translate-y-[-110%] ml-6 md:ml-0 md:translate-y-0 md:translate-x-[-130%]"
          />
          <p className="md:text-2xl leading-relaxed md:mx-0 mx-6 text-xl">
            Trots att vi skapar estetiskt tilltalande och välfungerande hemsidor
            och appar så vill vi poängtera att vi gör mer än bara det. Vi finns
            till för att skapa tillväxt och lönsamhet på den svenska marknaden.
            Vår drömkund är den drivande entreprenören, ett växande startup, ett
            väletablerat företag och allt däremellan. Ert förtroende i våra
            tjänster är inte bara ett projekt, det är en möjlighet att skapa
            förändring och framgångssagor som inspirerar och driver näringslivet
            framåt.{" "}
          </p>
        </div>
      </div>
      {/*VISION STATEMENT START*/}
      <div className="relative w-full pb-24 -z-10 md:mx-0 bg-eggshell">
        <div className="absolute top-0 md:-top-[175px] -z-10 w-full min-h-screen opacity-50">
          <Image
            src={happyEmployees}
            className={`${styles.hero} object-cover object-top md:w-full md:scale-100`}
          />
        </div>
        <div className="flex items-end min-h-screen justify-between px-12 md:flex-row flex-col md:pt-52 bg-gradient-to-r from-eggshell to-transparent">
          <div className="max-w-[400px] ml-52 hidden md:block">
            <Image src={skanditechTeam} className="rounded-full" />
          </div>
          <div className="max-w-[600px]">
            <h2 className="font-head text-xl font-medium uppercase text-lightolive mt-20">
              Vårt tankesätt
            </h2>
            <h1 className="md:text-6xl text-4xl font-head mt-6 mb-8 font-semibold">
              Varje framgångsrecept
              <br />
              är unikt
            </h1>
            <div className="md:w-[480px] w-[200px] h-[1px] bg-lightolive" />
            <p className="text-xl md:text-2xl text-stoneolive mt-8">
              För oss är varje digital lösning en unik produkt som formats efter
              våra kunders specifika utmaningar och mål. Erat framgångsrecept är
              unikt, vilket gör det oerhört viktigt för oss att skapa en
              djupgående förståelse av er verksamhet, utmaningar och
              målsättningar. Först då kan vi skapa meningsfulla och effektiva
              digitala lösningar som tar er närmare era mål. <br />
              <br /> Varje designelement och funktion är noggrant utformat för
              att uppfylla syftet med er digitala lösning. Genom att bygga
              skalbara och anpassningsbara lösningar, säkerställer vi att er
              investering inte bara levererar resultat idag, utan också
              fortsätter att blomstra när verksamheten växer och utvecklas.{" "}
              <br />
              <br /> Med oss vid er sida kan ni vara säkra på att varje digitalt
              steg ni tar är en välgrundad och fokuserad rörelse mot ert
              företags målsättningar.
            </p>
          </div>
        </div>
      </div>
      {/*OM OSS*/}
      <div className="flex px-6 text-center pt-24 pb-16 md:py-36 flex-col justify-center items-center bg-gradient-to-tl from-neutral-200 to-[#f3f2f0]">
        <h3 className="text-4xl md:text-6xl font-head font-semibold text-skandiblue">
          En passionerad duo
        </h3>
        <p className="text-xl md:text-2xl max-w-[500px] mt-6 md:mt-12">
          Från studentkorridoren till utvecklandet av skräddarsydda lösningar
          som tar företag närmare deras mål.
        </p>
        <div className="flex md:flex-row flex-col gap-24 md:gap-36 mt-16">
          <div className="flex flex-col justify-center items-center">
            <Image
              alt="Siyu Luan"
              src={siyu}
              className="rounded-full md:drop-shadow-md select-none pointer-events-none max-w-[300px]"
            />
            <p className="text-2xl font-head font-semibold mt-6">Siyu Luan</p>
            <p className="text-xl text-lightolive font-semibold pt-2">
              Medgrundare
            </p>
            <p className="text-xl italic text-lightolive">
              Data analyst och mjukvaruutvecklare
            </p>
            <p className="text-xl max-w-[400px] pt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur quam sit vero inventore. Porro, animi commodi
              excepturi distinctio, iste ipsam blanditiis aut temporibus
              consequatur autem magni enim similique omnis iure.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              alt="Filip Lapveteläinen"
              src={filip}
              className="rounded-full md:drop-shadow-md select-none pointer-events-none max-w-[300px]"
            />
            <p className="text-2xl font-head font-semibold mt-6">
              Filip Lapveteläinen
            </p>
            <p className="text-xl text-lightolive font-semibold pt-2">
              Grundare
            </p>
            <p className="text-xl italic text-lightolive">
              VD och account manager
            </p>
            <p className="text-xl max-w-[400px] pt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur quam sit vero inventore. Porro, animi commodi
              excepturi distinctio, iste ipsam blanditiis aut temporibus
              consequatur autem magni enim similique omnis iure.
            </p>
          </div>
        </div>
      </div>
      {/*CONTACT SECTION*/}
      <ContactSection color="eggshell" />
      <div className="w-full h-[1px] bg-lightolive md:mb-[500px]"></div>
      {/*FOOTER*/}
      <Footer />
    </main>
  );
}
