import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [text, setText] = useState('');
  const fullText = '~/PrepHub'; 
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingSpeed = 130; 
    
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(onComplete, 500);
        }, 800);
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-[#000] transition-opacity duration-500 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex items-center">
        <span className="text-2xl md:text-4xl font-bold text-black dark:text-white font-mono">
          {text}
          <span className="animate-pulse">_</span>
        </span>
      </div>
    </div>
  );
};

export default Preloader;
