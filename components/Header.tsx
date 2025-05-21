import { RxDownload } from "react-icons/rx";

const Header = () => {
  return (
    <header className="h-screen">
      <div className="h-full flex flex-col lg:px-0 lg:flex-row ">
        {/* Left */}
        <div className="flex flex-col justify-between gap-16 lg:gap-10 xl:gap-16 pt-5 pb-20 lg:pb-28 lg:basis-2/3 lg:p-12 px-2 sm:px-4 ">
          <div className="flex flex-col gap-2  lg:gap-3 ">
            <h1 className="font-extrabold mt-[64px] text-7xl md:text-9xl xl:text-9xl  ">
              Ruk
              <br /> Keosung
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">
              FullStack QA Engineer{" "}
            </h2>
          </div>
          <h3 className="text-xl md:text-3xl ">
            Passionate about software testing, I enjoy building and creating
            interactive experiences.
          </h3>
          <div className="flex items-center gap-3 sm:text-2xl">
            <button className="px-10 py-5 lg:px-16 lg:py-5 flex items-center text-white font-medium bg-[#0AB274] gap-2">
              <RxDownload />
              Resume
            </button>
            <button className="px-10 py-5 lg:px-16 lg:py-5 border flex items-center">
              Showcase
            </button>
          </div>
        </div>
        {/* Right */}
        <div className="w-full h-[calc(100vh/2)] md:h-[calc(100vh)] lg:h-full] lg:basis-1/3 bg-gray-300" />
      </div>
    </header>
  );
};
export default Header;
