/* eslint-disable react/no-unescaped-entities */
import React from "react";
import style from "./service.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "antd";
import Buttons from "@/app/_common/Button/Buttons";

gsap.registerPlugin(ScrollTrigger);

const Service: React.FC = () => {
  useGSAP(() => {
    // gsap.from("#heading_service", {
    //   x: -1000,
    //   duration: 1,
    //   opacity: -5,
    //   scrollTrigger: {
    //     trigger: "#heading_service",
    //     scroller: "body",
    //     start: "top 70%",
    //   },
    // });
    // gsap.from("#topics", {
    //   x: -1000,
    //   duration: 1,
    //   opacity: -5,
    //   scrollTrigger: {
    //     trigger: "#topics",
    //     scroller: "body",
    //     start: "top 70%",
    //   },
    // });
    gsap.from("#smallDetail", {
      x: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#smallDetail",
        scroller: "body",
        start: "top 70%",
      },
    });
    gsap.from("#otherItem", {
      x: -100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#otherItem",
        scroller: "body",
        start: "top 30%",
      },
    });
  });

  return (
    <div className={style.service}>
      <div className={style.innerService}>
        <div className={style.heading} id="heading_service">
          <h1>SERVICE</h1>
          <h2>Innovate with AI/ML Transformation</h2>
          <h3>
            Empower your products with intelligence through our AI integration
            services. We seamlessly blend artificial intelligence into your
            software, making it smarter and more efficient. Our experts are
            well-versed in AI technologies, ensuring a seamless transition to
            intelligent solutions.
          </h3>
        </div>
        <div className={style.topics} id="topics">
          <div className={style.left}>
            <div className={style.fast}>
              <h1>Generative AI</h1>
              <p>
                Create stunning mobile funnels quickly and easily. Now you can
                build in minutes, not hours.
              </p>
            </div>
            <div className={style.fast}>
              <h1>LLM Training</h1>
              <p>
                Create stunning mobile funnels quickly and easily. Now you can
                build in minutes, not hours.
              </p>
            </div>
            <div className={style.fast}>
              <h1>ML Model Development</h1>
              <p>
                Create stunning mobile funnels quickly and easily. Now you can
                build in minutes, not hours.
              </p>
            </div>
            <div className={style.fast}>
              <h1>Data Engineering</h1>
              <p>
                Create stunning mobile funnels quickly and easily. Now you can
                build in minutes, not hours.
              </p>
            </div>
          </div>
          <div className="w-1/2 flex justify-end max-[700px]:w-full max-[700px]:justify-start max-[700px]:pt-[30px]">
            <div className={style.right}></div>
          </div>
        </div>
        <div className={style.smallDetail} id="smallDetail">
          <div className={style.leftDetail}>
            <h1>How We Work</h1>
            <p>We work with unwavering commitment to meet your needs</p>
          </div>
          <div className={style.rightDetail}>
            <p>
              Accelerate your customer success, internal productivity, market
              share, and more with GenAI technology.
            </p>
          </div>
        </div>
        <div className={style.grid} id="otherItem">
          <div className={style.item1}>
            <div className="flex flex-col gap-3">
              <h1>Accounting software that handles it allfor faster growth.</h1>
              <p>
                Accelerate your customer success, internal productivity, market
                share, and more with GenAI technology.
              </p>
              <Buttons label="Learn more" varient="fill"/>
            </div>
          </div>
          <div className={style.otherItem}>
            <div className={style.innerItem}>
              <div className={style.box}></div>
              <h1>Understanding Your Unique Needs</h1>
              <p>
                At CoEdify, our process commences by understanding your specific
                requirements and objectives. We engage in thorough discussions
                to gain deep insights into your needs. Our approach combines
                comprehensive analysis and in-depth research to ensure that our
                solutions are precisely tailored to meet your demands.
              </p>
            </div>
          </div>
          <div className={style.otherItem}>
            <div className={style.innerItem}>
              <div className={style.box}></div>
              <h1>The Proposed Solution</h1>
              <p>
                Building upon our insights, we provide customized solutions. Be
                it software redesign, greenfield development, or any other
                service, we engineer cost-effective and robust solutions. We
                present a clear timeline and a comprehensive solution, providing
                you with full insight into the scope and cost.
              </p>
            </div>
          </div>
          <div className={style.otherItem}>
            <div className={style.innerItem}>
              <div className={style.box}></div>
              <h1>Integration and Collaboration</h1>
              <p>
                Collaboration is a core principle of our approach. We work
                closely with our clients, ensuring that you're an integral part
                of the process. You'll have full insight into the project at
                every stage, from inception to delivery, as we demonstrate
                technical expertise and deliver value throughout the project's
                journey.
              </p>
            </div>
          </div>
          <div className={style.otherItem}>
            <div className={style.innerItem}>
              <div className={style.box}></div>
              <h1>Customized enterprise LLMs</h1>
              <p>
                We build bespoke large language models tailored to your business
                needs with advanced techniques, like retrieval augmented
                generation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
