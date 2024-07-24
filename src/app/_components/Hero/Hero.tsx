/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useRef, useState,CSSProperties  } from "react";
import Cookies from "../Cookies/Cookies";
import style from "../coedify-official/landing.module.css";
import Buttons from "@/app/_common/Button/Buttons";
import EastIcon from "@mui/icons-material/East";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import RetroGrid from "@/app/_common/Retrogrid/RetroGrid";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [src, setSrc] = useState(
    'https://www.youtube.com/embed/tIJQkR-ofFo?autohide=1&loop=1&playlist=tIJQkR-ofFo'
  );
  const divRef = useRef(null);
  const router = useRouter();

  const handleMouseEnter = () => {
    setShowVideo(true);
    setIsLoading(true);
    setSrc(
      'https://www.youtube.com/embed/tIJQkR-ofFo?autohide=1&autoplay=1&loop=1&playlist=tIJQkR-ofFo'
    );
  };

  const handleMouseExit = () => {
    setShowVideo(false);
    setIsLoading(false);
    setSrc(
      'https://www.youtube.com/embed/tIJQkR-ofFo?autohide=1&loop=1&playlist=tIJQkR-ofFo'
    );
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleClick = () => {
    router.push("/aboutus#form");
  };


  const videoStyles: CSSProperties  = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transform: 'translate(-50%, -50%)',
    zIndex: '-1',
  };

  const containerStyles: CSSProperties  = {
    position: 'relative',
    width: '100%',
    height: '100vh',
  };

  const contentStyles: CSSProperties  = {
    position: 'relative',
    zIndex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
  };

  const overlayStyles: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: -1,
  };

  return (
    <div style={containerStyles}>
       <video style={videoStyles} autoPlay muted loop>
        <source src="/b.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={overlayStyles}></div>
      <div  style={contentStyles}>
        <Cookies />
        <div className={style.content}>
          <div className={style.ai_link}>
            <Link href={"/case-studies"}>
              <div
                className="flex text-[15px] justify-between gap-3 bg-[#151c24] p-1 pl-4  rounded-full max-[600px]:p-2 cursor-pointer"
                id="landingHeading0"
              >
                <p>Read Our Case Studies</p>
                <span>
                  <EastIcon />
                </span>
              </div>
            </Link>
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
            <Buttons
              label="Schedule Meeting"
              varient="fill"
              size="big"
              onClick={handleClick}
            />
          </div>
        </div>
        {!showVideo ? (
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} className={style.tempImage}>
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
              src={src}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded YouTube Video"
              onLoad={handleIframeLoad}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseExit}
            ></iframe>
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
