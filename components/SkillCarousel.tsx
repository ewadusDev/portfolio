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
      className="basis-1/4 border-white md:border-l"
      plugins={[
        Autoplay({
          delay: 1000,
        }),
      ]}
    >
      <CarouselContent className="h-[325px]">
        {icons.map((icon, index) => {
          return (
            <CarouselItem
              className="flex h-full w-full items-center justify-center border-b"
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
