/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "antd";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Css files and fonts
import styles from "./about.module.css";
import style from "../../_components/coedify-official/landing.module.css";
import style1 from "../../(routes)/expertise/[slug]/expertise.module.css";
import { inter400, inter500 } from "@/app/blogs/_customFonts/inter";
import blogImage from "../../../../public/blogImage.jpeg";

// componenets
import Navbar from "@/app/_common/Navbar/Navbar";
import OurValueCard from "@/app/_components/OurValuesCards/OurValueCard";
import Carousels from "@/app/_components/AboutCarousel/Carousels";
import GalleryCarousel from "@/app/_components/AboutCarousel/GalleryCarousel";
import ContactUs from "@/app/_components/ContactUS/ContactUs";
import Buttons from "@/app/_common/Button/Buttons";
import Reviews from "@/app/_components/Reviews/Reviews";
import Footer from "@/app/_common/Footer/Footer";
import { OurValue } from "@/app/Interfaces/ourValues";
import useGSAP from "@/app/utils/useGSAP";

gsap.registerPlugin(ScrollTrigger);

const Page: React.FC = () => {
  // for smooth scrolling
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  });

  // for animations
  useGSAP();

  return (
    <>
      <div className={styles.container}>
        <Navbar flag={false} motionValue={false} />

        {/* Hero Section */}
        <div className={style1.landing}>
          <div className={style1.content} id="landingPage">
            <div className={style.ai_link}></div>
            <div className={style.heading} id="landingHeading1">
              <h1>
                Navigating the Digital Transformation Journey with Excellence
              </h1>
            </div>
            <div className={style.detail} id="landingHeading2">
              <p>
                With a team of seasoned experts, we specialize in tackling
                real-world programming challenges. Whether it's designing
                complex systems, optimizing cloud infrastructure, integrating
                AI, or breathing new life into legacy software, we're your
                dedicated partners in innovation.
              </p>
            </div>
            <div className={style.btns} id="landingHeading3">
              <Buttons label="Schedule Meeting" varient="fill" />
            </div>
          </div>
        </div>
        {/* End of hero section */}

        {/* Start of service section */}
        <div className={`${styles.service}`} id="service">
          <div className={`${styles.leftService} ${inter500.className}`}>
            <p>service</p>
            <h1>
              We believe that our work & client opinions define who we truly are
            </h1>
          </div>
          <div className={`${styles.rightService} ${inter400.className}`}>
            <p>
              The use of machine learning in business is increasing rapidly.
              Smart companies are harnessing the value of their data in machine
              learning models to reduce costs, optimize processes, and increase
              customer satisfaction.
            </p>
            <br />
            <p>
              AI and machine learning have the potential to reshape industries
              ML algorithms can be used in applications across practically all
              sectors, from eCommerce to finance, healthcare to education, and
              cybersecurity to charity.
            </p>
          </div>
        </div>
        {/* End of service section */}

        <div style={{ overflow: "hidden" }}>
          <GalleryCarousel />
        </div>

        {/* Start  of Our Values  */}
        <div className={styles.ourValues} id="values">
          <div className={`${inter500.className} ${styles.ourValuesHeading}`}>
            <h5>Our values</h5>
            <h1>
              Build at the intersection of generative <br /> AI and human
              knowledge
            </h1>
          </div>

          <div className={styles.ourValuesCards}>
            <div className={styles.topSection}>
              <OurValueCard
                teamName="Team First"
                somePara="Discover how we put our team at the heart and support each other."
              />
              <OurValueCard
                teamName="Team First"
                somePara="Discover how we put our team at the heart and support each other."
              />
            </div>
            <div className={styles.bottomSection}>
              <OurValueCard
                teamName="Team First"
                somePara="Discover how we put our team at the heart and support each other."
              />
              <OurValueCard
                teamName="Team First"
                somePara="Discover how we put our team at the heart and support each other."
              />
              <OurValueCard
                teamName="Team First"
                somePara="Discover how we put our team at the heart and support each other."
              />
            </div>
          </div>
        </div>
        {/* End of our values section */}

        {/* Start of CEO Intro */}
        <div className={styles.CeoIntro}>
          <div className={styles.leftCeoIntro} id="CEOintroimg"></div>
          <div className={styles.rightCeoIntro} id="CEOintroright">
            <div className={styles.rightCeoIntroTopSection}>
              <h5 className={inter400.className}>A word from CEO</h5>
              <h1 className={inter500.className}>
                “We&#39;re defining the future of what modern software products
                should look and function like”
              </h1>
              <p className={inter400.className}>
                Our team of experts is committed to tackling the most complex
                challenges and delivering innovative solutions that transform
                businesses.
              </p>
            </div>

            <div className={styles.rightCeoIntroBotttomSection}>
              <p className={inter500.className}>MD Nadeem</p>
              <p className={inter400.className}>Founder & CEO, CoEdify</p>
            </div>
          </div>
        </div>
        {/* End of CEO Intro */}

        {/* Start of Our Team Section */}
        <div className={styles.ourTeam}>
          <div
            className={`${styles.ourTeamTopSection} ${inter500.className}`}
            id="ourTeam"
          >
            <h5>our team</h5>
            <h1>
              Meet our team of creators, designers, and world-class problem
              solvers
            </h1>
            <p>
              To become the company that customers want, it takes a group of
              passionate people. Get to know the people who lead
            </p>
          </div>

          <Carousels />
        </div>
        {/* End of Our Team Section */}

        <Reviews />

        {/*Start of Visit our daily blogs section */}
        <div className={styles.visitBlogs}>
          <div className={styles.leftSectionVisitBlogs} id="leftVisitBlog">
            <h1 className={inter500.className}>
              Meet our team of creators, designers, and world-class problem
              solvers
            </h1>
            <p className={inter400.className}>
              Our team of experts is committed to tackling the most complex
              challenges and delivering innovative solutions that transform
              businesses.
            </p>
            <Buttons label="Learn More" varient={""} />
          </div>
          <div className={styles.rightSectionVisitBlogs} id="rightVisitBlog">
            <Image src={blogImage} width={500} height={400} alt="Blog img" />
          </div>
        </div>

        {/*end of Visit our daily blogs section */}

        {/* Start of Contact Us section */}
        <ContactUs />
        {/* End of contact Us Section */}

        <Footer />
      </div>
    </>
  );
};

export default Page;
