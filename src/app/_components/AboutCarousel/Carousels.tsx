"use client";

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import styles from "./Carousels.module.css";
import Img from "../../../../public/trail.jpg";
import { inter500 } from "@/app/blogs/_customFonts/inter";
import { TeamMembers } from "@/app/Interfaces/teamMember";

const Carousels: React.FC = () => {
  const settings = {
    className: "center",
    // centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,

    afterChange: function (index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // Team members array
  const teamMembers: TeamMembers[] = [
    {
      img: "",
      name: "Jeqssica Aduha1",
      title: "SEO Master",
    },
    {
      img: "",
      name: "Jetssica Aduha2",
      title: "SEO Master",
    },
    {
      img: "",
      name: "Jerssica Aduha3",
      title: "SEO Master",
    },
    {
      img: "",
      name: "Jessica Aduha4",
      title: "SEO Master",
    },
    {
      img: "",
      name: "Jesusica Aduha5",
      title: "SEO Master",
    },
    {
      img: "",
      name: "Jesvsica Aduha6",
      title: "SEO Master",
    },
  ];

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {teamMembers.map((member: TeamMembers, index: number) => (
          <>
            <div key={index}>
              <div className={styles.sliderImg}>
                <Image src={Img} width={500} height={500} alt="Employee Img" />
              </div>
              <div className={`${styles.sliderText} ${inter500.className}`}>
                <p>{member.name}</p>
                <p>{member.title}</p>
              </div>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default Carousels;
