import { RxDownload } from "react-icons/rx";

const Header = () => {
  return (
    // h-[calc(100vh+180px)]
    <header className="lg:h-[calc(100vh-64px)] ">
      <div className="h-full flex flex-col lg:px-0 lg:flex-row ">
        {/* Left */}
        <div className="flex flex-col justify-between gap-20 lg:gap-28 pt-5 pb-20 lg:pb-28 lg:basis-2/3 lg:p-12 px-2 sm:px-4 ">
          <div className="flex flex-col gap-6">
            <h1 className="font-extrabold text-7xl  sm:text-[196px] ">
              Ruk
              <br /> Keosung
            </h1>
            <h2 className="text-3xl sm:text-7xl font-bold mt-4">
              QA FullStack Engineer{" "}
            </h2>
          </div>
          <h3 className="text-xl lg:text-4xl font-normal">
            Passionate about software testing, I enjoy building and creating
            interactive experiences.
          </h3>
          <div className="flex items-center gap-2.5 sm:text-2xl">
            <button className="px-16 py-5 flex items-center text-white font-medium bg-[#0AB274] gap-2">
              <RxDownload />
              Resume
            </button>
            <button className="px-16 py-5 border flex items-center">
              Showcase
            </button>
          </div>
        </div>
        {/* Right */}
        <div className="w-full h-[calc(100vh/2)] sm:h-screen lg:h-full lg:basis-1/3 bg-gray-300"></div>
      </div>
    </header>
  );
};
export default Header;
