import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
import user_img from "../media/user_img.svg";
import Cardlist from "./Cardlist";
import Charts from "./Charts";
import DoughnutChart from "./DoughnutChart";
import whatsapp from "../media/whatsapp.svg";
import insta from "../media/instagram.svg";
import mail from "../media/Mail.svg";
import twitter from "../media/twitter.svg";

const Dashboard = () => {
  return (
    <div className="px-8 md:px-0 h-full">
      <div className="w-full flex justify-between items-center">
        <p className="text-gray-900 font-bold text-lg md:text-2xl">Dashboard</p>
        <div className="flex w-4/5 md:w-2/3 justify-end items-center">
          <Search />
          <FontAwesomeIcon icon={faBell} className="mx-2" />
          <img src={user_img} alt="user" className="ml-2 md:ml-4" />
        </div>
      </div>
      <Cardlist />
      <Charts />
      <div className="w-full flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 py-4">
          <div className="border-[1px] border-gray-300 rounded-[15px] shadow-md shadow-gray-200 p-4 flex justify-between items-center">
            <DoughnutChart />
          </div>
        </div>
        <div className="w-full h-full md:w-1/2 py-4 md:pl-4">
          <div className="border-[1px] border-gray-300 rounded-[15px] shadow-md shadow-gray-200 p-4">
            <div className="w-full h-full">
              <p className="text-gray-900 font-bold text-lg md:text-2xl text-left p-2">
                John Doe
              </p>
              <ul className="flex flex-wrap justify-between items-center py-2">
                <li className="w-full md:w-1/2 p-2">
                  {" "}
                  <div className="flex">
                    <img src={whatsapp} alt="whatsapp" className="w-4 h-4 rounded-full w-max h-max bg-green-300 bg-opacity-60 p-1 text-gray-100" />
                    <p className="font-light text-sm text-gray-700 underline mx-2">
                      +91 29938 81234
                    </p>
                  </div>
                </li>
                <li className="w-full md:w-1/2 p-2">
                  {" "}
                  <div className="flex">
                    <img src={insta} alt="insta" className="w-4 h-4 rounded-full w-max h-max bg-red-300 bg-opacity-60 p-1 text-gray-100" />
                    <p className="font-light text-sm text-gray-700 underline mx-2">
                      john_official
                    </p>
                  </div>
                </li>
                <li className="w-full md:w-1/2 p-2">
                  {" "}
                  <div className="flex">
                    <img src={mail} alt="mail" className="w-4 h-4 rounded-full w-max h-max bg-indigo-300 bg-opacity-60 p-1 text-gray-100" />
                    <p className="font-light text-sm text-gray-700 underline mx-2">
                      john@xyz.com
                    </p>
                  </div>
                </li>
                <li className="w-full md:w-1/2 p-2">
                  {" "}
                  <div className="flex">
                    <img src={twitter} alt="twitter" className="w-4 h-4 rounded-full w-max h-max bg-red-300 bg-opacity-60 p-1 text-gray-100" />
                    <p className="font-light text-sm text-gray-700 underline mx-2">
                     john_official
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
