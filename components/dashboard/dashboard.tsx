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
    <div className="">
      <div className="absolute w-full">
        <Image src={bg} alt="bg" height="900" width="1600" className=" brightness-90 saturate-150 contrast-125 opacity-85 w-full"/>
      </div>
        <div className="absolute top-20 lg:top-1/2 md:top-1/3 left-1/2 -translate-x-1/2  text-white transition-all">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold"> Welcome to <span className="text-red-500 text-[1.2em]">P</span>omato</h1>
            <p className="text-sm md:text-md">Best'um best place to release your food hunger !</p>
          </div>
        </div>
      <div className="flex justify-center w-full h-64">HIIIIIIIIIIIIi</div>
    </div>
  );
};

export default Dashboard;
