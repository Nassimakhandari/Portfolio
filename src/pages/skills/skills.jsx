import React from 'react';
import { ImHtmlFive2 } from "react-icons/im";
import { TbBrandCss3 } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { RiBootstrapLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Skills = () => {
    return (
        <div className='flex flex-col gap-12 justify-center items-center' id='Skills'>
            <h1 className="text-5xl font-bold font-serif"> My <span className="text-[#E4B1F0]">Skills</span></h1>
            <div className='flex flex-wrap gap-16 w-[62%] justify-center'>
                <div className='border-2 p-10 border-[#433878] text-[#e34c26] project-card'><ImHtmlFive2 className='w-24 h-20' /></div>
                <div className='border-2 p-10 border-[#433878] text-[#264de4] project-card'><TbBrandCss3 className='w-28 h-24' /></div>
                <div className='border-2 p-10 border-[#433878] text-[#61DBFB] project-card'><FaReact className='w-28 h-24' /></div>
                <div className='border-2 p-10 border-[#433878] text-[#cd669a] project-card'><FaSass className='w-24 h-20' /></div>
                <div className='border-2 p-10 border-[#433878] text-[#f0db4f] project-card'><FaJs className='w-24 h-20' /></div>
                <div className='border-2 p-10 border-[#433878] text-[#F05340] project-card'><FaLaravel className='w-28 h-24' /></div>
                <div className='border-2 p-10 border-[#433878] text-[#830afa] project-card'><RiBootstrapLine className='w-28 h-24' /></div>
                <div className='border-2 p-10 border-[#433878] text-[#38bdf8] project-card'><RiTailwindCssFill className='w-24 h-20' /></div>
                <div className='border-2 p-10 border-[#433878] text-[#F1502F] project-card'><FaGitAlt className='w-24 h-20' /></div>
                <div className='border-2 p-10 border-[#433878] text-[#24292E] project-card'><FaGithub className='w-24 h-20' /></div>

            </div> 
        </div>
    );
};

export default Skills;