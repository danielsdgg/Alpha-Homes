import React from 'react';

const Home = () => {
  return (
    <div className="all">
          <div className='w-full bg-gray-300 py-16 px-12'>
        <div className='max-w-[100%] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center text-black'>
                <h2 className='font-semibold py-2 md:text-6xl sm:text-3xl text-2xl'>Welcome to Alpha Homes - Your Gateway to Effortless Living </h2>
                <p>Finding your perfect home should be an exciting journey, not a hassle. Introducing Alpha Homes, the revolutionary app that transforms the way you search, secure, and settle into your dream space.
Why Alpha Homes?</p>

            </div>
            <img className='w-[500px] mx-auto rounded-3xl my-4' src='https://res.cloudinary.com/ddei3mzex/image/upload/v1700162328/housing_dy1xkz.jpg' alt=''/>
        </div>
    </div>
    {/* Second section of homepage */}
    <div className='w-full bg-black py-16 px-12'>
        <div className='max-w-[100%] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] rounded-3xl mx-auto my-4' src='https://res.cloudinary.com/ddei3mzex/image/upload/v1700162480/8ea241e96504a398f291a31939963e8ba948368c_uhaetv.webp' alt='imagery'/>
          <div className='flex flex-col justify-center text-white'>
            <h2 className='font-semibold py-2 md:text-6xl sm:text-3xl text-2xl'>Effortless Search</h2>
            <p>
            Explore a curated selection of rental properties, homes for purchase, and prime land listings. Our intuitive interface makes finding your ideal space a breeze.
            </p>
          </div>
        </div>
      </div>

      {/* Third section of the homepage */}
      <div className='w-full bg-gray-300 py-16 px-16'>
        <div className='max-w-[100%] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center text-black'>
                <h2 className='font-semibold py-2 md:text-6xl sm:text-3xl text-2xl'>Personalized Experience</h2>
                <p>
                Tailor your search with advanced filters and receive personalized recommendations based on your preferences. Your dream home is just a few clicks away.
                </p>
            </div>
            <img className='w-[500px] mx-auto rounded-3xl my-4' src='https://cdn.homecrux.com/wp-content/uploads/2018/03/Home-for-a-Growing-Family.jpg' alt='mind'/>

        </div>
    </div>

    {/* Fourth section of the homepage */}
    <div className='w-full bg-violet-200 text-black py-16 px-4 text-center md:text-6xl sm:text-3xl text-3xl'>
        <p>Become part of our mission and join<b> Alpha-Homes</b></p>
    </div>
    </div>

  )
}

export default Home