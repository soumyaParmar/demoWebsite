/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useRef, useState } from "react";
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

  return (
    <div>
      <RetroGrid />
      <div className={style.landing}>
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
