import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
// import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check if the button should be visible
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`${
        isVisible ? 'visible' : 'invisible'
      } fixed bottom-4 right-4 p-4 bg-gray-800 rounded-full text-white focus:outline-none transition-opacity duration-300`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
