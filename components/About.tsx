const About = () => {
  return (
    <section
      className="h-[calc(100vh)] border-t bg-black text-white"
      id="about"
    >
      <div className="flex h-full w-full flex-col lg:flex-row">
        {/* left */}
        <div className="basis-2/4 py-14">
          <p className="px-6 text-7xl lg:p-14 xl:text-9xl">I&apos; AM</p>
          <p className="mt-4 px-3 text-justify text-xl 2xl:text-3xl">
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
