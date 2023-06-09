'use client';
import React, { useState } from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';


const NAV_ITEMS = [
  {
    label: 'Home',
    page: '/',
  },
  {
    label: 'About',
    page: 'about',
  },
];

export const SOCIAL_ITEMS = [
  {icon: <FaTwitter />, link: 'https://twitter.com/hartaniyassir/'},
  {icon: <FaGithub />, link: 'https://github.com/yassir4'},
  {icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/yassir-hartani-a8a131137/'},
];
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className='w-full h-20'>
      <div className='flex justify-between items-center w-full h-full py-4 flex-row'>
        <p>Yassir Hartani</p>
        <div>
          <ul className="hidden md:flex md:flex-row">
            {NAV_ITEMS.map((item, index) => (
              <Link href={`/${item.page}`} key={index}>
                <li className='ml-10 font-semibold text-sm hover:text-gray-400 '>{item.label}</li>
              </Link>
            ))}
          </ul>
          <div className='md:hidden cursor-pointer' onClick={() => setNavbar(!navbar)}>
            <AiOutlineMenu size={25}/>
          </div>
        </div>
      </div>
      <div className={navbar ? 'z-50 overflow-hidden md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={navbar ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10' : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10'}>
          <div className='flex w-full items-center justify-between'>
            <p>Yassir Hartani</p>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer' onClick={() => setNavbar(!navbar)}>
              <AiOutlineClose size={20}/>
            </div>
          </div>
          <div className='border-b border-gray-300 my-4'>
            <p>{'let\'s built something legendary together'}</p>
          </div>

          <div className='flex flex-col'>
            <ul>
              {NAV_ITEMS.map((item, index) => (
                <Link href={`/${item.page}`} key={index}>
                  <li className='py-4 text-sm hover:border-b'>{item.label}</li>
                </Link>
              ))}
            </ul>
            <div className='mt-40'>
              <p className='text-color- '>{'Let\'s Connect'}</p>
              <div className='flex flex-row items-center justify-start my-4 w-full sm:w-[80%]'>
                {SOCIAL_ITEMS.map((item, index) => (
                  <Link key={index} href={item.link} className={`${index > 0 ? 'ml-5' : ''} rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer`}>
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;