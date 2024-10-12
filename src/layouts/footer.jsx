import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#E4B1F0] text-white py-5">
      <div className="max-w-[1240px] mx-auto text-center">
        <h3 className="text-lg font-bold mb-2">Nassima's Portfolio</h3>
        <p className="text-xs mb-4">© {new Date().getFullYear()} Nassima. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
