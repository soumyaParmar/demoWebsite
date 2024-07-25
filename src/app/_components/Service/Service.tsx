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
          <h2>Harness the Potential of AI/ML: GenAI and Beyond</h2>
          <h3>
            Unlock the immense potential of AI/ML with our expert GenAI
            solutions. From streamlining processes to enhancing decision-making,
            our integration services empower your business to innovate and
            thrive. Dive into the future of technology and let us guide you
            through the transformative power of AI/ML.
          </h3>
        </div>
        <div className={style.topics} id="topics">
          <div className={style.left}>
            <div className={style.fast}>
              <h1>Gen AI</h1>
              <p>
                Revolutionizing Business Processes with Next-Gen Intelligence.
                Leverage GenAI to streamline operations and enhance
                productivity.
              </p>
            </div>
            <div className={style.fast}>
              <h1>LLM Training</h1>
              <p>
                Empower Your Team with Advanced AI Expertise. Equip your team
                with cutting-edge LLM training for AI proficiency.
              </p>
            </div>
            <div className={style.fast}>
              <h1>ML Models</h1>
              <p>
                Custom Solutions for Complex Challenges. Develop tailored ML
                models to address your unique business needs.
              </p>
            </div>
            <div className={style.fast}>
              <h1>Data Science</h1>
              <p>
                Unlock Insights and Drive Data-Driven Decisions. Utilize data
                science to uncover valuable insights and inform strategic
                decisions.
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
            <p>“We ensure tailored solutions, seamless collaboration, and innovative strategies to meet your unique needs.”</p>
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
              <h1>Our Expertise in AI/ML, Cloud Optimization, and Developer Hiring.</h1>
              <p>
              Leverage our specialized skills in AI/ML, optimize cloud costs, and hire top-tier developers. We provide innovative solutions tailored to your business needs, ensuring efficiency and excellence in every project.
              </p>
              <Buttons label="Learn more" varient="fill" />
            </div>
          </div>
          <div className={style.otherItem}>
            <div className={style.innerItem}>
              <div className={style.box}></div>
              <h1>Understanding Your Unique Needs</h1>
              <p>
              At CoEdify, we start by thoroughly understanding your specific requirements and objectives. Through in-depth discussions, we gain insights into your needs, allowing us to tailor precise solutions that meet your demands.
              </p>
            </div>
          </div>
          <div className={style.otherItem}>
            <div className={style.innerItem}>
              <div className={style.box}></div>
              <h1>The Proposed Solution</h1>
              <p>
              Based on our insights, we provide customized, cost-effective solutions. From software redesign to greenfield development, we present a clear timeline and comprehensive plan, giving you full visibility into scope and cost.
              </p>
            </div>
          </div>
          <div className={style.otherItem}>
            <div className={style.innerItem}>
              <div className={style.box}></div>
              <h1>Integration and Collaboration</h1>
              <p>
              Collaboration is at the heart of our approach. We work closely with clients, ensuring you are an integral part of the process. With full insight at every stage, we deliver value through technical expertise and seamless project execution.
              </p>
            </div>
          </div>
          <div className={style.otherItem}>
            <div className={style.innerItem}>
              <div className={style.box}></div>
              <h1>Ensuring Success through Iteration and Feedback</h1>
              <p>
              We believe in continuous improvement. By regularly iterating and gathering feedback, we refine our solutions to ensure they perfectly align with your evolving business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
