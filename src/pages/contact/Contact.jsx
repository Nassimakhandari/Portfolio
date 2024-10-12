import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Images } from '../../constant';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xqzpves', 'template_pen7cm7', form.current, {
        publicKey: 'gd3PeyPA7DcAgU_yD',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          window.location.reload();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    console.log(form.current);
  };

  return (
    <div className='w-full bg-[#faf6fa] py-16 px-4 flex flex-col md:flex-row' id="Contact">
      <div className='flex-1 flex justify-center items-center'>
        <img src={Images.bg} alt="Contact Image" className="w-full max-w-xs md:max-w-md" />
      </div>
      <div className='flex-1 max-w-[1240px] mx-auto'>
        <h2 className='text-4xl font-bold text-center text-[#7E60BF]'>Contact Me</h2>
        <div className='flex justify-center mt-8'>
          <form ref={form} onSubmit={sendEmail} className='w-full max-w-lg flex flex-col gap-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="name">Full Name</label>
            <input className='ps-5 border w-full h-12 rounded-md focus:outline-none focus:border-[#b084f5]' type='text' name='full_name' placeholder='Enter your full name' required />
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
            <input className='ps-5 border w-full h-12 rounded-md focus:outline-none focus:border-[#b084f5]' type='email' name='email' placeholder='Enter your email' required />
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="message">Message</label>
            <textarea className='ps-5 border w-full h-32 rounded-md focus:outline-none focus:border-[#b084f5] resize-none' name='message' placeholder='Your message here...' required></textarea>
            <button className='bg-[#E4B1F0] hover:bg-[#7E60BF] text-white font-bold py-2 px-10 rounded-full text-lg transition duration-300 ease-in-out' type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
