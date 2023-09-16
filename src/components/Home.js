import React from "react";
import Sidenav from "../layout/Sidenav";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row w-screen h-auto md:h-screen">
      <div className="w-full md:w-1/5 md:p-5">
        <Sidenav />
      </div>
      <div className="w-full md:w-4/5 md:px-10 md:py-5">
        <Dashboard/>
      </div>
    </div>
  );
};

export default Home;
