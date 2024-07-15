/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./what.module.css";
import style from "../../../_components/coedify-official/landing.module.css";
import Teams from "@/app/_components/Teams/Teams";
import { Button } from "antd";
import Reviews from "@/app/_components/Reviews/Reviews";
import Buttons from "@/app/_common/Button/Buttons";
import DotPattern from "@/app/_common/Dotpattern/Dotpattern";
import { cn } from "@/app/_lib/utils";
import Link from "next/link";

const What = ({ params }: { params: { slug: string } }) => {
  const [tab, setTab] = useState<number>(1);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref1.current) ref1.current.className = tab === 1 ? styles.active : "";
    if (ref2.current) ref2.current.className = tab === 2 ? styles.active : "";
    if (ref3.current) ref3.current.className = tab === 3 ? styles.active : "";
  }, [tab]);

  const handleClick = (num: number) => {
    setTab(num);
    if (ref1.current) ref1.current.className = num === 1 ? styles.active : "";
    if (ref2.current) ref2.current.className = num === 2 ? styles.active : "";
    if (ref3.current) ref3.current.className = num === 3 ? styles.active : "";
  };

  return (
    <>
      <div className={styles.landing}>
        <div className={styles.content} id="landingPage">
          <div className={style.ai_link}></div>
          <div className={style.heading} id="landingHeading1">
            <h1>Accelerate and innovate your business with GenAI</h1>
          </div>
          <div className={style.detail} id="landingHeading2">
            <p>
              Flowbase is the world's largest premium library of Webflow, Figma
              & Framer components and tools. Build better, faster with Flowbase.
            </p>
          </div>
          <div className={style.btns} id="landingHeading3">
            <Buttons label="Schedule Meeting" varient="fill" />
            <Button className={style.btn2}>Learn More</Button>
          </div>
        </div>
        <div className={styles.teams}>
          <p>Loved by next-generation teams</p>
          <Teams />
        </div>
      </div>

      <div className={styles.service}>
        <div className={styles.serv_inner}>
          <div className={styles.title}>
            <h1>SERVICE</h1>
            <h2>
              Build at the intersection of generative AI and human knowledge
            </h2>
          </div>
          <div className={styles.tabs}>
            <div className={styles.tab_back}>
              <div onClick={() => handleClick(1)} ref={ref1}>
                Infra Cost Optimization{" "}
              </div>
              <div onClick={() => handleClick(2)} ref={ref2}>
                Saas Cost Optimization{" "}
              </div>
              <div onClick={() => handleClick(3)} ref={ref3}>
                Automated Debugging
              </div>
            </div>
            <div className={styles.tab_data}>
              {tab == 1 && (
                <div className="flex max-[700px]:block">
                  <div className={styles.left}>
                    <h1>Infra Cost Optimization</h1>
                    <p>
                      Our continuous support and periodic reviews adapt the
                      optimisation strategy as your business evolves, ensuring
                      ongoing efficiency. Partner with us to unlock the full
                      potential of your cloud investments, achieving significant
                      cost savings while maintaining high performance.{" "}
                    </p>
                    <Buttons label="Learn more" varient="fill" />
                  </div>
                  <div className={styles.box}></div>
                </div>
              )}
              {tab == 2 && (
                <div className="flex max-[700px]:block">
                  <div className={styles.left}>
                    <h1>Saas Cost Optimization</h1>
                    <p>
                      Our continuous support and periodic reviews adapt the
                      optimisation strategy as your business evolves, ensuring
                      ongoing efficiency. Partner with us to unlock the full
                      potential of your cloud investments, achieving significant
                      cost savings while maintaining high performance.{" "}
                    </p>
                    <Buttons label="Learn more" varient="fill" />
                  </div>
                  <div className={styles.box}></div>
                </div>
              )}
              {tab == 3 && (
                <div className="flex max-[700px]:block">
                  <div className={styles.left}>
                    <h1>Automated Debugging</h1>
                    <p>
                      Our continuous support and periodic reviews adapt the
                      optimisation strategy as your business evolves, ensuring
                      ongoing efficiency. Partner with us to unlock the full
                      potential of your cloud investments, achieving significant
                      cost savings while maintaining high performance.{" "}
                    </p>
                    <Buttons label="Learn more" varient="fill" />
                  </div>
                  <div className={styles.box}></div>
                </div>
              )}
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className={styles.it_works}>
        <DotPattern
        // className={cn(
        //   "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        // )}
        />
        <div className={styles.innerWorks}>
          <div className={styles.leftInner}>
            <h1>HOW IT WORKS</h1>
            <h2>Build and implement GenAI into your business</h2>
            <p>
              Fieldguide increases margins, revenue, and client satisfaction
              across all advisory and audit engagements.
            </p>
          </div>
          <div className={styles.rightInner}>
            <div className="h-1/4 overflow-hidden">
              <div className="flex gap-[20px]">
                <h1>01</h1>
                <h2>GenAI readiness assessment</h2>
              </div>
              <div className={styles.text}>
                <p>
                  Our in-house solutions experts help you optimize your GenAI
                  investment and implementation strategy.
                </p>
              </div>
            </div>
            <div className="h-1/4 overflow-hidden">
              <div className="flex gap-[20px]">
                <h1>02</h1>
                <h2>Team assembly and project implementation</h2>
              </div>
              <div className={styles.text}>
                <p>
                  Using our vetted technical professional network, we build your
                  fully managed team of developers, data scientists, and more—we
                  handle coordination and operation of your custom engineering
                  team.
                </p>
              </div>
            </div>
            <div className="h-1/4 overflow-hidden">
              <div className="flex gap-[20px]">
                <h1>03</h1>
                <h2>Scale on demand</h2>
              </div>
              <div className={styles.text}>
                <p>
                  Maintain consistent quality control with iterative workflow
                  adaptation and agility as your project needs change.
                </p>
              </div>
            </div>
            <div className="h-1/4 overflow-hidden">
              <div className="flex gap-[20px]">
                <h1>04</h1>
                <h2>Team assembly and project implementation</h2>
              </div>
              <div className={styles.text}>
                <p>
                  Using our vetted technical professional network, we build your
                  fully managed team of developers, data scientists, and more—we
                  handle coordination and operation of your custom engineering
                  team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
      <div className={style.greenPart} id="greenpart">
        <div className={style.innerGreen}>
          <div>
            <h1>Let's Build Together!</h1>
          </div>
          <div>
            <span>
            <Link href='/AboutUs#form'><Buttons label="Schedule Meeting" varient="fill" /></Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default What;
