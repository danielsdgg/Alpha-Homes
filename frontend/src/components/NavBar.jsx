import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 w-full mx-auto px-4 text-white bg-[#104c4e]'>
      <Link to={'/'}> <img src="https://res.cloudinary.com/ddei3mzex/image/upload/v1697622202/construct_ztwzgv.jpg" className="h-8 mr-2 cursor-pointer" alt="Fashion Design" /></Link>
      <span className="w-full text-2xl font-semibold whitespace-nowrap dark:text-white cursor-pointer">Alpha-Homes</span>
      <ul className='hidden md:flex'>
        <Link to={'/'}><li className='p-4 cursor-pointer'>Home</li></Link>
        <Link to={'/properties'}><li className='p-4 cursor-pointer'>Properties</li></Link>
        <Link to={'/about'}><li className='p-4 cursor-pointer'>About</li></Link>
        <Link to={'/contacts'}><li className='p-4 cursor-pointer'>Contacts</li></Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden cursor-pointer'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[80%] h-fit border-r border-r-gray-200 bg-[#104c4e] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <img src="https://res.cloudinary.com/ddei3mzex/image/upload/v1699436420/Image_169h9387811877_zqgrpu.jpg" className="h-8 mr-2 cursor-pointer" alt="Fashion Design" />
      <span className="w-full text-2xl font-semibold whitespace-nowrap dark:text-white cursor-pointer">Hero-Cloth-line</span><br></br>
      <Link to={'/'}><li className='p-4 cursor-pointer border-b border-gray-600'>Home</li></Link>
      <Link to={'/properties'}><li className='p-4 cursor-pointer border-b border-gray-600'>Properties</li></Link>
      <Link to={'/about'}><li className='p-4 cursor-pointer border-b border-gray-600'>About</li> </Link>
      <Link to={'/contacts'}><li className='p-4 cursor-pointer border-b border-gray-600'>Contacts</li></Link>
      </ul>
    </div>
  );
};

export default Navbar;