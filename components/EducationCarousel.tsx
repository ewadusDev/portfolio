import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Education } from "@/types/data";
import Image from "next/image";

const EducationCarousel = ({ data }: { data: Education[] }) => {
  return (
    <Carousel
      className="w-full h-full flex flex-col"
      plugins={[
        Autoplay({
          delay: 9000,
        }),
      ]}
    >
      <div className="flex justify-between">
        <div className="w-full items-center justify-center flex ">
          <CarouselPrevious className="" />
        </div>
        <div className="w-full items-center justify-center flex ">
          <CarouselNext />
        </div>
      </div>

      <CarouselContent className="basis-2/3">
        {data.map((edu, index) => {
          return (
            <CarouselItem key={index} className="w-1">
              <div className="flex flex-col px-3">
                {/* title */}
                <div className="flex flex-row  py-7 ">
                  <div className="flex items-start justify-center basis-1/4 ">
                    <p className="rounded-4xl border border-[#0AB274] lg:text-2xl w-14 text-center">
                      {index > 8 ? index + 1 : `0${index + 1}`}
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
                  <div className=" basis-1/4 h-56 object-contain">
                    <Image
                      width={500}
                      height={500}
                      alt={edu.name}
                      src={edu.logo}
                    />
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
  );
};
export default EducationCarousel;
