/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useState } from "react";
import styles from "./expertise.module.css";
import style from "../../../_components/coedify-official/landing.module.css";
import Buttons from "@/app/_common/Button/Buttons";
import { Button } from "antd";
import Teams from "@/app/_components/Teams/Teams";
import Reviews from "@/app/_components/Reviews/Reviews";
import Link from "next/link";
import DotPattern from "@/app/_common/Dotpattern/Dotpattern";
import { useRouter } from "next/navigation";
import { expertiseContent } from "@/app/utils/expertise";
import { expertiseContentTypes } from "@/app/Interfaces/expertise";

const Expertise = ({ params }: { params: { slug: string } }) => {
  // const [title, setTitle] = useState<string>("");
  const router = useRouter();

  // useEffect(() => {
  //   switch (params.slug) {
  //     case "cloud-cost-optimization": {
  //       setTitle("Cloud Cost Optimization");
  //       break;
  //     }
  //     case "dedicated-experienced-developers": {
  //       setTitle("Dedicated Experienced Developers");
  //       break;
  //     }
  //     case "system-design-and-development": {
  //       setTitle("System Design and Development");
  //       break;
  //     }
  //     case "ai-intergration": {
  //       setTitle("AI Intergration");
  //       break;
  //     }
  //     case "redesign-and-performance-enhancement": {
  //       setTitle("Redesign & Performance Enhancement");
  //       break;
  //     }
  //     case "comprehensive-system-audit": {
  //       setTitle("Comprehensive System Audit");
  //       break;
  //     }
  //     default: {
  //       setTitle("");
  //       break;
  //     }
  //   }
  // }, [params.slug]);

  const handleRoute = () => {
    router.push("/aboutus#form");
  };

  // Filtering out the content on the basis of slug
  const content:expertiseContentTypes[] = expertiseContent.filter((c:expertiseContentTypes) => {
    if (c.slugName === params.slug) return c;
  });

  return (
    <div>
      {/* hero section */}
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
      {/* service section */}
      <div className={styles.outer_service}>
        <div className={styles.inner_service}>
          <div className={styles.service1}>
            <div className={styles.left}>
              <h1>SERVICE</h1>
              <h2>{content[0].serviceHeading1}</h2>
              <p>{content[0].serviceDesc1}</p>
              <div>
                <Buttons label="Learn More" varient="fill" />
              </div>
            </div>
            <div className={styles.box}></div>
          </div>
          <div className={styles.service2}>
            <div className={styles.box}></div>
            <div className={styles.right}>
              <h2>{content[0].serviceHeading2}</h2>
              <p>{content[0].serviceDesc2}</p>
            </div>
          </div>
          <div className={styles.service3}>
            <div>
              <h1>01</h1>
              <h2>{content[0].step1Heading}</h2>
              <p>{content[0].step1Desc}</p>
            </div>
            <div>
              <h1>02</h1>
              <h2>{content[0].step2Heading}</h2>
              <p>{content[0].step2Desc}</p>
            </div>
            <div>
              <h1>03</h1>
              <h2>{content[0].step3Heading}</h2>
              <p>{content[0].step3Desc}</p>
            </div>
          </div>
        </div>
      </div>
      {/* service black section */}
      <div className={styles.service_black}>
        <DotPattern />
        <div className={styles.inner_black}>
          <div className={styles.black_head}>
            <h1>SERVICE</h1>
            <h2>{content[0].blackSecHeading}</h2>
            <p>{content[0].blackSecDesc}</p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4 max-[700px]:block">
              <div className={styles.grid_box}>
                <div className={styles.lil_box}></div>
                <h1>{content[0].blackSecHeading1}</h1>
                <p>{content[0].blackSecDesc1}</p>
              </div>
              <div className={styles.grid_box}>
                <div className={styles.lil_box}></div>
                <h1>{content[0].blackSecHeading2}</h1>
                <p>{content[0].blackSecDesc2}</p>
              </div>
              <div className="col-span-2 grid grid-cols-3 gap-4 max-[700px]:block">
                <div className={styles.grid_box}>
                  <div className={styles.lil_box}></div>
                  <h1>{content[0].blackSecHeading3}</h1>
                  <p>{content[0].blackSecDesc3}</p>
                </div>
                <div className={styles.grid_box}>
                  <div className={styles.lil_box}></div>
                  <h1>{content[0].blackSecHeading4}</h1>
                  <p>{content[0].blackSecDesc4}</p>
                </div>
                <div className={styles.grid_box}>
                  <div className={styles.lil_box}></div>
                  <h1>{content[0].blackSecHeading5}</h1>
                  <p>{content[0].blackSecDesc5}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
      {/* Green part */}
      <div className={style.greenPart} id="greenpart">
        <div className={style.innerGreen}>
          <div>
            <h1>Your innovation, our expertise. Let's build together!</h1>
          </div>
          <div>
            <span>
              <Link href="/aboutus#form">
                <Buttons label="Schedule Meeting" varient="fill" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
