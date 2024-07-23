"use client";

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import styles from "./GalleryCarousel.module.css";
import slide1 from "../../../../public/slide1.jpeg";
import slide2 from "../../../../public/slide2.jpeg";
import slide3 from "../../../../public/slide3.jpeg";
import { inter500 } from "@/app/blogs/_customFonts/inter";

function GalleryCarousel() {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    initalSlide: 0,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          adaptiveHeight: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          adaptiveHeight: true,
          infinite: true,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          adaptiveHeight: true,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        <div>
          <div className={styles.slide1}>
            <Image src={slide1} width={500} height={500} alt="Employee Img" />
          </div>
        </div>
        <div>
          <div className={styles.slide2}>
            <Image src={slide2} width={500} height={500} alt="Employee Img" />
          </div>
          <div className={`${styles.sliderText} ${inter500.className}`}>
            <p>Our Mission:</p>
            <p>
              At CoEdify, our mission is to provide exceptional engineering
              talent and IT consultation services. Our expertise lies in
              Artificial intelligence, Machine Learning , Devops , Cloud
              infrastructure, Database tuning, and Robust software architecture
              implementing practices.
            </p>
          </div>
        </div>
        <div>
          <div className={styles.slide3}>
            <Image src={slide3} width={500} height={500} alt="Employee Img" />
          </div>
        </div>
        <div>
          <div className={styles.slide4}>
            <Image src={slide2} width={500} height={500} alt="Employee Img" />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default GalleryCarousel;
