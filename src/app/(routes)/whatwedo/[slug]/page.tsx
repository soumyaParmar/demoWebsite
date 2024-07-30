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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { whatContent } from "@/app/utils/what";
import { whatContentTypes } from "@/app/Interfaces/what";

const What = ({ params }: { params: { slug: string } }) => {
  // Filtering out the content on the basis of slug
  const content: whatContentTypes[] = whatContent.filter(
    (c: whatContentTypes) => {
      if (c.slugName === params.slug) return c;
    }
  );
  
  const [tab, setTab] = useState<number>(1);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

  const handleRoute = () => {
    router.push("/aboutus#form");
  };

  return (
    <>
      {/* Hero Section */}
      <div className={styles.landing}>
        <div className={styles.content} id="landingPage">
          <div className={style.ai_link}></div>
          <div className={style.heading} id="landingHeading1">
            <h1>{content[0].mainHeadline}</h1>
          </div>
          <div className={style.detail} id="landingHeading2">
            <p>{content[0].description}</p>
          </div>
          <div className={style.btns} id="landingHeading3">
            <Buttons
              label="Schedule Meeting"
              varient="fill"
              onClick={handleRoute}
            />
          </div>
        </div>
        <div className={styles.teams}>
          <p>Loved by next-generation teams</p>
          <Teams color="white" />
        </div>
      </div>

      {/* Service Section */}
      <div className={styles.service}>
        <div className={styles.serv_inner}>
          <div className={styles.title}>
            <h1>SERVICE</h1>
            <h2>{content[0].serviceHeading}</h2>
          </div>
          <div className={styles.tabs}>
            <div className={styles.tab_back}>
              <div onClick={() => handleClick(1)} ref={ref1}>
                {content[0].serviceTab1Heading}{" "}
              </div>
              <div onClick={() => handleClick(2)} ref={ref2}>
                {content[0].serviceTab2Heading}{" "}
              </div>
              <div onClick={() => handleClick(3)} ref={ref3}>
                {content[0].serviceTab3Heading}
              </div>
            </div>
            <div className={styles.tab_data}>
              {tab == 1 && (
                <div className="flex max-[700px]:block">
                  <div className={styles.left}>
                    <h1>{content[0].serviceTab1Heading}</h1>
                    <p>{content[0].serviceTab1Desc}</p>
                    <div>
                      <Buttons label="Learn more" varient="fill" />
                    </div>
                  </div>
                  <div className={styles.box}></div>
                </div>
              )}
              {tab == 2 && (
                <div className="flex max-[700px]:block">
                  <div className={styles.left}>
                    <h1>{content[0].serviceTab2Heading}</h1>
                    <p>{content[0].serviceTab2Desc}</p>
                    <div>
                      <Buttons label="Learn more" varient="fill" />
                    </div>
                  </div>
                  <div className={styles.box}></div>
                </div>
              )}
              {tab == 3 && (
                <div className="flex max-[700px]:block">
                  <div className={styles.left}>
                    <h1>{content[0].serviceTab3Heading}</h1>
                    <p>{content[0].serviceTab3Desc}</p>
                    <div>
                      <Buttons label="Learn more" varient="fill" />
                    </div>
                  </div>
                  <div className={styles.box}></div>
                </div>
              )}
            </div>
          </div>
          <div></div>
        </div>
      </div>
      {/* How it works */}
      <div className={styles.it_works}>
        <DotPattern />
        <div className={styles.innerWorks}>
          <div className={styles.leftInner}>
            <h1>HOW IT WORKS</h1>
            <h2>{content[0].workHeading}</h2>
            <p>{content[0].workDesc}</p>
          </div>
          <div className={styles.rightInner}>
            <div className="h-1/4 overflow-hidden">
              <div className="flex gap-[20px]">
                <h1>01</h1>
                <h2>{content[0].workStep1Heading}</h2>
              </div>
              <div className={styles.text}>
                <p>{content[0].workStep1Desc}</p>
              </div>
            </div>
            <div className="h-1/4 overflow-hidden">
              <div className="flex gap-[20px]">
                <h1>02</h1>
                <h2>{content[0].workStep2Heading}</h2>
              </div>
              <div className={styles.text}>
                <p>{content[0].workStep2Desc}</p>
              </div>
            </div>
            <div className="h-1/4 overflow-hidden">
              <div className="flex gap-[20px]">
                <h1>03</h1>
                <h2>{content[0].workStep3Heading}</h2>
              </div>
              <div className={styles.text}>
                <p>{content[0].workStep3Desc}</p>
              </div>
            </div>
            <div className="h-1/4 overflow-hidden">
              <div className="flex gap-[20px]">
                <h1>04</h1>
                <h2>{content[0].workStep4Heading}</h2>
              </div>
              <div className={styles.text}>
                <p>{content[0].workStep4Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
      <div className={style.greenPart} id="greenpart">
        <div className={style.innerGreen}>
          <div>
            <h1>Your innovation, our expertise. Let's build together!</h1>
          </div>
          <div>
            <span>
              <Link href="/AboutUs#form">
                <Buttons label="Schedule Meeting" varient="fill" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default What;
