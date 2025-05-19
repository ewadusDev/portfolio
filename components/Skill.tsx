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
      <div className="flex flex-col lg:flex-row">
        {/* Left */}
        <div className="border-b border-gray-300 lg:basis-2/5 lg:h-96 lg:border-r">
          <h2 className="text-7xl px-6 py-8 lg:text-9xl h-full lg:p-14">
            My <br /> Skills
          </h2>
        </div>
        {/* Right */}
        <div className="lg:basis-4/5">
          <div className="hidden lg:block w-full h-96 border-b border-gray-300" />
          {skills.map((skill, index) => {
            return (
              <div className="flex justify-between" key={index}>
                <div className="basis-1/4 w-full bg-gray-300 ">
                  {/* Image */}
                </div>
                <div className="flex basis-3/4 py-10 sm:py-16 border-b border-gray-200 ">
                  <div className="basis-1/3 lg:basis-1/6 lg:py-8">
                    <p className="rounded-4xl border border-[#0AB274] w-fit mx-auto py-1 px-4 lg:text-2xl ">
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
