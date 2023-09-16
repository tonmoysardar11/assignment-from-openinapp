import React, { useContext } from "react";
import Card from "./Card";
import card1 from "../media/Card1.svg";
import card2 from "../media/Card2.svg";
import card3 from "../media/Card3.svg";
import card4 from "../media/Card4.svg";
import { datacontext } from "../context/datacontext";

const Cardlist = () => {
  const output = useContext(datacontext);
  const { data } = output;
  const icon = (index) => {
    switch (index) {
      case 0:
        return card1;
      case 1:
        return card2;
      case 2:
        return card3;
      case 3:
        return card4;
      default:
        return card1;
    }
  };
  const clr = (index) => {
    switch (index) {
      case 0:
        return "bg-green-300";
      case 1:
        return "bg-orange-300";
      case 2:
        return "bg-red-300";
      case 3:
        return "bg-indigo-300";
      default:
        return "bg-gray-600";
    }
  };
  return (
    <div className="w-full flex flex-wrap justify-between py-2">
      {data.map((element, index) => {
        return (
          <div
            key={element.id}
            className="w-1/2 h-auto md:min-h-[18vh] md:w-1/4 py-2 pr-2"
          >
            <Card icon={icon(index)} clr={clr(index)} data={element}/>
          </div>
        );
      })}
    </div>
  );
};

export default Cardlist;
