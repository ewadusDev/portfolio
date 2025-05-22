"use client";
import { educations } from "@/data/const";

import EducationCarousel from "./EducationCarousel";

const Education = () => {
  return (
    <section className="w-full" id="education">
      <div className="flex flex-col lg:flex-row w-full h-full">
        <div className="border-b  lg:border-b-0">
          <h3 className="text-7xl px-6 py-8 sm:text-8xl xl:text-9xl h-full lg:p-14 border-r">
            Education
          </h3>
        </div>
        {/* slide */}
        <EducationCarousel data={educations} />
      </div>
    </section>
  );
};
export default Education;
