const About = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-box">
        {/* left */}
        <div className="basis-2/4 py-14">
          <h3 className="about-head3">I&apos; AM</h3>
          <p className="about-para">
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
