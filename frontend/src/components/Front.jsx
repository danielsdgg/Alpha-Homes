import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

const Front = () => {
  return (
    <div className='w-full h-[90vh'>
       <img src='https://live.staticflickr.com/7700/27368417753_12766147f2_b.jpg' alt='/' 
            className='w-full h-full object-cover'/>
            <div className="max-w-[1148] m-auto flex justify-center items-center">
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold text-black'>The best deals for</p>
            <Typed className='md:text-5xl sm:text-4xl text-xl text-black font-bold md:pl-4 pl-2' strings={['Realtors', 'Customers']} typeSpeed={120} backSpeed={140} loop/>
            {/* <Link to={'/register'}><button className='bg-[orangered] w-[100px] rounded-md font-medium my-11 mx-auto py-2 text-black'>Get Started</button></Link> */}

                </div>


            </div>

    </div>
    // <div className='text-white bg-white w-full h-[90vh]'>
    //   <img src='https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='' className='w-full h-full object-cover'/>
    //     <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
    //         <h1 className='text-black font-bold p-2 md:text-7xl sm:text-6xl text-4xl md:py-6'>Buy, Sell, Rent.</h1>
    //         <div className='flex justify-center items-center'>
//        <p className='md:text-5xl sm:text-4xl text-xl font-bold text-black'>The best deals for</p>
            // <Typed className='md:text-5xl sm:text-4xl text-xl text-black font-bold md:pl-4 pl-2' strings={['Realtors', 'Customers']} typeSpeed={120} backSpeed={140} loop/>
    //         </div>
            // <Link to={'/register'}><button className='bg-[#00df9a] w-[100px] rounded-md font-medium my-11 mx-auto py-2 text-black'>Get Started</button></Link>
    //     </div>
    // </div>

  )
}

export default Front