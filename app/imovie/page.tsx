import Navbar from "@/components/Navbar";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { iMovieData, iMovieTechStack, iMovieSourceCode } from "@/data/const";
import Image from "next/image";
import Link from "next/link";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";
import "../../components/ui/css/embla.css";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const IMoviePage = () => {
  return (
    <>
      <Navbar />
      <main className="h-[calc(100vh-64px)]">
        <div className="w-full h-full bg-black flex flex-col">
          <div className="flex  w-full h-full ">
            <EmblaCarousel
              slides={SLIDES}
              options={OPTIONS}
              images={iMovieData}
            />
          </div>

          <div className="border w-full h-full flex-col">
            <div className="h-5/6 flex flex-row">
              <div className="h-full basis-2/3 flex bg-white">
                <div className="w-28  text-white bg-black font-bold text-3xl ">
                  Tech Stack
                </div>
                <div className="flex w-full">
                  {iMovieTechStack.map((item, index) => {
                    return (
                      <div className="flex w-full" key={index}>
                        <p
                          className="border w-fit bg-[#0AB274] text-white font-semibold text-xl uppercase text-center"
                          style={{
                            writingMode: "vertical-rl",
                            textOrientation: "upright",
                          }}
                        >
                          {item.name}
                        </p>
                        <ul className="list-disc  w-full p-8 text-xl">
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
                <div className="w-28  text-white bg-black font-bold text-3xl ">
                  Source Code
                </div>

                <div className="flex bg-white w-full h-full">
                  {iMovieSourceCode.map((item, index) => {
                    return (
                      <div
                        className="flex items-center justify-center w-full h-full flex-col"
                        key={index}
                      >
                        <Link href={item.href} target="_blank">
                          <Image
                            src={item.icon}
                            width={100}
                            height={100}
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
            <div className="h-1/6 bg-white flex hover:cursor-pointer text-[#0AB274]">
              <Link
                href={"/imovie"}
                className="w-full h-full flex justify-center items-center text-2xl gap-2 border hover:bg-gray-300"
              >
                <RxArrowLeft size={28} /> To-do List
              </Link>
              <Link
                href={"/todolist"}
                className="w-full h-full flex justify-center items-center text-2xl gap-2 border hover:bg-gray-300"
              >
                Mappy
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
