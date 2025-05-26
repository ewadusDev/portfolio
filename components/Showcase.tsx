"use client";
import Image from "next/image";
import Link from "next/link";

const Showcase = () => {
  return (
    <section className="h-screen bg-gray-300" id="showcase">
      <div className="flex h-full flex-col lg:flex-row">
        <div className="flex basis-2/3 flex-col border-b border-gray-600 lg:basis-1/2 lg:border-r lg:border-b-0">
          <div className="group relative h-full overflow-hidden border-b">
            <Link href="/todolist">
              <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/showcase/todolist/todolist_d_black.jpg"
                  fill
                  objectFit="cover"
                  objectPosition="top"
                  alt="todolist default"
                  className="object-cover opacity-100 transition-opacity duration-300"
                />
                <Image
                  src="/showcase/todolist/todolist_d.webp"
                  fill
                  objectFit="cover"
                  objectPosition="top"
                  alt="todolist hover"
                  className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 hover:scale-105"
                />
              </div>
            </Link>
          </div>

          <div className="group relative h-full overflow-hidden">
            <Link href="/imovie">
              <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/showcase/imovie/imovie_f_black.jpg"
                  fill
                  objectFit="cover"
                  objectPosition="52% 50%"
                  alt="todolist"
                  className="object-cover opacity-100 transition-opacity duration-300"
                />
                <Image
                  src={"/showcase/imovie/imovie_f.webp"}
                  fill
                  objectFit="cover"
                  objectPosition="52% 50%"
                  alt="todolist hover"
                  className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 hover:scale-105"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="group relative basis-1/3 overflow-hidden lg:basis-1/2">
          <Link href="/mappy">
            <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-105">
              {/* Default image */}
              <Image
                src="/showcase/mappy/mappy_e_black.jpg"
                fill
                objectFit="cover"
                objectPosition="52% 50%"
                alt="mappy default"
                className="object-cover opacity-100 transition-opacity duration-300"
              />

              {/* Hover image */}
              <Image
                src="/showcase/mappy/mappy_e.webp"
                fill
                objectFit="cover"
                objectPosition="52% 50%"
                alt="mappy hover"
                className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 hover:scale-105"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
