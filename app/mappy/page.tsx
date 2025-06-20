import Navbar from "@/components/Navbar";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { mappyData, mappyTechStack, mappySourceCode } from "@/data/const";
import Image from "next/image";
import Link from "next/link";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";
import "../../components/ui/css/embla.css";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

const IMoviePage = () => {
  return (
    <>
      <Navbar />
      <main className="container-app">
        <div className="flex h-full w-full flex-col bg-black">
          <div className="flex h-full w-full">
            <EmblaCarousel options={OPTIONS} images={mappyData} />
          </div>
          <div className="h-full w-full flex-col border-t">
            <div className="flex flex-col 2xl:h-5/6 2xl:flex-row">
              <div className="flex h-full basis-2/3 bg-white">
                <div className="title-apps">Tech Stack</div>
                <div className="flex w-full flex-col 2xl:flex-row">
                  {mappyTechStack.map((item, index) => {
                    return (
                      <div className="flex w-full" key={index}>
                        <p
                          className="itemlist-apps"
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
                <div className="title-apps">Source Code</div>

                <div className="flex h-full w-full bg-white">
                  {mappySourceCode.map((item, index) => {
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
            <div className="nav-apps">
              <Link href={"/imovie"} className="nav-apps-button">
                <RxArrowLeft size={28} /> iMovie
              </Link>
              <Link href={"/todolist"} className="nav-apps-button">
                To-do List
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
