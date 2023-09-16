import React, { useContext,useState,useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { datacontext } from "../context/datacontext";

const Charts = () => {
  const output = useContext(datacontext);
  const [wSize, setwSize] = useState();
  const getWsize=()=>{
    const newSize = window.innerWidth;
    setwSize(newSize)
  }

useEffect(() => {
  window.addEventListener('resize', getWsize); 
    return () => {
      window.removeEventListener('resize', getWsize);
    };
}, []);

  const { data } = output;
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    aspectRatio:wSize<768?3|1: 4|5,
    
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const labels = data.map((item) => item.name);

  const graphData = {
    labels: labels,

    datasets: [
      {
        label: "Current Volume",
        data: data.map((item) => Math.ceil(item.volume24)/1000000),
        backgroundColor: "#97D79E",
      },
      {
        label: "Assumed Volume",
        data: data.map((item) => Math.ceil(item.volume24a)/1000000),
        backgroundColor: "#EE8383",
      },
    ],
  };

  return (
    <div className="w-full flex flex-col justify-between items center border-[1px] border-gray-300 rounded-[15px] shadow-md shadow-gray-200 py-2 px-2 md:px-8 max-h-[50vh]">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col justify-start pb-4">
          <p className="text-gray-900 font-bold text-lg md:text-2xl">
            {" "}
            Activities
          </p>
          <p className="text-gray-400 font-light text-sm"> May - June 2021</p>
        </div>
        <div className="w-1/3 flex justify-end items-center">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-green-300"></div>
            <p className="mx-2 text-xs md:text-sm">Current Volume</p>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-rose-400"></div>
            <p className="mx-2 text-xs md:text-sm">Assumed Volume</p>
          </div>
        </div>
      </div>

      <Bar options={options} data={graphData} />
    </div>
  );
};

export default Charts;
