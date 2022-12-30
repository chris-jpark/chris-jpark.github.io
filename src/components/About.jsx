import React from 'react';
import test from '../assets/crud.png'
import { data } from "../data/data.js";


const About = () => {
  const project = data;

  return (
    <div name='about' className='w-screen min-h-[800px] bg-[#ffffff] text-gray-300 inline-block'>
      <div className='flex flex-col justify-center items-center w-full h-[25%] pt-12 pb-20'>
        <div className='max-w-[1000px] grow-0 w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-[#14213d]'>
              Projects
            </p>
          </div>
          <div></div>
          </div>

          {project.map((item, index) => (
            <div className='max-w-[1000px] w-full h-[20%] grid sm:grid-cols-2 gap-8 px-4 pt-12 items-start grow-0 inline-block'>

            <div >
                {/* <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" /> */}
                <img src={item.image} class="object-cover shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div group-hover-animate-shine"/>
              </div>
              <div >
              <h2 className='text-3xl sm:text-12xl font-bold text-[#fca311] pl-6 pr-6'>{item.name}</h2>
              <p className='text-[#000000] pl-6 pr-6'>{item.description}</p>
              </div>
              <div className="pt-8 text-center ">
                {/* eslint-disable-next-line */}
                {/* <a href={item.github} target="_blank"> */}
                <a href={item.github}>
                <button href={item.github} class="p-2 pl-5 pr-5 bg-[#14213d] border-2 border-[#14213d] text-white text-lg rounded-l-lg transition-colors duration-700 transform hover:bg-transparent hover:text-[#14213d] focus:border-4 focus:border-[#14213d]">Code</button>
                </a>
                <a href={item.link}>
                <button class="p-2 pl-5 pr-5 bg-[#14213d] border-2 border-[#14213d] text-white text-lg rounded-r-lg transition-colors duration-700 transform hover:bg-transparent hover:text-[#14213d] focus:border-4 focus:border-[#14213d]">Details</button>
                </a>
                </div>
              </div>
              
          ))}
        
          </div>
      </div>
    // </div>
  );
};

export default About;
