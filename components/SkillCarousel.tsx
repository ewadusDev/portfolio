"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/skill-carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const SkillCarousel = ({ icons }: { icons: string[] }) => {
  return (
    <Carousel
      className="basis-1/4 md:border-l border-white"
      plugins={[
        Autoplay({
          delay: 1000,
        }),
      ]}
    >
      <CarouselContent className="h-[325px]   ">
        {icons.map((icon, index) => {
          return (
            <CarouselItem
              className="w-full h-full flex justify-center items-center border-b"
              key={index}
            >
              <Image
                src={icon}
                unoptimized
                width={100}
                height={100}
                alt="css"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};
export default SkillCarousel;
