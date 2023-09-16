import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
import Cardlist from "./Cardlist";
import Charts from "./Charts";
import DoughnutChart from "./DoughnutChart";
import whatsapp from "../media/whatsapp.svg";
import insta from "../media/instagram.svg";
import mail from "../media/Mail.svg";
import twitter from "../media/twitter.svg";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { user,loginWithRedirect,logout } = useAuth0();
  console.log(user)
  return (
    <div className="px-8 md:px-0 h-full">
      <div className="w-full flex justify-between items-center">
        <p className="text-gray-900 font-bold text-lg md:text-2xl">Dashboard</p>
        <div className="flex w-full md:w-2/3 justify-end items-center">
          <Search />
          <FontAwesomeIcon icon={faBell} className="mx-4" />
         {user?<div className="flex items-center"> <img src={user.picture} alt="user" className="border-2 border-gray-800 rounded-full w-8 h-8 mr-2 md:mr-4" /><button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-2 rounded-full" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            LogOut
          </button></div>:
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-2 rounded-full" onClick={() => loginWithRedirect()}>
            Login
          </button>}
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
                {user?user.name:'Please Log In'}
              </p>
              <ul className="flex flex-wrap justify-between items-center py-2">
                <li className="w-full md:w-1/2 p-2">
                  {" "}
                  <div className="flex">
                    <img
                      src={whatsapp}
                      alt="whatsapp"
                      className="w-4 h-4 rounded-full w-max h-max bg-green-300 bg-opacity-60 p-1 text-gray-100"
                    />
                    <p className="font-light text-sm text-gray-700 underline mx-2">
                      +91 29938 81234
                    </p>
                  </div>
                </li>
                <li className="w-full md:w-1/2 p-2">
                  {" "}
                  <div className="flex">
                    <img
                      src={insta}
                      alt="insta"
                      className="w-4 h-4 rounded-full w-max h-max bg-red-300 bg-opacity-60 p-1 text-gray-100"
                    />
                    <p className="font-light text-sm text-gray-700 underline mx-2">
                      {user?user.nickname:'Unknown'}
                    </p>
                  </div>
                </li>
                <li className="w-full md:w-1/2 p-2">
                  {" "}
                  <div className="flex">
                    <img
                      src={mail}
                      alt="mail"
                      className="w-4 h-4 rounded-full w-max h-max bg-indigo-300 bg-opacity-60 p-1 text-gray-100"
                    />
                    <p className="font-light text-sm text-gray-700 underline mx-2">
                    {user?user.nickname:'Unknown'}@xyz.com
                    </p>
                  </div>
                </li>
                <li className="w-full md:w-1/2 p-2">
                  {" "}
                  <div className="flex">
                    <img
                      src={twitter}
                      alt="twitter"
                      className="w-4 h-4 rounded-full w-max h-max bg-red-300 bg-opacity-60 p-1 text-gray-100"
                    />
                    <p className="font-light text-sm text-gray-700 underline mx-2">
                    {user?user.nickname:'Unknown'}
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
