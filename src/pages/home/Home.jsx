import React from 'react';
import { Images } from '../../constant';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsFillFilePersonFill } from "react-icons/bs";
import Index2 from '../../index2';
import Typewriter from 'typewriter-effect';

function Home() {

  return (
    <section id="Home" className="font-serif">
      <div className='flex flex-col-reverse lg:flex-row justify-around items-center min-h-[100vh] w-full bg-[#faf6fa] pt-24 lg:pt-48'>
        <div className='w-full lg:w-[48%] flex flex-col gap-4 mb-12 lg:mb-28 px-4 lg:px-0 animate-slide-left'>
          <div >
            <h1 className="flex gap-2 text-3xl lg:text-4xl font-semibold">Hello 👋🏻</h1>
          </div>
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold ">
              I’m <span className="text-[#E4B1F0]">Nassima</span>
            </h1>
            <h1 className="text-4xl lg:text-6xl font-bold ">
              <Typewriter
                options={{
                  strings: ['Full Stack Developer'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </h1>
          </div>

          <div>
            <p className="text-gray-400 text-sm lg:text-base ">
              Hi, I’m a full-stack developer passionate about crafting intuitive and dynamic web applications. With expertise in JavaScript, React, and Laravel
            </p>
          </div>

          <div className='flex gap-3 items-center'>
            <a href="https://github.com/Nassimakhandari" target='blank'><FaGithub className='w-6 h-6 lg:w-8 lg:h-8 text-[#E4B1F0]' /></a>
            <a href="https://www.linkedin.com/in/nassima-khandari-b39238244/" target='blank'><FaLinkedin className='w-6 h-6 lg:w-8 lg:h-8 text-[#E4B1F0]' /></a>
            <a href="https://drive.google.com/file/d/1oHgkjaqGAU2Db9apNo4Yuy82YHQ1P1Vf/view?usp=sharing" target='blank' download="Nassima-CV.pdf">
              <BsFillFilePersonFill className='w-8 h-8 lg:w-10 lg:h-8 text-[#E4B1F0]' />
            </a>
          </div>
        </div>

        <div className="animate-slide-right pb-8 lg:pb-[22vh]">
          <img
            src={Images.profile}
            alt="Nassima Avatar"
            className="object-cover rounded-full w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] border-4 lg:border-8 border-[#E4B1F0] shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>

      </div>

      <Index2 />

    </section>
  );
};
export default Home;

