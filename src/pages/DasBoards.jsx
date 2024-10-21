import React from "react";
// import Char from "./Char";
// import Bar from "react-C";

function Dasboards() {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col gap-3">
        {/* bg-[#F1F5F9] */}
        <div className="w-72 h-[400px] bg-white rounded-md">
          {/* <Char /> */}
        </div>
        {/* bg-[#F1F5F9] */}
        <div className=" w-72 h-48 bg-white rounded-md "></div>
      </div>
      <div className=" flex flex-col gap-3">
        <div className="flex gap-3 justify-center">
          {/* bg-[#F1F5F9] */}
          <div className="w-96 h-[300px] bg-white rounded-md"></div>
          <div className="flex flex-col gap-3">
            <div className="w-80 h-[140px] bg-white rounded-md"></div>
            <div className="w-[100%] h-[140px] bg-white rounded-md"></div>
          </div>
        </div>
        <div className="w-[100%] h-72 bg-white rounded-md"></div>
      </div>
    </div>
  );
}

export default Dasboards;
