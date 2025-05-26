"use client";
import { educations } from "@/data/const";

import EducationCarousel from "./EducationCarousel";

const Education = () => {
  return (
    <section className="w-full" id="education">
      <div className="flex h-full w-full flex-col lg:flex-row">
        <div className="border-b lg:border-b-0">
          <h3 className="h-full border-r px-6 py-8 text-7xl sm:text-8xl lg:p-14 xl:text-9xl">
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
