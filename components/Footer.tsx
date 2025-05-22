const Footer = () => {
  return (
    <footer className=" bg-[#0AB274] text-white" id="contact">
      <div className="flex flex-col lg:flex-row ">
        <div className="border-b border-white lg:border-b-0 lg:border-r lg:px-8 py-4 ">
          <p className="text-9xl font-bold py-4 px-4">RK.</p>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row px-4 py-5 gap-2 lg:gap-10 w-full h-full lg:justify-center lg:items-center">
            <div>
              <p className="text-xl">Contact</p>
            </div>
            <div className="flex flex-col gap-1">
              <p>rtkeosung@gmail.com</p>
              <p>+66 883339573</p>
              <p>LinkedIn</p>
              <p>Download Resume</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
