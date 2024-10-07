import React from 'react';
import Schoolportal from '../assets/schoolporalImage.png';
import Foody from '../assets/food-landing-page.avif';
import Todo from '../assets/Todo App.jpeg';
import QuoteGenerator from '../assets/Quote genrator.png';
import DiceGame from '../assets/Dice game.jpeg';
import DrumKit from '../assets/Drum kit.jpeg';


const Works = () => {
  return (
    <div name='work' className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>Work</p>
                <p>Here`s is a brief view to some of my recent works, checkout!!</p>
            </div>

            <div className='grid sm:grid-cols-3 md-grid-cols-2 gap-4'>
                <div style={{backgroundImage: `url(${Schoolportal})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto mb-5 content-div'>

                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
 A school portal
                    </span>
                  <div className='pt-0 text-center'>
                    <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a  href="https://github.com/Hammad153/University-portal.git" target="_blank" rel="noopener noreferrer">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                      </button>
                    </a>
                  </div>
                  </div>
                  </div>

                  <div style={{backgroundImage: `url(${Foody})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto mb-5 content-div'>

                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
 Foody website
                    </span>
                  <div className='pt-0 text-center'>
                    <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="https://github.com/Hammad153/Foody-site" target='blank'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                 
                  </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${Todo})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto mb-5 content-div'>

                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
Todo List App
                    </span>
                  <div className='pt-0 text-center'>
                    <a href="https://my-todo-app-gold-phi.vercel.app/" target=' blank'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="https://github.com/Hammad153/TodoList-App">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                  </div>
                  </div>

            </div>

            <div className='grid sm:grid-cols-3 md-grid-cols-2 gap-4'>
                <div style={{backgroundImage: `url(${QuoteGenerator})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto mb-5 content-div'>

                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
 Random Qoute Generator
                    </span>
                  <div className='pt-0 text-center'>
                    <a href="https://random-quote-generator-seven-ashen.vercel.app/" target='blank'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="https://github.com/Hammad153/Random-quote-Generator" target='blank'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                  </div>
                  </div>

                  <div style={{backgroundImage: `url(${DiceGame}`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto mb-5 content-div'>

                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
 JS Dice Game 
                    </span>
                  <div className='pt-0 text-center'>
                    <a href="https://dice-game-i6kj.vercel.app/" target='blank'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="https://github.com/Hammad153/Dice-Game-" target='blank'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                 
                  </div>
                </div>
            </div>
            

            <div style={{backgroundImage: `url(${DrumKit})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto mb-5 content-div'>

                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
 Drum Kit App
                    </span>
                  <div className='pt-0 text-center'>
                    <a href="https://drum-kit-app-nu.vercel.app/" target='blank'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="https://github.com/Hammad153/Drum-kit-app" target='blank'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                  </div>
                  </div>

                  </div>

        </div>
    </div>
  )
}

export default Works
