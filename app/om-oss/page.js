import Image from "next/image";
import fistRaised from "../../public/fist-raised.svg";
import gradientIcon from "../../public/gradient-icon.svg";
import skanditechTeam from "../../public/skanditech-team.jpg";
import skanditechIcon from "../../public/skanditech-icon.svg";
import skanditechMask from "../../public/skanditech-mask.svg";
import filip from "../../public/filip-lapvetelainen.jpg";
import happyEmployees from "../../public/happy-employees.webp";
import serviceStyle from "../../styles/Services.module.css";
import styles from "../../styles/Icon.module.css";

export default function About() {
  return (
    <main className="">
      <div className="relative flex flex-col w-full gap-4 overflow-clip md:pt-20 pt-12 pb-28 md:pb-36 bg-gradient-to-r from-eggshell via-eggshell to-transparent">
        <div className="absolute top-0 md:-top-8 md:-right-[200px] -z-10 w-full min-h-screen opacity-[50%] md:opacity-[50%]">
          <Image
            src={happyEmployees}
            fill
            className={`${serviceStyle.hero} object-cover object-top`}
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
              <h1 className="text-5xl md:text-6xl font-head mt-6 mb-8 font-semibold capitalize">
                En målinriktad och
                <br />
                förstående byrå
              </h1>
              <div className="w-[180px] h-[1px] bg-lightolive" />
              <p className="text-2xl text-stoneolive mt-8">
                Vi skräddarsyr hemsidor, <br /> appar och interna system <br />{" "}
                med fokus på era specifika <br /> mål och utmaningar
              </p>
            </div>
          </div>
          <div className="max-w-[400px] hidden md:block">
            <Image src={skanditechTeam} className="rounded-full" />
          </div>
        </div>
      </div>
      {/*VALUES START*/}

      <div className="relative flex flex-col md:flex-row md:justify-evenly justify-between gap-16 md:gap-0 items-center py-24 md:py-0 md:h-[300px] w-full bg-[#FF6262] overflow-clip">
        <div className="absolute w-[800px] h-[800px] bg-auroragreen rounded-full blur-[200px] opacity-25 right-0 bottom-0 translate-x-[200px] translate-y-[500px]"></div>
        <div className="absolute w-[800px] h-[800px] bg-aurorapurple rounded-full blur-[200px] opacity-25 left-0 top-0 -translate-x-[200px] -translate-y-[300px]"></div>
        <div className="flex flex-col items-center gap-6 text-[#e4e4e4] mb-3 z-10">
          <Image src={fistRaised} width={45} />
          <h3 className="text-3xl">Målinriktade lösningar</h3>
        </div>
        <div className="flex flex-col items-center gap-6 text-[#e4e4e4] mb-3 z-10">
          <Image src={fistRaised} width={45} />
          <h3 className="text-3xl">Målinriktade lösningar</h3>
        </div>
        <div className="flex flex-col items-center gap-6 text-[#e4e4e4] mb-3 z-10">
          <Image src={fistRaised} width={45} />
          <h3 className="text-3xl">Målinriktade lösningar</h3>
        </div>
      </div>
      {/*VISION STATEMENT START*/}
      <div className="relative w-full mb-24 -z-10 md:mx-0">
        <div className="absolute top-0 md:-top-[175px] -z-10 w-full min-h-screen opacity-50">
          <Image
            src={happyEmployees}
            className={`${styles.hero} object-cover object-top md:w-full md:scale-100`}
          />
        </div>
        <div className="flex md:flex-row flex-col px-6 md:pt-52 md:px-52 bg-gradient-to-r from-eggshell to-transparent">
          <div className="flex-1 md:pt-96">
            <div className="max-w-[400px] hidden md:block">
              <Image src={skanditechTeam} className="rounded-full" />
            </div>
            <h2 className="font-head text-xl font-medium uppercase text-lightolive mt-20">
              Vision
            </h2>
            <h1 className="md:text-6xl text-4xl font-head mt-6 mb-8 font-semibold capitalize">
              En tro på
              <br />
              möjligheter och
              <br />
              utveckling
            </h1>
            <div className="md:w-[480px] w-[200px] h-[1px] bg-lightolive" />
            <p className="text-2xl text-stoneolive mt-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corporis, debitis est nobis eaque earum eos porro totam ducimus
              id, illum culpa explicabo, harum ad architecto odit veritatis!
              Sapiente officiis architecto, nam, similique quaerat distinctio
              eius, dicta cum optio incidunt eum corrupti dignissimos. Provident
              adipisci nihil a id, magni aliquam quae. <br />
              <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officia earum nesciunt suscipit eveniet? Consectetur ullam
              expedita quos mollitia voluptates odio.
            </p>
          </div>
          <div className="flex-1 md:pl-52 mt-20">
            <h2 className="font-head text-xl font-medium uppercase text-lightolive">
              Vision
            </h2>
            <h1 className="md:text-6xl text-4xl font-head mt-6 mb-8 font-semibold capitalize">
              En tro på
              <br />
              möjligheter och
              <br />
              utveckling
            </h1>
            <div className="md:w-[480px] w-[200px] h-[1px] bg-lightolive" />
            <p className="text-2xl text-stoneolive mt-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corporis, debitis est nobis eaque earum eos porro totam ducimus
              id, illum culpa explicabo, harum ad architecto odit veritatis!
              Sapiente officiis architecto, nam, similique quaerat distinctio
              eius, dicta cum optio incidunt eum corrupti dignissimos. Provident
              adipisci nihil a id, magni aliquam quae. <br />
              <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officia earum nesciunt suscipit eveniet? Consectetur ullam
              expedita quos mollitia voluptates odio.
            </p>
          </div>
        </div>
      </div>
      {/*CONTACT SECTION*/}
      <div className="relative bg-gradient-to-tl from-neutral-200 to-[#f3f2f0] md:px-52 flex flex-col md:flex-row justify-center pt-24 md:pb-36 pb-16 md:gap-60 items-center overflow-clip">
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
