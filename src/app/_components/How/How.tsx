/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import Buttons from "@/app/_common/Button/Buttons";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./how.module.css";
import Image from "next/image";
import img1 from "../../_assets/How/Group 1321314572-min.png";


gsap.registerPlugin(ScrollTrigger);

const How: React.FC = () => {
  const router = useRouter();

// for animation
  useGSAP(() => {
    gsap.from("#cloud", {
      y: -200,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#cloud",
        scroller: "body",
        start: "top 95%",
      },
    });
    gsap.from("#image", {
      y: 200,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#cloud",
        scroller: "body",
        start: "top 95%",
      },
    });
  });

  const handleRoute = () => {
    router.push("/expertise/cloud-cost-optimization");
  };
  return (
    <div className={style.how} id="how">
      <div>
        <div className={style.left}>
          <div className="w-[40%] max-[826px]:w-full" id="cloud">
            <h1>Cloud Cost Optimization</h1>
            <p className="pb-3">
            We promise you'll save money, utilize resources effectively, and boost performance. Let's talk – you pay only when we meet our commitments. Our cloud specialists have profound expertise in cloud technologies and shine in optimization. We've proven our success.
            </p>

            <Buttons label="Learn more" varient="fill" onClick={handleRoute}/>
          </div>
          <Image src={img1} alt="" id="image" />
        </div>
      </div>
    </div>
  );
};

export default How;
