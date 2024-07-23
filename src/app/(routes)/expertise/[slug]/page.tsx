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


const Expertise = ({ params }: { params: { slug: string } }) => {
  const [title, setTitle] = useState<string>("");
  const router = useRouter();


  useEffect(() => {
    switch (params.slug) {
      case "cloud-cost-optimization": {
        setTitle("Cloud Cost Optimization");
        break;
      }
      case "dedicated-experienced-developers": {
        setTitle("Dedicated Experienced Developers");
        break;
      }
      case "system-design-and-development": {
        setTitle("System Design and Development");
        break;
      }
      case "ai-intergration": {
        setTitle("AI Intergration");
        break;
      }
      case "redesign-and-performance-enhancement": {
        setTitle("Redesign & Performance Enhancement");
        break;
      }
      case "comprehensive-system-audit": {
        setTitle("Comprehensive System Audit");
        break;
      }
      default: {
        setTitle("");
        break;
      }
    }
  }, [params.slug]);

  const handleRoute = () => {
    router.push("/aboutus#form");
  };

  return (
    <div>
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
            <Buttons label="Schedule Meeting" varient="fill" onClick={handleRoute}/>
          </div>
        </div>
        
        <div className={styles.teams}>
          <p>Loved by next-generation teams</p>
          <Teams color="white"/>
        </div>
      </div>
      <div className={styles.outer_service}>
        <div className={styles.inner_service}>
          <div className={styles.service1}>
            <div className={styles.left}>
              <h1>SERVICE</h1>
              <h2>{title}</h2>
              <p>
                Our continuous support and periodic reviews adapt the
                optimisation strategy as your business evolves, ensuring ongoing
                efficiency. Partner with us to unlock the full potential of your
                cloud investments, achieving significant cost savings while
                maintaining high performance.
                <br />
                Accelerate your LLM's reasoning and coding capabilities with
                expert model training.
              </p>
              <div>
                <Buttons label="Learn More" varient="fill" />
              </div>
            </div>
            <div className={styles.box}></div>
          </div>
          <div className={styles.service2}>
            <div className={styles.box}></div>
            <div className={styles.right}>
              <h2>Everything you need. Nothing you don’t</h2>
              <p>
                Per-job pricing ensures that you only pay for what you actually
                use. Your Polymer subscription stays in sync as your company's
                hiring efforts evolve.
                <br />
                Also, when a job post you've paid for is archived, we'll
                automatically add a prorated credit to your account for any
                unused time.
              </p>
            </div>
          </div>
          <div className={styles.service3}>
            <div>
              <h1>01</h1>
              <h2>Introducing the Webflow Boosters App</h2>
              <p>
                Advanced code solutions added directly inside of Webflow at the
                click of a button.
              </p>
            </div>
            <div>
              <h1>02</h1>
              <h2>Introducing the Webflow Boosters App</h2>
              <p>
                Advanced code solutions added directly inside of Webflow at the
                click of a button.
              </p>
            </div>
            <div>
              <h1>03</h1>
              <h2>Introducing the Webflow Boosters App</h2>
              <p>
                Advanced code solutions added directly inside of Webflow at the
                click of a button.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.service_black}>
        <DotPattern/>
        <div className={styles.inner_black}>
          <div className={styles.black_head}>
            <h1>SERVICE</h1>
            <h2>Accelerate and innovate your AI/ML transformation</h2>
            <p>
              Unlock the potential of artificial intelligence and machine
              learning for your products with our experts in scalable AI
              services and solutions—built by in-house engineering experts.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4 max-[700px]:block">
              <div className={styles.grid_box}>
                <div className={styles.lil_box}></div>
                <h1>Save time and reduce errors</h1>
                <p>
                  Get rid of manual tracking and spreadsheets, and get an
                  accurate, and real-time view of your cash.
                </p>
              </div>
              <div className={styles.grid_box}>
                <div className={styles.lil_box}></div>
                <h1>Discover and invest excess cash</h1>
                <p>
                  Uncover all of your idle cash and securely put it to work, on
                  autopilot.
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-3 gap-4 max-[700px]:block">
                <div className={styles.grid_box}>
                  <div className={styles.lil_box}></div>
                  <h1>Our global login</h1>
                  <p>
                    Get rid of manual tracking and spreadsheets, and get an
                    accurate, and real-time view of your cash.
                  </p>
                </div>
                <div className={styles.grid_box}>
                  <div className={styles.lil_box}></div>
                  <h1>Our global login</h1>
                  <p>
                    Get rid of manual tracking and spreadsheets, and get an
                    accurate, and real-time view of your cash.
                  </p>
                </div>
                <div className={styles.grid_box}>
                  <div className={styles.lil_box}></div>
                  <h1>Our global login</h1>
                  <p>
                    Get rid of manual tracking and spreadsheets, and get an
                    accurate, and real-time view of your cash.
                  </p>
                </div>
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
    </div>
  );
};

export default Expertise;
