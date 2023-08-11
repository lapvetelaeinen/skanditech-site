import Image from "next/image";
import drinkbolaget from "../../public/drinkbolaget.jpg";
import Link from "next/link";

export default function Case({ businessCase }) {
  return (
    <div className="relative overflow-clip border-2 mx-4 md:mx-0 border-lightolive md:px-24 md:py-20 rounded-xl flex md:flex-row flex-col-reverse justify-between items-center md:gap-28 md:pt-20">
      <div className="flex-1">
        <h4 className="font-head text-skandiblue font-bold md:text-5xl text-4xl md:mt-0 mt-6 md:px-0 px-4">
          {businessCase.title}
        </h4>
        <p className="italic text-lightolive md:mt-6 mt-2 md:px-0 px-4">
          {businessCase.name}
        </p>
        <div className="w-[140px] h-[1px] bg-lightolive opacity-50 mt-3 md:mx-0 mx-4" />
        <div className="relative flex flex-col">
          <p className="absolute opacity-25 md:opacity-100 md:static md:block md:text-xl text-lg mt-2 leading-none md:leading-normal md:mt-4 text-stoneolive md:px-0 px-4">
            {businessCase.desc}
          </p>
          <div className="md:hidden absolute flex-1 block w-full h-[80px] bg-gradient-to-t from-eggshell via-eggshell to-transparent"></div>
        </div>
        <div className="flex mt-2 md:mt-0 pt-6 md:pt-0">
          <Link href={"/kundcase/rouge"} className="z-10">
            <button className="flex-1 md:flex-initial md:mx-0 mx-4 my-4 px-12 py-4 bg-skandiblue text-neutral-100 rounded-lg text-xl hover:scale-105 duration-100 text-center md:mt-12">
              Läs mer om projektet
            </button>
          </Link>
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
  );
}
