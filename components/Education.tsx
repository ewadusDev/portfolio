"use client";
import { educations } from "@/data/const";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Education = () => {
  return (
    <section className="w-full md:h-screen ">
      <div className="flex flex-col lg:flex-row w-full h-full">
        <div className="border">
          <h3 className="text-7xl px-6 py-8 sm:text-8xl xl:text-9xl h-full lg:p-14">
            Education
          </h3>
        </div>
        {/* slide */}
        <Carousel
          className="w-full h-full flex flex-col"
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <div className="flex justify-between">
            <div className="w-full border border-gray-400 items-center justify-center flex py-8 lg:py-18">
              <CarouselPrevious className="" />
            </div>
            <div className="w-full border border-gray-400 items-center justify-center flex py-8 lg:py-18">
              <CarouselNext />
            </div>
          </div>

          <CarouselContent className="basis-2/3">
            {educations.map((edu, index) => {
              return (
                <CarouselItem key={index} className="w-1">
                  <div className="flex flex-col">
                    {/* title */}
                    <div className="flex flex-row  py-7 ">
                      <div className="flex items-start justify-center basis-1/4 ">
                        <p className="rounded-4xl border border-[#0AB274] lg:text-2xl ">
                          0{index + 1}
                        </p>
                      </div>
                      <div className=" basis-3/4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl  xl:text-6xl  font-semibold">
                          {edu.name}
                        </h2>
                        <div className="flex text-xl lg:text-3xl font-medium justify-between mt-2">
                          <p>{edu.major}</p>
                          <p>{edu.location}</p>
                        </div>
                        <div className="flex justify-between text-gray-400">
                          <p>{edu.role}</p>
                          <p>{edu.date}</p>
                        </div>
                      </div>
                    </div>
                    {/* logo */}
                    <div className="flex mt-4 items-center">
                      <div className="bg-gray-500 basis-1/4 h-56">
                        {/* <Image/>  */}
                      </div>
                      <p className="text-justify basis-3/4 px-5 text-sm sm:text-lg xl:text-3xl text-gray-400">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
export default Education;
