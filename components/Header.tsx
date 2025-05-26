import Link from "next/link";
import { RxDownload } from "react-icons/rx";

const Header = () => {
  return (
    <header className="h-screen">
      <div className="flex h-full flex-col lg:flex-row lg:px-0">
        {/* Left */}
        <div className="flex flex-col justify-between gap-16 px-2 pt-5 pb-20 sm:px-4 lg:basis-2/3 lg:gap-10 lg:p-12 lg:pb-28 xl:gap-16">
          <div className="flex flex-col gap-2 lg:gap-3">
            <h1 className="mt-[64px] text-7xl font-extrabold md:text-9xl xl:text-9xl">
              Ruk
              <br /> Keosung
            </h1>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              FullStack QA Engineer{" "}
            </h2>
          </div>
          <h3 className="text-xl md:text-3xl">
            Passionate about software testing, I enjoy building and creating
            interactive experiences.
          </h3>
          <div className="flex items-center gap-3 sm:text-2xl">
            <Link
              href={"https://ruknakub.com/files/QA_Ruk_Keosung_Resume.pdf"}
              target="_blank"
              className="flex items-center gap-2 bg-[#0AB274] px-10 py-5 font-medium text-white lg:px-16 lg:py-5"
            >
              <RxDownload />
              Resume
            </Link>
            <Link
              href="#showcase"
              className="flex items-center border px-10 py-5 lg:px-16 lg:py-5"
            >
              Showcase
            </Link>
          </div>
        </div>
        {/* Right */}
        <div className="lg:h-full] h-[calc(100vh/2)] w-full bg-gray-300 md:h-[calc(100vh)] lg:basis-1/3" />
      </div>
    </header>
  );
};
export default Header;
