import Link from "next/link";
import Case from "./Case";

export default function CaseSection() {
  return (
    <div className="md:px-52 pb-16 pt-24 md:pt-36 bg-eggshell">
      <div className="md:text-center flex flex-col items-center">
        <h3 className="font-head font-medium text-xl text-lightolive uppercase">
          Referenser
        </h3>
        <h2 className="text-4xl md:text-6xl mx-8 pb-4 md:pb-12 text-skandiblue text-center font-head leading-tight mt-6 mb-8 font-semibold capitalize">
          Tidigare projekt
        </h2>
      </div>
      <Case
        businessCase={{
          name: "Rouge nattklubb",
          title: "Biljettsystem och hemsida",
          desc: "Skräddarsytt biljettsystem för att minska på rörliga kostnader och höja kundlojaliteten.",
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
  );
}
