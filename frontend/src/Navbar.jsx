import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'About Us' },
    { id: 3, text: 'Create Quiz' },
    { id: 4, text: 'Explore' },
  ];

  return (
    <div className='bg-[#100d28] p-14 flex justify-between items-center h-24 w-full mx-auto px-4 text-white overflow-y-hidden select-none'>
      {/* Logo */}
      <div className=' cursor-pointer'>
        <img src="/public/Brain.png" width={200} height={250} alt="" />
      </div>
        {/* <h1 className='w-full text-3xl font-bold text-green-300 font-Poppins'>BrainBunch</h1> */}

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black text-base font-semibold font-Arvo'
          >
            {item.text.toUpperCase()}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
    <div onClick={handleNav} className='block md:hidden z-10'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#100d28]  ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] '
        }
      >
        {/* Mobile Logo */}
        <div className=' cursor-pointer'>
          <img src="/public/Brain.png" width={200} height={250} alt="" />
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-12 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;