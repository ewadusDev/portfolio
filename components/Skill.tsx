import { skills } from "@/data/const";
import SkillCarousel from "./SkillCarousel";

const Skill = () => {
  return (
    <section className="bg-black text-white" id="skills">
      <div className="skill-container">
        {/* Left */}
        <div className="skill-left-section">
          <h2 className="skill-h2">
            My <br /> Skills
          </h2>
        </div>
        {/* Right */}
        <div className="skill-right-section">
          <div className="skill-slider" />
          {skills.map((skill, index) => {
            return (
              <div className="flex h-[325px] justify-between" key={index}>
                <SkillCarousel icons={skill.icons} />
                <div className="skill-slider-skills-container">
                  <div className="basis-1/3 lg:basis-1/6 lg:py-8">
                    <p className="skill-number">0{index + 1}</p>
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
