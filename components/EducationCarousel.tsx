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
                    <p className="edu-number">
                      {index > 8 ? index + 1 : `0${index + 1}`}
                    </p>
                  </div>
                  <div className="basis-3/4">
                    <h2 className="edu-name">{edu.name}</h2>
                    <div className="edu-major-container">
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
                <div className="edu-logo-container">
                  <div className="edu-img-container">
                    <Image
                      width={500}
                      height={500}
                      alt={edu.name}
                      src={edu.logo}
                    />
                  </div>
                  <ul className="edu-list-container">
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
