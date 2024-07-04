/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from 'react'
import Cookies from "../Cookies/Cookies";
import style from "../coedify-official/landing.module.css"
import Buttons from '@/app/_common/Button/Buttons';
import { Button } from 'antd';
import EastIcon from "@mui/icons-material/East";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const Hero = () => {
    const [showVideo, setShowVideo] = useState<boolean>(false);
    const [isloading, setIsLoading] = useState<boolean>(false);
    const divRef = useRef(null);

    const handleMouseEnter = () => {
        setShowVideo(true);
        setIsLoading(true);
      };
    
      const handleIframeLoad = () => {
        setIsLoading(false);
      };
    

  return (
    <>
        <div className={style.landing}>
        <Cookies />
        <div className={style.content}>
          <div className={style.ai_link}>
            <div
              className="flex text-[15px] justify-between gap-3 bg-[#151c24] p-1 pl-4  rounded-full max-[600px]:p-2 cursor-pointer"
              id="landingHeading0"
            >
              <p>Read Our Case Studies</p>
              <span>
                <EastIcon />
              </span>
            </div>
          </div>
          <div className={style.heading} id="landingHeading1">
            <h1>Engineering the Future Together</h1>
          </div>
          <div className={style.detail} id="landingHeading2">
            <p>
              Discover CoEdify, we're driven by the art of solving engineering
              challenges. Our B2B focus is your gateway to streamlined
              development, cost reduction, and cutting-edge technology
              solutions. From digital transformation and legacy code refinement
              to seamless AI integration, we're your trusted partner in
              technological innovation.
            </p>
          </div>
          <div className={style.btns} id="landingHeading3">
            <Buttons label="Schedule Meeting" varient="fill"/>
            <Button className={style.btn2}>
              Learn More <KeyboardArrowDownIcon />
            </Button>
          </div>
        </div>
        {!showVideo ? (
          <div onClick={handleMouseEnter} className={style.tempImage}>
            <PlayCircleIcon />
          </div>
        ) : (
          <>
            {isloading && (
              <div className={style.tempImage}>
                <PlayCircleIcon />
              </div>
            )}
            <iframe
              id="landingHeading"
              className={style.image}
              src="https://www.youtube.com/embed/tIJQkR-ofFo?autohide=1&autoplay=1&loop=1&playlist=tIJQkR-ofFo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded YouTube Video"
              onLoad={handleIframeLoad}
            ></iframe>
          </>
        )}
      </div>
    </>
  )
}

export default Hero