import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <section>
    <div name='home' className='w-full h-screen bg-[#0a192f] pt-[20%] sm:p-0'>
      {/* Container */}
      <div className='max-w-[1000px] ml-16 mr-5 md:mx-auto md:px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600  text-sm sm:text-3xl font-bold' >Hi, my name is</p>
        <h1 className=' text-2xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Ubaid Ashraf
        </h1>
        <h2 className='text-2xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Front-End Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] text-xs font-medium sm:text-sm ">
         Dedicated Front-End Developer with 1 year of experience specializing in building user interfaces
         using modern web technologies. Proficient in React.js and its ecosystem, with a strong
         understanding of JavaScript, HTML, and CSS. Passionate about creating responsive and intuitive
         web applications that enhance user experience.

        </p>
        <div>
          <button className='px-3 py-1 text-white group border-2 sm:px-6 :py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Home;
