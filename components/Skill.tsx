const skills = [
  {
    icons: [],
    name: "E2E Testing",
    description: "Playwright, Cypress, Robot Framework, Puppeteer",
  },
  {
    icons: [],
    name: "Performance Testing",
    description: "K6 Grafana",
  },
  {
    icons: [],
    name: "DevOps",
    description: "Docker, Jenkins, Kubernetes",
  },
  {
    icons: [],
    name: "Programing Language",
    description: "Typescript, Javascript, Python",
  },
  {
    icons: [],
    name: "Frontend",
    description: "Nextjs, React, HTML, CSS, Tailwindcss",
  },
  {
    icons: [],
    name: "Backend",
    description: "NodeJS",
  },
  {
    icons: [],
    name: "Database",
    description: "MongoDB, Postgres, Minio, Firebase",
  },
  {
    icons: [],
    name: "Other",
    description: "Linux, Git, Figma, CGP, Digital Ocean, AWS",
  },
];

const Skill = () => {
  return (
    <section className="bg-black text-white">
      <div className="flex flex-col">
        {/* Left */}
        <div className="border-b border-gray-300">
          <h2 className="text-7xl px-6 py-8 font-normal">
            My <br /> Skills
          </h2>
        </div>
        {/* Right */}
        <div>
          {skills.map((skill, index) => {
            return (
              <div className="flex justify-between" key={index}>
                <div className="bg-gray-300 basis-1/4 w-full">
                  {/* Image */}
                </div>
                <div className="flex basis-3/4 py-10  sm:py-16 border-b border-gray-200 ">
                  <div className="basis-1/3 ">
                    <p className="rounded-4xl border border-[#0AB274]  w-fit mx-auto py-1 px-4">
                      0{index + 1}
                    </p>
                  </div>
                  <div className="basis-2/3">
                    <h6 className="text-3xl">{skill.name}</h6>
                    <p className="mt-4">{skill.description}</p>
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
