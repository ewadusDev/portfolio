import Link from "next/link";
import { RxDownload } from "react-icons/rx";

const Header = () => {
  return (
    <header className="h-screen">
      <div className="flex h-full flex-col lg:flex-row lg:px-0">
        {/* Left */}
        <div className="header-left-section">
          <div className="flex flex-col gap-2 lg:gap-3">
            <h1 className="header-h1">
              Ruk
              <br /> Keosung
            </h1>
            <h2 className="header-h2">FullStack QA Engineer </h2>
          </div>
          <h3 className="text-xl md:text-3xl">
            Passionate about software testing, I enjoy building and creating
            interactive experiences.
          </h3>
          <div className="flex items-center gap-3 sm:text-2xl">
            <Link
              href={"https://ruknakub.com/files/QA_Ruk_Keosung_Resume.pdf"}
              target="_blank"
              className="header-btn-green-link"
            >
              <RxDownload />
              Resume
            </Link>
            <Link href="#showcase" className="header-btn-white">
              Showcase
            </Link>
          </div>
        </div>
        {/* Right */}
        <div className="header-bg-profile" />
      </div>
    </header>
  );
};
export default Header;
