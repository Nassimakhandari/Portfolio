import React, { useEffect, useRef, useState } from 'react';
import { Images } from "../../constant";
import '../../index.css';

const Projects = () => {
    const [animate, setAnimate] = useState(false);
    const projectsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                } else {
                    setAnimate(false);
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (projectsRef.current) {
            observer.observe(projectsRef.current);
        }

        return () => {
            if (projectsRef.current) {
                observer.unobserve(projectsRef.current);
            }
        };
    }, []);

    return (
        <>
            <h1 className="text-5xl font-bold font-serif text-center pb-10"> My <span className="text-[#E4B1F0]">Projects</span></h1>

            <div id='Projects' ref={projectsRef} className='flex flex-wrap gap-6 px-4 md:px-28'>
                <div className={`project-card bg-[#faf6fa] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-xs md:max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4 ${animate ? 'animate-slide-left' : ''}`}>
                    <div className="min-h-[256px]">
                        <img src={Images.social} className="w-full h-[35vh] object-cover" alt="Social Media Website" />
                    </div>

                    <div className="p-4 md:p-6">
                        <h3 className="text-[#dd9aec] text-lg md:text-xl font-bold">Social Media Website</h3>
                        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                            This social media platform is a dynamic web application, collaboratively built using <span className='text-[#E4B1F0] text-base'>React</span>. 
                            It allows users to connect, share content, and interact with one another. Designed with a user-friendly interface,
                            the platform was developed as part of a group project aimed at enhancing social interactions and community engagement through 
                            various features.
                        </p>
                        <a href="https://clinquant-klepon-54950b.netlify.app/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-4 py-2 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-[#7E60BF] hover:bg-[#E4B1F0] active:bg-[#7E60BF]">View</a>
                    </div>
                </div>

                <div className={`project-card bg-[#faf6fa] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-xs md:max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4 ${animate ? 'animate-slide-right' : ''}`}>
                    <div className="min-h-[256px]">
                        <img src={Images.delicious} className="w-full h-[35vh] object-cover" alt="Delicious Website" />
                    </div>

                    <div className="p-4 md:p-6">
                        <h3 className="text-[#dd9aec] text-lg md:text-xl font-bold">Delicious Website</h3>
                        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                            The Delicious Restaurant Website is an elegantly crafted online platform designed to highlight the exquisite culinary offerings of a charming restaurant. Built using <span className='text-[#E4B1F0] text-base'>HTML</span> and <span className='text-[#E4B1F0] text-base'>CSS</span>, this website aims to provide an engaging experience for visitors, enticing them to explore the menu and immerse themselves in the restaurant's ambiance.
                        </p>
                        <a href="https://euphonious-liger-d1cb19.netlify.app/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-4 py-2 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-[#7E60BF] hover:bg-[#E4B1F0] active:bg-[#7E60BF]">View</a>
                    </div>
                </div>

                <div className={`project-card bg-[#faf6fa] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-xs md:max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4 ${animate ? 'animate-slide-left' : ''}`}>
                    <div className="min-h-[256px]">
                        <img src={Images.yammy} className="w-full h-[35vh] object-cover" alt="Yummy Website" />
                    </div>

                    <div className="p-4 md:p-6">
                        <h3 className="text-[#dd9aec] text-lg md:text-xl font-bold">Yummy Website</h3>
                        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                            The Yummy Restaurant Website is an elegantly crafted online platform designed to highlight the exquisite culinary offerings of a charming restaurant. Built using <span className='text-[#E4B1F0] text-base'>JavaScript</span>, this website aims to provide an engaging experience for visitors, enticing them to explore the menu and immerse themselves in the restaurant's ambiance.
                        </p>
                        <a href="https://guileless-squirrel-58bb86.netlify.app/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-4 py-2 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-[#7E60BF] hover:bg-[#E4B1F0] active:bg-[#7E60BF]">View</a>
                    </div>
                </div>

                <div className={`project-card bg-[#faf6fa] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-xs md:max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4 ${animate ? 'animate-slide-right' : ''}`}>
                    <div className="min-h-[256px]">
                        <img src={Images.maybelline} className="w-full h-[35vh] object-cover" alt="Maybelline Website" />
                    </div>

                    <div className="p-4 md:p-6">
                        <h3 className="text-[#dd9aec] text-lg md:text-xl font-bold">Cosmetics Website</h3>
                        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                            The Maybelline Cosmetics Website is a modern and visually appealing e-commerce platform designed to showcase Maybelline’s extensive range of beauty products. Built using <span className='text-[#E4B1F0] text-base'>React</span>, this website aims to provide an interactive and seamless shopping experience for makeup enthusiasts and beauty aficionados.
                        </p>
                        <a href="hhttps://magenta-wisp-d58e57.netlify.app/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-4 py-2 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-[#7E60BF] hover:bg-[#E4B1F0] active:bg-[#7E60BF]">View</a>
                    </div>
                </div>

                <div className={`project-card bg-[#faf6fa] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-xs md:max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4 ${animate ? 'animate-slide-left' : ''}`}>
                    <div className="min-h-[256px]">
                        <img src={Images.shop} className="w-full h-[35vh] object-cover" alt="Shop Website" />
                    </div>

                    <div className="p-4 md:p-6">
                        <h3 className="text-[#dd9aec] text-lg md:text-xl font-bold">Shop Website</h3>
                        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                            The Fashion Clothing Shop Website is a stylish and user-friendly online platform designed to showcase a diverse collection of clothing and accessories for men and women. Built using <span className='text-[#E4B1F0] text-base'>React</span>, this website aims to provide a seamless shopping experience, blending modern aesthetics with robust functionality.
                        </p>
                        <a href="https://radiant-longma-30b03c.netlify.app/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-4 py-2 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-[#7E60BF] hover:bg-[#E4B1F0] active:bg-[#7E60BF]">View</a>
                    </div>
                </div>

                <div className={`project-card bg-[#faf6fa] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-xs md:max-w-sm rounded-lg overflow-hidden duration-300 scale-110 mx-auto font-[sans-serif] mt-4 ${animate ? 'animate-slide-right' : ''}`}>
                    <div className="min-h-[256px]">
                        <img src={Images.movie} className="w-full h-[35vh] object-cover" alt="Movie Website" />
                    </div>

                    <div className="p-4 md:p-6">
                        <h3 className="text-[#dd9aec] text-lg md:text-xl font-bold">Movie Website</h3>
                        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                            The Movie Review Website is an engaging platform designed to provide users with information about the latest films, reviews, and ratings. Built using <span className='text-[#E4B1F0] text-base'>JavaScript</span>, this website aims to create a community of movie enthusiasts, enabling them to share their thoughts and insights on various cinematic releases.
                        </p>
                        <a href="https://lucky-froyo-fd1414.netlify.app/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-4 py-2 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-[#7E60BF] hover:bg-[#E4B1F0] active:bg-[#7E60BF]">View</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;

