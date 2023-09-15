import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Search from './Search'
import user_img from '../media/user_img.svg'
import Cardlist from './Cardlist';
import Charts from './Charts';

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
    </div>
  )
}

export default Dashboard
