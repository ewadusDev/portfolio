"use client";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Button } from "./ui/button";

const menuList = [
  { name: "About", href: "#" },
  { name: "Skills", href: "#" },
  { name: "Showcase", href: "#" },
  { name: "Education", href: "#" },
  { name: "Contact", href: "#" },
];
const Navbar = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  return (
    <nav className="flex w-full px-2 lg:px-6 h-16 items-center border-b">
      <div className="flex justify-between w-full h-full items-center">
        <h6 className="text-2xl font-extrabold">RK.</h6>
        <ul className={`${isToggled ? "flex" : "hidden"} gap-7 hidden sm:flex`}>
          {menuList.map((item, index) => {
            return (
              <li key={index} className="hover:underline">
                <Link href={item.href}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
        {/* mobile */}
        <div className="sm:hidden">
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => setIsToggled(!isToggled)}
          >
            <RxHamburgerMenu />
          </Button>
        </div>

        {isToggled && (
          <div className="absolute w-full h-full top-0 left-0 bg-white">
            <div className="px-6 h-16 flex  items-center justify-end">
              <Button
                variant={"outline"}
                size={"icon"}
                onClick={() => setIsToggled(!isToggled)}
              >
                <RxCross1 />
              </Button>
            </div>
            <ul className="flex flex-col justify-start items-center gap-5 pt-7">
              {menuList.map((item, index) => {
                return (
                  <li
                    className="text-3xl"
                    key={index}
                    onClick={() => setIsToggled(!isToggled)}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
