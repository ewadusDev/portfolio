import { educations } from "@/data/const";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";

const Education = () => {
  return (
    <section className="lg:h-screen ">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left */}
        <div className="basis-1/3">
          <h3 className="text-7xl px-6 py-8 sm:text-8xl xl:text-9xl h-full lg:p-14">
            Education
          </h3>
        </div>
        {/* Right */}
        <div className="basis-2/3 flex flex-col ">
          <div className="flex justify-between">
            <div className="w-full border border-gray-400 items-center justify-center flex py-8 lg:py-28">
              <RxArrowLeft size={44} />
            </div>
            <div className="w-full border border-gray-400 items-center justify-center flex py-8 lg:py-28">
              <RxArrowRight size={44} />
            </div>
          </div>
          <div className="flex flex-col py-10">
            <div className="flex flex-row">
              <div className="basis-1/4 flex items-start justify-center ">
                <p className="rounded-4xl border border-[#0AB274] py-1 px-4 lg:text-2xl ">
                  01
                </p>
              </div>
              <div className="flex flex-col px-5">
                <h2 className="text-3xl sm:text-4xl xl:text-8xl font-semibold">
                  Kasetsart University
                </h2>
                <div className="flex text-xl lg:text-3xl font-medium justify-between mt-2">
                  <p>Geography</p>
                  <p>Thailand</p>
                </div>
                <div className="flex justify-between text-gray-400">
                  <p>Student</p>
                  <p>Jul 2013 - Jun 2017</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row mt-14 xl:mt-40 lg:h-64">
              <div className="bg-gray-500 basis-1/4 w-10 " />
              <p className="text-justify basis-3/4 px-5 text-sm sm:text-xl xl:text-3xl text-gray-400">
                Studying Geography at university offers a deep understanding of
                the physical and human processes shaping our world. From
                exploring environmental challenges to analyzing spatial data
                through GIS, this discipline equips students with the skills to
                address global issues and contribute to sustainable development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;
