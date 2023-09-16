import React from "react";

const Card = ({ icon, clr, data }) => {
    
  return (
    <div className="w-full h-full flex  flex-col justify-between border-[1px] border-gray-300 rounded-[15px] shadow-md shadow-gray-200 p-4">
      <div className={`rounded-full w-max h-max ${clr} p-1`}>
        <img src={icon} alt={data.name} className="w-4 h-4" />
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-end">
        <div>
          <p className="font-light text-sm text-gray-400">{data.name}</p>
          <p className="font-bold text-md md:text-lg">$ {data.price_usd}</p>
        </div>
        <span className={`rounded-full ${data.percent_change_1h>=0?'bg-emerald-100 text-green-500':'bg-red-300 text-red-500'} py-[1px] px-[5px] text-xs md:text-sm`}>{data.percent_change_1h>=0?`+${data.percent_change_1h}`:data.percent_change_1h}</span>
      </div>
    </div>
  );
};

export default Card;
