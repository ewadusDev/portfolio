"use client";
import Image from "next/image";
import Link from "next/link";

const Showcase = () => {
  return (
    <section className="h-screen bg-gray-300" id="showcase">
      <div className="flex flex-col h-full lg:flex-row">
        <div className="flex flex-col basis-2/3 lg:basis-1/2 border-b lg:border-r lg:border-b-0  border-gray-600">
          <div className="h-full border-b relative">
            <Link href={"/todolist"}>
              <Image
                src={"/showcase/todolist/todolist_d.webp"}
                fill
                objectFit="cover"
                objectPosition="top"
                alt="todolist"
                className=" object-cover hover:scale-105 transition-transform duration-300 "
              />
            </Link>
          </div>
          <div className="h-full relative">
            <Link href={"/mappy"}>
              <Image
                src={"/showcase/mappy/mappy_e.webp"}
                fill
                objectFit="cover"
                objectPosition="top"
                alt="todolist"
                className=" object-cover hover:scale-105 transition-transform duration-300 "
              />
            </Link>
          </div>
        </div>
        <div className="basis-1/3 lg:basis-1/2">
          <Link href="/todolist">todolist</Link>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
