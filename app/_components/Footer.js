import Link from "next/link";

export default function Footer() {
  return (
    <div className="-z-50 md:fixed static flex  justify-center items-end bg-gradient-to-tl from-neutral-200 to-white bottom-0 w-full min-h-screen">
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
            className="flex md:flex-row flex-col gap-4 md:pt-0 pt-6 md:pb-0 pb-12 drop-shadow-card "
          >
            <input
              type="email"
              placeholder="Ange din email"
              className="text-xl text-center md:text-start py-4 px-4 rounded-md bg-white md:border-opacity-100 border-2"
            />
            <input
              type="submit"
              value={"Prenumerera på idéer"}
              className="text-xl py-4 px-8 bg-[#b9ff82] rounded-md cursor-pointer md:hover:translate-x-2 transition-all"
            />
          </form>
          <div className="w-[200px] md:hidden mx-auto mt-4 h-[1px] bg-lightolive"></div>
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
          {/* <Link href={"/kundcase"}>
            <p className="inline-block border-2 whitespace-nowrap text-stoneolive border-lightolive px-6 py-1 rounded-xl hover:bg-lightolive hover:text-neutral-100 transition-all">
              Kundcase
            </p>
          </Link> */}
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
  );
}
