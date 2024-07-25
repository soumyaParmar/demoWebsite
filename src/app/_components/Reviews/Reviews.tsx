import { Carousel } from "antd";
import React from "react";
import { review } from "../../utils/reviews";
import { reviewType } from "@/app/Interfaces/reviews";
import Image from "next/image";
import style from "./reviews.module.css";

const Reviews = () => {
  return (
    <div className={style.review}>
      <div className={style.innerLayer}>
        <div className={style.heading}>
          <h1>CUSTOMER REVIEW</h1>
          <h2>Hear from our satisfied clients about us
          </h2>
        </div>
        <Carousel autoplay className={style.carousel} dots>
          {review.map((item: reviewType, index: number) => (
            <div key={index} className={style.reviewerLayer}>
              <div className={style.image}>
                <Image src={item.image} alt="" width={450} height={300} />
              </div>
              <div className={style.detail}>
                <div>
                  <h1>{item.comment}</h1>
                </div>
                <div className={style.personData}>
                  <p>{item.title}</p>
                  <span>{item.company}</span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
