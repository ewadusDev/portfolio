import Navbar from "@/components/Navbar";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { iMovieData, iMovieSourceCode, iMovieTechStack } from "@/data/const";
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
        <div className="flex h-full w-full flex-col bg-black">
          <div className="flex h-full w-full">
            <EmblaCarousel options={OPTIONS} images={iMovieData} />
          </div>
          <div className="h-full w-full flex-col border-t">
            <div className="flex flex-col 2xl:h-5/6 2xl:flex-row">
              <div className="flex h-full basis-2/3 bg-white">
                <div className="w-28 bg-black px-2 py-3 text-3xl font-bold text-white 2xl:w-52 2xl:text-4xl">
                  Tech Stack
                </div>
                <div className="flex w-full flex-col 2xl:flex-row">
                  {iMovieTechStack.map((item, index) => {
                    return (
                      <div className="flex w-full" key={index}>
                        <p
                          className="w-fit bg-[#0AB274] text-center text-xl font-semibold text-white uppercase 2xl:py-7 2xl:text-2xl"
                          style={{
                            writingMode: "vertical-rl",
                            textOrientation: "upright",
                          }}
                        >
                          {item.name}
                        </p>
                        <ul className="w-full list-disc p-8 text-xl 2xl:text-2xl">
                          {item.tech.map((tech, index) => {
                            return <li key={index}>{tech}</li>;
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex h-full basis-1/3">
                <div className="w-28 bg-black px-2 py-3 text-3xl font-bold text-white 2xl:w-52 2xl:text-4xl">
                  Source Code
                </div>

                <div className="flex h-full w-full bg-white">
                  {iMovieSourceCode.map((item, index) => {
                    return (
                      <div
                        className="flex h-full w-full flex-col items-center justify-center"
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
                        <p className="capitalize">{item.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex h-32 bg-white text-[#0AB274] hover:cursor-pointer 2xl:h-1/6">
              <Link
                href={"/todolist"}
                className="flex h-full w-full items-center justify-center gap-2 border text-2xl hover:bg-gray-300"
              >
                <RxArrowLeft size={28} /> To-do List
              </Link>
              <Link
                href={"/mappy"}
                className="flex h-full w-full items-center justify-center gap-2 border text-2xl hover:bg-gray-300"
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
