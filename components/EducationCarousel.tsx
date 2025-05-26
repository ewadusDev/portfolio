import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/edu-carousel";
import { Education } from "@/types/data";
import Image from "next/image";

const EducationCarousel = ({ data }: { data: Education[] }) => {
  return (
    <Carousel
      className="flex h-full w-full flex-col xl:h-screen"
      plugins={[
        Autoplay({
          delay: 9000,
        }),
      ]}
    >
      <div className="flex basis-1/3 justify-between">
        <div className="flex w-full items-center justify-center">
          <CarouselPrevious className="" />
        </div>
        <div className="flex w-full items-center justify-center">
          <CarouselNext />
        </div>
      </div>

      <CarouselContent className="basis-2/3">
        {data.map((edu, index) => {
          return (
            <CarouselItem key={index} className="w-1">
              <div className="flex flex-col px-3">
                {/* title */}
                <div className="flex flex-row py-7">
                  <div className="flex basis-1/4 items-start justify-center">
                    <p className="w-14 rounded-4xl border border-[#0AB274] text-center lg:text-2xl">
                      {index > 8 ? index + 1 : `0${index + 1}`}
                    </p>
                  </div>
                  <div className="basis-3/4">
                    <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl">
                      {edu.name}
                    </h2>
                    <div className="mt-2 flex justify-between text-xl font-medium lg:text-3xl">
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
                <div className="flex items-center 2xl:h-[600px]">
                  <div className="flex h-64 basis-1/4 items-center justify-center object-contain">
                    <Image
                      width={500}
                      height={500}
                      objectFit=""
                      alt={edu.name}
                      src={edu.logo}
                    />
                  </div>
                  <ul className="basis-3/4 list-disc px-7 text-justify text-sm text-gray-400 sm:text-lg xl:text-2xl 2xl:px-10 2xl:text-4xl">
                    {edu.description
                      .split(/\n|<br\s*\/?>/i)
                      .filter((line) => line.trim() !== "")
                      .map((line, index) => (
                        <li key={index}>{line.trim()}</li>
                      ))}
                  </ul>
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
