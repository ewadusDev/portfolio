"use client";
import Image from "next/image";
import Link from "next/link";

const Showcase = () => {
  return (
    <section className="h-screen bg-gray-300" id="showcase">
      <div className="flex flex-col h-full lg:flex-row">
        <div className="flex flex-col basis-2/3 lg:basis-1/2 border-b lg:border-r lg:border-b-0  border-gray-600">
          <div className="h-full border-b relative group overflow-hidden">
            <Link href="/todolist">
              <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/showcase/todolist/todolist_d_black.jpg"
                  fill
                  objectFit="cover"
                  objectPosition="top"
                  alt="todolist default"
                  className="object-cover transition-opacity duration-300 opacity-100 "
                />
                <Image
                  src="/showcase/todolist/todolist_d.webp"
                  fill
                  objectFit="cover"
                  objectPosition="top"
                  alt="todolist hover"
                  className="object-cover transition-opacity duration-500 opacity-0 hover:scale-105 group-hover:opacity-100"
                />
              </div>
            </Link>
          </div>

          <div className="h-full relative group overflow-hidden">
            <Link href="/imovie">
              <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/showcase/imovie/imovie_f_black.jpg"
                  fill
                  objectFit="cover"
                  objectPosition="52% 50%"
                  alt="todolist"
                  className="object-cover transition-opacity duration-300 opacity-100 "
                />
                <Image
                  src={"/showcase/imovie/imovie_f.webp"}
                  fill
                  objectFit="cover"
                  objectPosition="52% 50%"
                  alt="todolist hover"
                  className="object-cover transition-opacity duration-500 opacity-0 hover:scale-105 group-hover:opacity-100"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="basis-1/3 lg:basis-1/2 relative group overflow-hidden">
          <Link href="/mappy">
            <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
              {/* Default image */}
              <Image
                src="/showcase/mappy/mappy_e_black.jpg"
                fill
                objectFit="cover"
                objectPosition="52% 50%"
                alt="mappy default"
                className="object-cover transition-opacity duration-300 opacity-100 "
              />

              {/* Hover image */}
              <Image
                src="/showcase/mappy/mappy_e.webp"
                fill
                objectFit="cover"
                objectPosition="52% 50%"
                alt="mappy hover"
                className="object-cover transition-opacity duration-500 opacity-0 hover:scale-105 group-hover:opacity-100"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
