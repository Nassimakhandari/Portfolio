import React from 'react';
import { Images } from "../../constant";

const About = () => {
  return (
    <div id="About" className="flex flex-col lg:flex-row justify-around items-center w-full p-6 ">
      
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-[10vw] p-6 lg:p-20">
        
        <div className="w-full lg:w-[58vw] text-center lg:text-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-loose">
            LET ME <span className="text-[#E4B1F0]">INTRODUCE</span> <br /> MYSELF
          </h1>

          <p className="text-sm lg:text-base leading-loose mt-6">
            I am an aspiring full-stack web developer with a passion for building dynamic and
            user-friendly applications that enhance user experience and solve real-world problems.
            My journey in web development has equipped me with a solid foundation in both front-end and back-end technologies.
            On the front end, I excel in 
            <span className="font-bold text-[#7E60BF] text-base lg:text-lg"> JavaScript </span> 
            and 
            <span className="font-bold text-[#7E60BF] text-base lg:text-lg"> React</span>, 
            creating interactive and responsive interfaces that engage users and facilitate seamless navigation.
            <br /> 
            My back-end expertise lies in 
            <span className="font-bold text-[#7E60BF] text-base lg:text-lg"> Laravel</span>, where I develop robust and scalable server-side applications,
            ensuring smooth data management and efficient API integration.
          </p>
        </div>

        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mt-8 lg:mt-0">
          <img src={Images.avatar} alt="Avatar" className="rounded-full object-cover w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default About;
