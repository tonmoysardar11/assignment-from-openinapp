import React, { useState } from "react";
import dashboard_icon from "../media/dashboard_icon.svg";
import transaction_icon from "../media/transaction_icon.svg";
import schedule_icon from "../media/schedule_icon.svg";
import user_icon from "../media/user_icon.svg";
import setting_icon from "../media/setting_icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Sidenav = () => {
  const [openNav, setopenNav] = useState(false);
  const menu = [
    { icon: dashboard_icon, name: "Dashboard" },
    { icon: transaction_icon, name: "Transactions" },
    { icon: schedule_icon, name: "Schedules" },
    { icon: user_icon, name: "Users" },
    { icon: setting_icon, name: "Settings" },
  ];

  const toggle = () => {
    setopenNav(!openNav);
  };
  return (
    <div className="w-full h-min md:h-full bg-gradient-to-b from-blue-500 to-blue-500 md:rounded-lg px-8 md:px-12 py-4 md:py-12 flex flex-col justify-start text-gray-100">
      <div className="flex flex-col justify-center items-start w-full">
        <span className="flex justify-between items-center md:block text-4xl font-extrabold md:pb-8 w-full">
          <p>Board.</p>{" "}
          {openNav ? (
            <FontAwesomeIcon
              icon={faBars}
              onClick={toggle}
              className="lg:hidden block rotate-90 text-xl duration-200"
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              onClick={toggle}
              className="lg:hidden block text-xl duration-200"
            />
          )}
        </span>
      </div>
      <div
        className={`${
          openNav ? `flex` : `hidden`
        } md:flex flex-col justify-between md:h-full`}
      >
        <ul className="flex flex-col w-full py-8 md:py-0">
          {menu.map((element, index) => {
            return (
              <li key={index} className={index===0?"font-bold flex py-3 cursor-pointer":"flex py-3 hover:font-bold cursor-pointer"}>
                <img src={element.icon} alt={element.name} />
                <p className="px-4">
                  {element.name}
                </p>
              </li>
            );
          })}
        </ul>

        <ul className="flex flex-col w-full">
          <li className="py-2 hover:font-bold cursor-pointer">Help</li>
          <li className="py-2 hover:font-bold cursor-pointer">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
