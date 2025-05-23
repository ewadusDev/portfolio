"use client";
import { Link } from "lucide-react";

const Showcase = () => {
  return (
    <section className="h-screen bg-gray-300" id="showcase">
      <div className="flex flex-col h-full lg:flex-row">
        <div className="flex flex-col basis-2/3 lg:basis-1/2 border-b lg:border-r lg:border-b-0  border-gray-600">
          <div className="h-full border-b border-gray-600">
            <Link href="/mappy">Mappy</Link>
          </div>
          <div className="h-full ">
            <Link href="/imovie">iMovie</Link>
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
