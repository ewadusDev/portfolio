import Navbar from "@/components/Navbar";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { todoData, todoTechStack, todoSourceCode } from "@/data/const";
import Image from "next/image";
import Link from "next/link";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";
import "../../components/ui/css/embla.css";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

const IMoviePage = () => {
  return (
    <>
      <Navbar />
      <main className="2xl:h-[calc(100vh-64px)]">
        <div className="w-full h-full bg-black flex flex-col">
          <div className="flex w-full h-full ">
            <EmblaCarousel options={OPTIONS} images={todoData} />
          </div>
          <div className="border-t w-full h-full flex-col">
            <div className="2xl:h-5/6 flex flex-col 2xl:flex-row ">
              <div className="h-full basis-2/3 flex bg-white">
                <div className="w-28 px-2 py-3 text-white bg-black font-bold text-3xl 2xl:w-52 2xl:text-4xl">
                  Tech Stack
                </div>
                <div className="flex flex-col 2xl:flex-row w-full">
                  {todoTechStack.map((item, index) => {
                    return (
                      <div className="flex w-full" key={index}>
                        <p
                          className=" w-fit bg-[#0AB274] text-white font-semibold text-xl uppercase text-center 2xl:py-7 2xl:text-2xl"
                          style={{
                            writingMode: "vertical-rl",
                            textOrientation: "upright",
                          }}
                        >
                          {item.name}
                        </p>
                        <ul className="list-disc  w-full p-8 text-xl 2xl:text-2xl">
                          {item.tech.map((tech, index) => {
                            return <li key={index}>{tech}</li>;
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="h-full basis-1/3 flex">
                <div className="w-28 px-2 py-3 text-white bg-black font-bold text-3xl 2xl:w-52 2xl:text-4xl">
                  Source Code
                </div>

                <div className="flex bg-white w-full h-full">
                  {todoSourceCode.map((item, index) => {
                    return (
                      <div
                        className="flex items-center justify-center w-full h-full flex-col"
                        key={index}
                      >
                        <Link href={item.href} target="_blank">
                          <Image
                            src={item.icon}
                            width={130}
                            height={130}
                            alt={item.name}
                          />
                        </Link>
                        <p className=" capitalize">{item.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="h-32 2xl:h-1/6 bg-white flex hover:cursor-pointer text-[#0AB274]">
              <Link
                href={"/mappy"}
                className="w-full h-full flex justify-center items-center text-2xl gap-2 border hover:bg-gray-300"
              >
                <RxArrowLeft size={28} /> Mappy
              </Link>
              <Link
                href={"/imovie"}
                className="w-full h-full flex justify-center items-center text-2xl gap-2 border hover:bg-gray-300"
              >
                iMovie
                <RxArrowRight size={28} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default IMoviePage;
