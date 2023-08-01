import Image from "next/image";
import Link from "next/link";
import fistRaised from "../../public/fist-raised.svg";
import filip from "../../public/filip-lapvetelainen.jpg";
import skanditechTeam from "../../public/skanditech-team.jpg";
import skanditechIcon from "../../public/skanditech-icon.svg";
import quotes from "../../public/quotes.svg";
import blueWaves from "../../public/services-blue-waves.svg";
import happyEmployees from "../../public/happy-employees.webp";
import styles from "../../styles/Services.module.css";
import drinkbolaget from "../../public/drinkbolaget.jpg";
import heart from "../../public/heart-circle.svg";
import target from "../../public/bullseye-pointer.svg";
import chart from "../../public/chart-line.svg";
import hands from "../../public/hands-helping.svg";

export default function Services() {
  return (
    <main>
      <div className="relative flex flex-col w-full gap-4 overflow-clip md:pt-20 pt-12 pb-36 bg-gradient-to-r from-eggshell via-eggshell to-transparent">
        <div className="absolute top-0 md:-top-8 md:-right-[200px] -z-10 w-full min-h-screen opacity-[50%] md:opacity-[50%]">
          <Image
            src={happyEmployees}
            fill
            className={`${styles.hero} object-cover object-top`}
          />
        </div>
        <div className="flex gap-2 md:mx-36 mx-6 md:text-lg text-sm text-lightolive py-4 mt-6">
          <p className="uppercase">Start</p>
          <p className="inline-block">/</p>
          <p className="uppercase">Vad vi gör</p>
        </div>
        <div className="flex items-center md:mt-8">
          <div className="">
            <div className="md:mx-36 mx-6">
              <h2 className="font-head font-medium text-xl text-lightolive uppercase">
                Vad vi gör
              </h2>
              <h1 className="text-5xl md:text-6xl font-head mt-6 mb-8 font-semibold capitalize">
                Utveckling
                <br />
                baserad på data
              </h1>
              <div className="w-[180px] h-[1px] bg-lightolive" />
              <p className="text-2xl text-stoneolive mt-8">
                Vi skräddarsyr hemsidor, <br /> appar och interna system <br />{" "}
                med fokus på era specifika <br /> mål och utmaningar
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row md:justify-evenly justify-between gap-16 md:gap-0 items-center py-24 md:py-0 md:h-[300px] w-full bg-skandiblue overflow-clip">
        <div className="absolute w-[800px] h-[800px] bg-auroragreen rounded-full blur-[200px] opacity-25 right-0 bottom-0 md:translate-x-[200px] md:translate-y-[500px]"></div>
        <div className="absolute w-[800px] h-[800px] bg-aurorapurple rounded-full blur-[200px] opacity-25 left-0 top-0 md:-translate-x-[200px] md:-translate-y-[300px]"></div>
        <div className="flex flex-col items-center gap-6 text-[#e4e4e4] mb-3 z-10">
          <Image src={fistRaised} width={45} />
          <h3 className="text-3xl">Hemsidor</h3>
        </div>
        <div className="flex flex-col items-center gap-6 text-[#e4e4e4] mb-3 z-10">
          <Image src={fistRaised} width={45} />
          <h3 className="text-3xl">Appar</h3>
        </div>
        <div className="flex flex-col items-center gap-6 text-[#e4e4e4] mb-3 z-10">
          <Image src={fistRaised} width={45} />
          <h3 className="text-3xl">Interna system</h3>
        </div>
      </div>
      <div className="relative w-full mb-24 -z-10">
        <div className="absolute -z-10 top-0 right-0">
          <Image src={blueWaves} width={2000} className="opacity-[10%]" />
        </div>
      </div>
      <div className="flex flex-col items-center md:mx-52">
        <h3 className="font-head font-medium text-xl text-lightolive mt-6 uppercase">
          Framgånsrecept
        </h3>
        <h2 className="text-5xl text-center font-head leading-tight mt-6 mb-8 font-semibold capitalize">
          Hur vi jobbar
        </h2>
        <div className="w-[180px] h-[1px] bg-lightolive" />
        <div className="relative flex w-full justify-center gap-20 items-center mt-24">
          <div className="absolute -top-8 right-8 md:static md:w-full w-[150px] md:max-w-[400px]">
            <Image src={skanditechTeam} className="rounded-full" />
          </div>
          <div className="mt-8 md:mt-0">
            <Image src={quotes} width={100} />
            <p className="text-3xl text-stoneolive mt-6">
              Vi skräddarsyr hemsidor, <br /> appar och interna system <br />{" "}
              med fokus på era specifika <br /> mål och utmaningar
            </p>
            <p className="italic mt-4 text-lightolive">
              Filip Lapveteläinen, VD och grundare
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:grid-rows-2 gap-12 z-10 md:mt-36 mt-24 md:mx-56 mx-4 mb-16">
        <div className="flex flex-col px-6 py-4 border-2 border-stoneolive rounded-lg hover:bg-[#b9ff82] hover:-translate-y-4 transition-transform">
          <div className="flex items-center gap-6 text-skandiblue font-semibold mb-3">
            <Image src={target} width={45} alt="cursor target icon" />
            <h3 className="text-3xl">Målinriktade lösningar</h3>
          </div>
          <div className="w-1/3 h-[1px] bg-stoneolive mb-4 mt-2"></div>
          <p className="text-stoneolive text-xl">
            Fler kunder, högre snittordrar, bättre kundförståelse eller lägre
            administrationskostnader? Med hjälp av en grundlig behovsanalys för
            att uppnå förståelse för er verksamhet, era utmaningar och er
            målgrupp så kommer vi kunna skräddarsy en lösning som är optimerad
            att uppnå ett förutbestämt mål.
          </p>
        </div>
        <div className="flex flex-col px-6 py-4 border-2 border-stoneolive rounded-lg hover:bg-[#b9ff82] hover:-translate-y-4 transition-transform">
          <div className="flex items-center gap-6 text-skandiblue font-semibold mb-3">
            <Image src={chart} width={45} alt="statistics chart icon" />
            <h3 className="text-3xl">Data-drivna optimeringar</h3>
          </div>
          <div className="w-1/3 h-[1px] bg-stoneolive mb-4 mt-2"></div>
          <p className="text-stoneolive text-xl">
            Målgruppens beteende på er hemsida eller app ger oss god grund för
            att göra data-drivna optimeringar av er digitala lösning. Allt för
            att säkerställa att vi är påväg mot det uppsatta målet.
          </p>
        </div>
        <div className="flex flex-col px-6 py-4 border-2 border-stoneolive rounded-lg hover:bg-[#b9ff82] hover:-translate-y-4 transition-transform">
          <div className="flex items-center gap-6 text-skandiblue font-semibold mb-3">
            <Image src={heart} width={45} alt="heart in circle icon" />
            <h3 className="text-3xl">Starkare varumärke</h3>
          </div>
          <div className="w-1/3 h-[1px] bg-stoneolive mb-4 mt-2"></div>
          <p className="text-stoneolive text-xl">
            Vi säkerställer att er hemsida eller app förmedlar de känslor och
            budskap som ligger till grund för ert varumärke. I och med att vi
            skriver varje rad av kod så har vi full kontroll över användarnas
            upplevelse. Har ni inget tydligt varumärke än så hjälper vi er gärna
            med detta.
          </p>
        </div>
        <div className="flex flex-col px-6 py-4 border-2 border-stoneolive rounded-lg hover:bg-[#b9ff82] hover:-translate-y-4 transition-transform">
          <div className="flex items-center gap-6 text-skandiblue font-semibold mb-3">
            <Image src={hands} width={45} alt="hands shaking icon" />
            <h3 className="text-3xl">Långsiktiga relationer</h3>
          </div>
          <div className="w-1/3 h-[1px] bg-stoneolive mb-4 mt-2"></div>
          <p className="text-stoneolive text-xl">
            Direkt från start kommer ni märka av vårt personliga engagemang.
            Detta engagemang försvinner ingenstans när er lösning levererats,
            utan vi kommer göra kontinuerliga uppföljningar för att utvärdera er
            lösnings prestation. Sen att vi har det otroligt trevligt under våra
            samtal är bara en bonus!
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center ">
        <div className="w-[250px] h-[1px] bg-lightolive" />
      </div>
      {/*TESTIMONIALS SECTION*/}
      <div className="md:px-52 pb-24 mt-24 md:mt-36 bg-eggshell">
        <div className="md:text-center flex flex-col items-center">
          <h3 className="font-head font-medium text-xl text-lightolive uppercase">
            Referenser
          </h3>
          <h2 className="text-5xl mx-8 text-skandiblue text-center font-head leading-tight mt-6 mb-8 font-semibold capitalize">
            Tidigare projekt
          </h2>
        </div>
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
