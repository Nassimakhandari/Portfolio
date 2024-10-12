import React from 'react';
import About from './pages/about/About';
import Projects from './pages/projects/projects';
import Skills from './pages/skills/skills';
import Contact from './pages/contact/Contact';

const Index2 = () => {
    return (
        <div>
            <section className=''>
        <About />
      </section>

      <section className='pt-20'>
        <Projects />
      </section>

      <section className='pt-28'>
        <Skills/>
      </section>

      <section className='pt-28'>
        <Contact />
      </section>
        </div>
    );
};

export default Index2;