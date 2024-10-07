import React, { useState } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaTwitter} from  "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import { Link } from 'react-scroll'
function Header() {
  const [nav, setNav] = useState(false);
  const handleClick= () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#486ca3] text-gray-300'> 

    <div>
      <h1 className='text-3xl text-yellow-400'>Ahmad</h1>
    </div>

      <ul className='hidden md:flex'>
        <li className='text-2xl'>
          <Link to='home' smooth={true} duration={500}>
          Home
          </Link>
          </li>
        <li className='text-2xl'>         
           <Link to='about' smooth={true} duration={500}>
           About
           </Link>
        </li>
        <li className='text-2xl'>      
           <Link to='skills' smooth={true} duration={500}>
           Skills
           </Link>
        </li>
        <li className='text-2xl'>        
            <Link to='work' smooth={true} duration={500}>
            Works
            </Link>
        </li>
        <li className='text-2xl'>
        <Link to='contact' smooth={true} duration={500}>
        Contacts
        </Link>
        </li>
      </ul>

    <div onClick={handleClick} className='md:hidden z-10'>
      {!nav ? <FaBars /> : <FaTimes />}
    </div>

    <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to='home' smooth={true} duration={500}>
          Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to='about' smooth={true} duration={500}>
           About
           </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick}  to='work' smooth={true} duration={500}>
            Works
            </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick}  to='skills' smooth={true} duration={500}>
           Skills
           </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick}  to='contact' smooth={true} duration={500}>
        Contacts
        </Link>
        </li>
      </ul>

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/ismail-hammad-bb73152b9" target='blank'>
             LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/Hammad153" target='blank'>
             Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href="mailto:hammadismail1546@gmail.com" >
             Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://x.com/compose/post" target='blank'>
             Personal <FaTwitter size={30} />
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Header

