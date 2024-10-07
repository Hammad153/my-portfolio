import React from 'react'

import Html from '../assets/html.png';
import Css from '../assets/CSS-Logo.png';
import Javascript from '../assets/JavaScript-logo.png';
import Tailwind from '../assets/images.jpeg';
import Reactlogo from '../assets/react.jpeg';
import Sql  from '../assets/sql.png';
import Express from '../assets/Express.jpeg';
import Mongo from '../assets/Mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-200'>

      <div className='max-w-[1000px] mx-auto p-2 flex flex-col justify-center'>
      <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>Skills</p>
       <p className='py-4'>These are Technologies i`m proficient and work with</p>
      </div>

      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8'>

        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Html} alt="Html icon" />
            <p className='my-2'>HTML</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Css} alt="Html icon" />
            <p className='my-4'>CSS</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Javascript} alt="Html icon" />
            <p className='my-4'>JAVASCRIPT</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt="Html icon" />
            <p className='my-4'>TAILWINDCSS</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Reactlogo} alt="Html icon" />
            <p className='my-4'>REACT</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Sql} alt="Html icon" />
            <p className='my-4'>SQL</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Mongo} alt="Html icon" />
            <p className='my-4'>MONDO DB</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Express} alt="Html icon" />
            <p className='my-4'>EXPRESS JS</p>
        </div>
      </div>

    </div>
  )
}

export default Skills
