import { skills } from "@/data/const";
import SkillCarousel from "./SkillCarousel";

const Skill = () => {
  return (
    <section className="bg-black text-white" id="skills">
      <div className="flex flex-col lg:flex-row">
        {/* Left */}
        <div className="border-b border-gray-300 lg:h-96 lg:basis-2/5 lg:border-r">
          <h2 className="h-full px-6 py-8 text-7xl lg:p-14 lg:text-9xl">
            My <br /> Skills
          </h2>
        </div>
        {/* Right */}
        <div className="h-screen overflow-auto scroll-smooth lg:basis-4/5">
          <div className="hidden h-96 w-full border-b border-gray-300 lg:block" />
          {skills.map((skill, index) => {
            return (
              <div className="flex h-[325px] justify-between" key={index}>
                <SkillCarousel icons={skill.icons} />
                <div className="flex basis-3/4 border-b border-gray-200 py-10 sm:py-16">
                  <div className="basis-1/3 lg:basis-1/6 lg:py-8">
                    <p className="mx-auto w-fit rounded-4xl border border-[#0AB274] px-4 py-1 lg:text-2xl">
                      0{index + 1}
                    </p>
                  </div>
                  <div className="basis-2/3 lg:basis-5/6 lg:py-8">
                    <h6 className="text-3xl lg:text-6xl">{skill.name}</h6>
                    <p className="mt-4 lg:text-xl">{skill.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Skill;
