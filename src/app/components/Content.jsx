import React from "react";

export default function Content() {
  return (
    <div className="bg-[#6482AD] py-9 px-12 min-h-7 minWidth:[20px] flex flex-col justify-between items-end">
      <Section2 />
    </div>
  );
}

const Section2 = () => {
  return (
    <div className="relative flex pb-0 justify-between items-end min-h-screen w-full">
      <div className="relative z-10 flex flex-col pb-0 items-start px-1 py-40 w-full">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-[32vw] leading-[0.8] lg:text-[21vw] md:text-[21vw] xl:text-[20vw] mb-20 lg:mt-50 text-white">
            SLT/
          </h1>

          <button className="text-white text-[5vw] lg:text-[6.5vw] lg:mt-20 md:text-[2vw] font-mono font-light">
            ©2024 JANANI
          </button>
        </div>
      </div>
    </div>
  );
};
