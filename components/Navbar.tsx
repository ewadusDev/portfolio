"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const menuList = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Showcase", href: "#showcase" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = ({ className }: { className?: string }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  console.log(pathname);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -70% 0px", // trigger when 30% of section is visible
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    // Observe all sections with IDs
    menuList.forEach((item) => {
      const section = document.getElementById(item.href.replace("#", ""));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    setIsToggled(false); // close mobile menu on click
  };

  return (
    <nav
      className={`flex w-full px-2 lg:px-6 h-16 items-center border-b ${
        className ? className : ""
      }  bg-white z-50`}
    >
      <div className="flex justify-between w-full h-full items-center">
        <Link className="text-2xl font-extrabold hover:cursor-pointer" href="/">
          RK.
        </Link>

        {pathname === "/" && (
          <>
            {/* Desktop Menu */}
            <ul className="gap-7 hidden sm:flex">
              {menuList.map((item, index) => {
                const isActive = activeSection === item.href;
                return (
                  <li
                    key={index}
                    className={`hover:underline transition ${
                      isActive ? "text-[#0AB274] font-semibold" : ""
                    }`}
                  >
                    <Link href={item.href} scroll={true}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Toggle */}
            <div className="sm:hidden">
              <Button
                variant={"outline"}
                size={"icon"}
                onClick={() => setIsToggled(!isToggled)}
              >
                <RxHamburgerMenu />
              </Button>
            </div>

            {/* Mobile Menu */}
            {isToggled && (
              <div className="absolute w-full h-full top-0 left-0 bg-white z-50">
                <div className="px-6 h-16 flex items-center justify-end">
                  <Button
                    variant={"outline"}
                    size={"icon"}
                    onClick={() => setIsToggled(false)}
                  >
                    <RxCross1 />
                  </Button>
                </div>
                <ul className="flex flex-col justify-start items-center gap-5 pt-7 bg-white z-50 h-screen">
                  {menuList.map((item, index) => {
                    const isActive = activeSection === item.href;
                    return (
                      <li
                        key={index}
                        className={`text-3xl ${
                          isActive ? "text-blue-600 font-bold underline" : ""
                        }`}
                        onClick={handleClick}
                      >
                        <Link href={item.href} scroll={true}>
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
