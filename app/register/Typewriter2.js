import { useState, useEffect } from 'react';

const Typewriter = ({ textWithSize }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let typingInterval;
    if (currentIndex < textWithSize.text.length) {
      typingInterval = setTimeout(() => {
        setDisplayedText((prevText) => prevText + textWithSize.text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100);
    }

    return () => clearTimeout(typingInterval);
  }, [currentIndex, textWithSize]);

  return (
    <h1 className={`font-roboto bold-${textWithSize.size} lg:bold-${parseInt(textWithSize.size) + 24} text-blue-90`}>
      {displayedText}
    </h1>
  );
};

export default Typewriter;
