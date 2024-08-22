"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import bg from "@/assets/images/bg.jpeg";

const Dashboard = () => {
  // const [data, setData] = useState<any>();

  // const fetchData = async ()=>{
  //   const response = await fetch('http://localhost:8000')
  //   const data = await response.json()
  //   console.log(data)
  //   setData(data);
  // }
  // useEffect(() => {
    // fetchData();
  // }, []);
  return (
    <div className="relative">
      <div className="absolute w-full z-[1]">
        <Image src={bg} alt="bg" height="600" width="800" className="brightness-90 saturate-150 contrast-125 opacity-85 w-full h-full "/>
      </div>
      <div className="absolute z-[2] w-full h-screen bg-none text-white transition-all">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-3xl font-semibold">
            Welcome to <span className="text-red-400 text-[1.2em]">P</span>omato
          </h1>
          <p className="">Release your food hunger now !</p>
        </div>
      </div>
      {/* <div className="flex justify-center w-full bg-white h-64">HIIIIIIIIIIIIi</div> */}
    </div>
  );
};

export default Dashboard;
