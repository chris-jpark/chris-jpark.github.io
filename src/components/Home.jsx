import React from 'react';
import { HiIdentification } from 'react-icons/hi';
import Logo from './Logo';
import resume from '../assets/ChrisPark_Resume_sep2022.pdf' 

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#ffffff]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full z-5'>
        <p className='text-[#fca311] font-bold'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#000000]'>
          Chris Park
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#14213d] z-5'>
          Software Engineer
        </h2>
        <p className='text-[#457b9d] py-4 max-w-[700px]'>
          I'm a junior at the University of Toronto, studying computer engineering. 
        </p>
        <div>
          <a href={ resume }>
          <button className='text-white group border-2 px-6 py-3 my-2 bg-[#fca311] flex items-center hover:bg-pink-600 hover:border-pink-600'>
            Resume &nbsp;
            <span className='group-hover:rotate-45 duration-300'>
              <HiIdentification  />
            </span>
          </button>
          </a>
        </div>
      </div>
      
    </div>
    
  );
};

export default Home;
