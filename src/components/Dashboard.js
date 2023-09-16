import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Search from './Search'
import user_img from '../media/user_img.svg'
import Cardlist from './Cardlist';
import Charts from './Charts';
import DoughnutChart from './DoughnutChart';

const Dashboard = () => {
  return (
    <div className='px-8 md:px-0'>
      <div className='w-full flex justify-between items-center'>
        <p className='text-gray-900 font-bold text-lg md:text-2xl'>Dashboard</p>
        <div className='flex w-4/5 md:w-2/3 justify-end items-center'>
            <Search/>
            <FontAwesomeIcon icon={faBell} className='mx-2'/>
            <img src={user_img} alt='user' className='ml-2 md:ml-4' />
        </div>
      </div>
      <Cardlist/>
      <Charts/>
      <div className='w-full flex flex-col md:flex-row items-center'>
        <div className='w-full md:w-1/2 py-4'>
          <div className='border-[1px] border-gray-300 rounded-[15px] shadow-md shadow-gray-200 p-4 flex justify-between items-center'>
          <DoughnutChart/>
          </div>

        </div>
        <div className='w-full md:w-1/2 py-4'>
<div className='border-[1px] border-gray-300 rounded-[15px] shadow-md shadow-gray-200'></div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard
