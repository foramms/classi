import { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let typingInterval;
    if (currentIndex < text.length) {
      typingInterval = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100);
    }

    return () => clearTimeout(typingInterval);
  }, [currentIndex, text]);

  return (
    <h1 className="font-roboto bold-52 lg:bold-76 text-blue-90" >
      {displayedText}
    </h1>
  );
};

export default Typewriter;