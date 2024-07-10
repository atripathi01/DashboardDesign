import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../../images/logoMatrix.svg';
import Link from 'next/link';
import { Routes } from '../data/sidebarRoutes';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import LogoutIcon from '@mui/icons-material/Logout';
import HeadphonesRoundedIcon from '@mui/icons-material/HeadphonesRounded';
import RedeemRoundedIcon from '@mui/icons-material/RedeemRounded';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <nav
      className={`shadow-md h-screen p-2 sticky top-0 left-0 flex flex-col duration-500 bg-white text-gray-500 ${
        open ? 'w-60' : 'w-16'
      }`}
    >
      {/* Header */}
      <div className=' px-3 h-fit flex justify-between items-center'>
        <div className='flex justify-start items-center'>
          <Image
            src={logo}
            alt='Logo'
            className={`${open ? 'w-10' : 'w-0'} rounded-md`}
          />
          <span
            className={`${
              open ? 'block' : 'hidden'
            } text-gray-700 text-xl ml-2 font-bold`}
          >
            Metrix
          </span>
        </div>

        <div>
          {/* @ts-ignore */}
          <MenuOpenIcon
            size={34}
            className={` duration-500 cursor-pointer ${!open && ' rotate-180'}`}
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      {/* Body */}

      <div className='flex-1 pt-2'>
        {Routes?.map((item, index) => {
          return (
            <Link
              href={item?.path}
              key={index}
              className='px-3 py-2 my-2 hover:bg-[#5570F1] hover:text-white rounded-md text-sm cursor-pointer flex gap-2 items-center relative group'
            >
              <div>{item.icons}</div>
              <p
                className={`${
                  !open && 'w-0 translate-x-24'
                } duration-500 overflow-hidden`}
              >
                {item?.label}
              </p>
              <p
                className={`${
                  open && 'hidden'
                } absolute left-32 shadow-md rounded-md
               w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16
              `}
              >
                {item?.label}
              </p>
            </Link>
          );
        })}
      </div>
      {/* footer */}
      <div className='flex items-start flex-col gap-2 '>
        <div className='flex items-center gap-2 px-3 py-2 bg-gray-200 text-sm text-black rounded-md w-full'>
          <div>
            {/* @ts-ignore */}
            <HeadphonesRoundedIcon size={30} />
          </div>
          <div
            className={`leading-5 ${
              !open && 'w-0 translate-x-24'
            } duration-500 overflow-hidden`}
          >
            <p>Contact Support</p>
          </div>
        </div>
        <div className='flex items-center gap-2 px-3 py-2 bg-[#ffcc9143] text-sm text-black rounded-md w-full'>
          <div>
            {/* @ts-ignore */}
            <RedeemRoundedIcon size={30} />
          </div>
          <div
            className={`leading-5 ${
              !open && 'w-0 translate-x-24'
            } duration-500 overflow-hidden`}
          >
            <p>Free Gift Awaits You!</p>
            {/* <span className={`text-xs text-gray-500 ${
              !open && 'w-0 translate-x-24'
            }  `}>Upgrade your account &gt;</span> */}
          </div>
        </div>
        <div className='flex items-center text-sm font-light gap-2 px-3 py-2 text-red-500 '>
          <div>
            {/* @ts-ignore */}
            <LogoutIcon size={30} />
          </div>
          <div
            className={`leading-5 ${
              !open && 'w-0 translate-x-24'
            } duration-500 overflow-hidden`}
          >
            <p>Logout</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
