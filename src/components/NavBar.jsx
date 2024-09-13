import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [bgColor, setBgColor] = useState('bg-transparent');
  let lastScrollTop = 0;

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
      // Scrolling down
      setShowNavbar(false);
      setBgColor('bg-[#05B274]');
    } else {
      // Scrolling up
      setShowNavbar(true);
      setBgColor(currentScrollTop === 0 ? 'bg-transparent' : 'bg-black');
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  };

  useEffect(() => {
    // Add scroll event listener only on larger screens
    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <nav className={`screen-container md:z-50 fixed top-0 left-0 right-0 ${bgColor} transition-colors duration-300`}>
      {/* Only render the navbar content on larger screens */}
      <div className={`pt-10 pb-6 ${showNavbar ? 'block' : 'hidden'} md:flex items-center justify-end border-b`}>
        <ul className="hidden md:flex items-center font-medium text-xl gap-10 mr-48 text-white cursor-pointer">
          <li>Home</li>
          <li>About Us</li>
          <li>Courses</li>
          <li>Gallery</li>
        </ul>
        <button className="font-light text-xl px-6 py-2 rounded-[50px] border border-[#FFFF] text-white hidden md:block">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
