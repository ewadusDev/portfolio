"use client";
import { educations } from "@/data/const";

import Image from "next/image";
import CustomCarousel from "./CustomCarousel";

const Education = () => {
  return (
    <section className="w-full md:h-screen ">
      <div className="flex flex-col lg:flex-row w-full h-full">
        <div className="">
          <h3 className="text-7xl px-6 py-8 sm:text-8xl xl:text-9xl h-full lg:p-14 border-r">
            Education
          </h3>
        </div>
        {/* slide */}
        <CustomCarousel data={educations} />
      </div>
    </section>
  );
};
export default Education;
