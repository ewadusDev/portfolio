"use client";
import { educations } from "@/data/const";

import EducationCarousel from "./EducationCarousel";

const Education = () => {
  return (
    <section className="w-full" id="education">
      <div className="edu-container">
        <div className="border-b lg:border-b-0">
          <h3 className="edu-h3">Education</h3>
        </div>
        {/* slide */}
        <EducationCarousel data={educations} />
      </div>
    </section>
  );
};
export default Education;
