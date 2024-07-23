/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Css files and fonts
import styles from "./about.module.css";
import style from "../../_components/coedify-official/landing.module.css";
import style1 from "../../(routes)/expertise/[slug]/expertise.module.css";
import { inter400, inter500 } from "@/app/case-studies/_customFonts/inter";
import blogImage from "../../../../public/blogImage.jpeg";
import CEOImg from "../../_assets/CEO/ceo2.png";
import CS from "../../_assets/OurValues/successful.png";
import innovation from "../../_assets/OurValues/excellence1.png";
import culture from "../../_assets/OurValues/culture.png";
import excellence from "../../_assets/OurValues/excellence.png";
import integrity from "../../_assets/OurValues/integrity.png";

// componenets
import Navbar from "@/app/_common/Navbar/Navbar";
import OurValueCard from "@/app/_components/OurValuesCards/OurValueCard";
import GalleryCarousel from "@/app/_components/AboutCarousel/GalleryCarousel";
import ContactUs from "@/app/_components/ContactUS/ContactUs";
import Buttons from "@/app/_common/Button/Buttons";
import Reviews from "@/app/_components/Reviews/Reviews";
import Footer from "@/app/_common/Footer/Footer";
import useGSAP from "@/app/utils/useGSAP";
import { developer } from "@/app/utils/aboutus";
import { aboutusType } from "@/app/Interfaces/aboutus";
import img from "../../_assets/aboutusa/Globe.png";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const Page: React.FC = () => {

  const router = useRouter();

  // for smooth scrolling
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  });

  // for animations
  useGSAP();

  const handleClick = () => {
    router.push("/aboutus#form");
  };

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
              <Buttons label="Schedule Meeting" varient="fill" onClick={handleClick}/>
            </div>
          </div>
        </div>
        {/* End of hero section */}

        {/* Start of service section */}
        <div className={`${styles.service}`} id="service">
          <div className={`${styles.leftService} ${inter500.className}`}>
            <p>Who we are</p>
            <h1>
              We believe that our work & client opinions define who we truly are
            </h1>
          </div>
          <div className={`${styles.rightService} ${inter400.className}`}>
            <p>
              Founded in 2019, CoEdify Technology has evolved from a small team
              of passionate engineers with over 30 years of collective
              experience into a premier provider of high-quality software
              solutions. We excel in delivering top-tier IT services to clients
              across diverse industries, including finance, healthcare,
              education, and e-commerce.
            </p>
            <br />
            <p>
              Choose CoEdify for unmatched technical expertise, transparent
              collaboration, and a commitment to making your software shine.
              We're not just engineers; we're problem solvers, and we're here to
              engineer the future together.
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
            <h1>Empowering Innovation with Expertise and Collaboration</h1>
          </div>

          <div className={styles.ourValuesCards}>
            <div className={styles.topSection}>
              <OurValueCard
                image={culture}
                teamName="Our Culture"
                somePara="At CoEdify, we believe in the power of teamwork. Our culture of collaboration and mutual support ensures that every project is a success.Together, we achieve more."
              />
              <OurValueCard
                image={innovation}
                teamName="Innovation"
                somePara="We stay at the forefront of technology by embracing new ideas and continuously improving. Our expertise in AI, fintech, SaaS, and cloud infrastructure drives innovation in every project we undertake."
              />
            </div>
            <div className={styles.bottomSection}>
              <OurValueCard
                image={CS}
                teamName="Client Success"
                somePara="Your success is our success. We are committed to delivering solutions that meet your needs and exceed your expectations. When you win, we win."
              />
              <OurValueCard
                image={integrity}
                teamName="Integrity"
                somePara=" We operate with the highest standards of integrity. Trust and transparency are the cornerstones of our business, ensuring long-lasting relationships with our clients."
              />
              <OurValueCard
                image={excellence}
                teamName="Excellence"
                somePara="Excellence is at the heart of everything we do. From in-house training to project delivery, we strive to achieve the highest quality in all our services."
              />
            </div>
          </div>
        </div>
        {/* End of our values section */}

        {/* Start of CEO Intro */}
        <div className={styles.CeoIntro}>
          <div className={styles.leftCeoIntro} id="CEOintroimg">
            <Image src={CEOImg} width={478} height={390} alt="Md nadeem" />
          </div>
          <div className={styles.rightCeoIntro} id="CEOintroright">
            <div className={styles.rightCeoIntroTopSection}>
              <h5 className={inter400.className}>A Word from Our CEO</h5>
              <h1 className={inter500.className}>
                “We&#39;re defining the future of what modern software products
                should look and function like”
              </h1>
              <p className={inter400.className}>
                At CoEdify Technology, we tackle complex challenges and deliver
                innovative solutions that transform businesses. Partner with
                CoEdify and gain a trusted ally committed to your success.
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
            <h1>Meet Our Visionaries and Innovators</h1>
            <p>
              At CoEdify, we believe that exceptional results stem from a team
              of passionate creators, designers, and problem solvers. Our
              diverse group of experts is dedicated to transforming your vision
              into reality with cutting-edge solutions and unparalleled
              expertise. Get to know the brilliant minds driving our success.
            </p>
          </div>
          <div className={styles.dev_outer}>
            <div className={styles.dev_sec}>
              {developer.map((item: aboutusType, index: number) => (
                <div key={index} className={styles.dev_inner}>
                  <div>
                    <Image src={item.img} alt="" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className={styles.sec_name}>
                      <label>{item.name}</label>
                      <span>{item.position}</span>
                    </div>
                    <div className={styles.sec_exp}>
                      <label>Experience</label>
                      <span>{item.experience}</span>
                    </div>
                    <div className={styles.sec_lang}>
                      <label>
                        <Image src={img} alt="" />
                        <span>Speaks</span>
                      </label>
                      {item.speaks.map((item: string, index1: number) => (
                        <span className={styles.sp} key={index1}>
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className={styles.sec_tech}>
                      <label>Tech Stack</label>
                      {item.techStack.map((item: string, index1: number) => (
                        <span key={index1}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
