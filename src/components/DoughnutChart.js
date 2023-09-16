import React, { useContext} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { datacontext } from "../context/datacontext";

const DoughnutChart = () => {
  const output = useContext(datacontext);
  const { data } = output;
  ChartJS.register(ArcElement, Tooltip, Legend);
  const options = {
    responsive: true,
    aspectRatio: 1,
    options: {
      layout: {
        padding: 20,
      },
    },
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
        data: data.map((item) => item.market_cap_usd),
        backgroundColor: ["#FF5111", "#97D79E", "#F6DC7D", "#A8B0E5"],
      },
    ],
  };


  return (
    <div className="w-full md:px-4 h-full">
      <div className="w-full flex justify-between items-center h-full">
        <p className="text-gray-900 font-bold text-lg md:text-2xl">Top Product</p>
        <p className="text-gray-400 font-light text-sm"> May - June 2021</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="w-full md:w-1/4 h-[40vh] md:h-min p-2">
          <Doughnut data={graphData} options={options} />
        </div>
        <div className="flex flex-row md:flex-col w-full md:w-1/3 h-full justify-between items-start">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-[#FF5111]"></div>
            <p className="mx-2 text-xs md:text-sm">Bitcoin</p>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-[#97D79E]"></div>
            <p className="mx-2 text-xs md:text-sm">Etherium</p>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-[#F6DC7D]"></div>
            <p className="mx-2 text-xs md:text-sm">Tether</p>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-[#A8B0E5]"></div>
            <p className="mx-2 text-xs md:text-sm">Binance Coin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
