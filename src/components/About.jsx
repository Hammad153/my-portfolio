import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-0 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>About</p>
          </div>

          <div></div>
          </div>

          <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='text-3xl font-bold sm:text-right'>
            <p className='max-w-[1000px]'>Hi, i`m Ahmad, a FullStack developer, look around my portfolio website and enjoy the survey</p>
            </div>

            <div>
              <p>I`m Ahmad, a FullStack developer with a passion for building user-friendly websites, crafting engaging digital experiences, solving complex problems with code, i`m driven by a desire to create innovative solutions, help business grow online, make a positive impact with technology </p>
            </div>
          </div>
      </div>
    </div>
     
  )
}

export default About
