"use client";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState<any>();
  const fetchData = async ()=>{
    const response = await fetch('http://localhost:8000')
    const data = await response.json()
    console.log(data)
    setData(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return <div>Data: {JSON.stringify(data)}</div>;
};

export default Dashboard;
