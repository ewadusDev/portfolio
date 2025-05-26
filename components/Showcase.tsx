"use client";
import Image from "next/image";
import Link from "next/link";

const Showcase = () => {
  return (
    <section className="h-screen bg-gray-300" id="showcase">
      <div className="showcase-container">
        <div className="showcase-left-section">
          <div className="group showcase-left-container">
            <Link href="/todolist">
              <div className="showcase-left-img-container">
                <Image
                  src="/showcase/todolist/todolist_d_black.jpg"
                  fill
                  objectFit="cover"
                  objectPosition="top"
                  alt="todolist default"
                  className="showcase-left-img-default"
                />
                <Image
                  src="/showcase/todolist/todolist_d.webp"
                  fill
                  objectFit="cover"
                  objectPosition="top"
                  alt="todolist hover"
                  className="showcase-left-img-container-hover group-hover:opacity-100"
                />
              </div>
            </Link>
          </div>

          <div className="group showcase-left-container">
            <Link href="/imovie">
              <div className="showcase-left-img-container">
                <Image
                  src="/showcase/imovie/imovie_f_black.jpg"
                  fill
                  objectFit="cover"
                  objectPosition="52% 50%"
                  alt="todolist"
                  className="showcase-left-img-default"
                />
                <Image
                  src={"/showcase/imovie/imovie_f.webp"}
                  fill
                  objectFit="cover"
                  objectPosition="52% 50%"
                  alt="todolist hover"
                  className="showcase-left-img-container-hover group-hover:opacity-100"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="group showcase-right-img-container">
          <Link href="/mappy">
            <div className="showcase-left-img-container">
              {/* Default image */}
              <Image
                src="/showcase/mappy/mappy_e_black.jpg"
                fill
                objectFit="cover"
                objectPosition="52% 50%"
                alt="mappy default"
                className="showcase-left-img-default"
              />

              {/* Hover image */}
              <Image
                src="/showcase/mappy/mappy_e.webp"
                fill
                objectFit="cover"
                objectPosition="52% 50%"
                alt="mappy hover"
                className="showcase-left-img-container-hover group-hover:opacity-100"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
