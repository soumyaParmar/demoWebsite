/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import style from "./how.module.css";
import Image from "next/image";
import img1 from "../../_assets/How/how1.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Buttons from "@/app/_common/Button/Buttons";

gsap.registerPlugin(ScrollTrigger);

const How: React.FC = () => {
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
  return (
    <div className={style.how} id="how">
      <div>
        <div className={style.left}>
          <div className="w-[40%] max-[826px]:w-full" id="cloud">
            <h1>Cloud Cost Optimization</h1>
            <p className="pb-3">
              We guarantee cost savings, efficient resource utilization, and
              enhanced performance. Let's have a conversation; we only charge
              when we deliver on our promises. Our team of cloud experts
              possesses an in-depth understanding of cloud technologies and
              excels in optimization. We've successfully achieved it.
            </p>

            <Buttons label="Learn more"/>
          </div>
          <Image src={img1} alt="" height={300} width={400} id="image" />
        </div>
      </div>
    </div>
  );
};

export default How;
