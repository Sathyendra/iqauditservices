import { useState, useEffect } from "react";
import "./RollingWords.css"; // Import the separate CSS file
import HeaderComponent from "./HeaderComponent";

import bgVideo from './assets/background-video.mp4';

const RollingWords = ({ words=[{}], interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <>
    <div className="video-container">
      <HeaderComponent />
        <video className='videoTag' autoPlay loop muted>
            <source src={bgVideo} type='video/mp4' />
        </video>
        <div className="overlay"></div>
        <div className="rolling-container">
      <div>Experts in{" "}</div>
      <div className="rolling-word-wrapper">
        {words.map((word: any, index) => (
          <div
            key={index}
            className={`rolling-word ${index === activeIndex ? "visible" : ""}`}
          >
            {word}
          </div>
        ))}
      </div>
      <a className="credits" href="https://www.vecteezy.com/free-videos/auditor">Auditor Stock Videos by Vecteezy</a>
    </div>
      </div>
    </>
  );
};

export default RollingWords;
