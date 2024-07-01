/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useRef, useState } from "react";
import style from "./landing.module.css";
import EastIcon from "@mui/icons-material/East";
import { Button } from "antd";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Teams from "@/app/_components/Teams/Teams";
import How from "@/app/_components/How/How";
import Domain from "@/app/_components/Domains/Domain";
import Reviews from "@/app/_components/Reviews/Reviews";
import Service from "@/app/_components/Service/Service";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cookies from "../Cookies/Cookies";
import Forms from "@/app/_common/Forms/Forms";
import Buttons from "@/app/_common/Button/Buttons";

gsap.registerPlugin(ScrollTrigger);

const Coedify: React.FC = () => {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [openPopupform,setOpenPopuform] = useState<boolean>(false);
  const divRef = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  });

  useGSAP(() => {
    gsap.from("#enterprise", {
      y: -300,
      opacity: -5,
      duration: 1,
      scrollTrigger: {
        trigger: "#enterprise",
        scroller: "body",
        start: "top 50%",
      },
    });
    // gsap.from("#greenpart", {
    //   y: -200,
    //   opacity: -5,
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: "#greenpart",
    //     scroller: "body",
    //     start: "top 50%",
    //   },
    // });
  });

  const handleMouseEnter = () => {
    setShowVideo(true);
    setIsLoading(true);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleClick = () =>{
    setOpenPopuform(true);
  }

  return (
    <>
      <div className={style.landing}>
        <Cookies />
        <div className={style.content} ref={divRef}>
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
            <Buttons label="Schedule Meeting"/>
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
      <div className={style.teams}>
        <p>Loved by next-generation teams</p>
        <Teams />
      </div>
      <How />
      <div className={style.enterprise} id="enterprise">
        <div className={style.innerEnter}>
          <h1>FOR ENTERPRISE</h1>
          <h2>Scale your software development team on demand</h2>
          <h3>
            Accelerate your software engineering and close skill gaps with our
            AI-vetted technical professionals.
          </h3>
          <div className={style.individual}>
            <div>
              <h1>Hire Individuals</h1>
              <p>
                Find the right professionals from the world's largest network of
                vetted developers, data scientists, LLM trainers, and more.
              </p>
            </div>
            <div>
              <h1>Hire Technical Teams</h1>
              <p>
                Build an agile team of professionals—seamlessly integrated into
                your organization and workflows.
              </p>
            </div>
          </div>
          <button className={style.btn1} onClick={handleClick}>Hire Professional</button>
          <p>2-week free trial available</p>
        </div>
      </div>
      <Service />
      <Domain />
      <Reviews />
      <div className={style.greenPart} id="greenpart">
        <div className={style.innerGreen}>
          <div>
            <h1>Let's Build Together!</h1>
          </div>
          <div>
            <span>
              <Button className={style.btn1}>Schedule Meeting </Button>
            </span>
          </div>
        </div>
      </div>
      {openPopupform && (
        <Forms setOpenPopuform={setOpenPopuform}/>
      )}
    </>
  );
};

export default Coedify;
