const About = () => {
  return (
    <section className="h-[calc(100vh)] border">
      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* left */}
        <div className="basis-2/4 py-14">
          <p className="text-center text-6xl xl:text-9xl ">I' AM</p>
          <p className="text-justify px-3 mt-4 text-xl xl:text-3xl">
            a Senior QA Automation Engineer with strong expertise in building
            and maintaining scalable test automation frameworks to ensure
            software quality across web and backend systems. With a
            detail-oriented and analytical mindset, I specialize in tools like
            Playwright and Cypress, and I’m passionate about improving test
            coverage and CI/CD efficiency. In addition to my QA focus, I also
            have junior-level experience in full-stack development using
            technologies like Next.js and Node.js, as well as DevOps practices
            involving Docker, Kubernetes, and Jenkins—allowing me to contribute
            effectively across the development lifecycle.
          </p>
        </div>
        {/* right */}
        <div className="basis-2/4 bg-gray-300"></div>
      </div>
    </section>
  );
};
export default About;
