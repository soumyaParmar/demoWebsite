/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useRef, useState } from "react";
import style from "./landing.module.css";
import { Button } from "antd";
import Teams from "@/app/_components/Teams/Teams";
import How from "@/app/_components/How/How";
import Domain from "@/app/_components/Domains/Domain";
import Reviews from "@/app/_components/Reviews/Reviews";
import Service from "@/app/_components/Service/Service";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Forms from "@/app/_common/Forms/Forms";
import Hero from "../Hero/Hero";

gsap.registerPlugin(ScrollTrigger);

const Coedify: React.FC = () => {
  const [openPopupform, setOpenPopuform] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  });

  useGSAP(() => {
    gsap.from("#enterprise", {
      y: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#enterprise",
        scroller: "body",
        start: "top 30%",
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

  const handleClick = () => {
    setOpenPopuform(true);
  };

  return (
    <>
      <Hero />
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
          <button className={style.btn1} onClick={handleClick}>
            Hire Professional
          </button>
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
      {openPopupform && <Forms setOpenPopuform={setOpenPopuform} />}
    </>
  );
};

export default Coedify;
