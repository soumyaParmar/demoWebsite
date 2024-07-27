"use client";

import Image from "next/image";
import { Card } from "antd";

import styles from "./Card.module.css";
import { inter400, inter700 } from "@/app/case-studies/_customFonts/inter";
import { insightsCardData } from "@/app/case-studies/Interfaces/interfaceData";

const { Meta } = Card;

const CardComponent: React.FC<insightsCardData> = (props) => {
  let length: number = props.title.split(" ").length;
  let lengthDes: number = props.description.split(" ").length;
  let title: string = props.title.split(" ").slice(0, 10).join(" ");
  if (length > 10) title = title + ".....";

  let description: string = props.description.split(" ").slice(0, 27).join(" ");
  if (lengthDes > 23) description = description + ".....";
  return (
    <>
      <div className={`${styles.cardContainer} ${inter700.className}`}>
        <Image
          src={`${props.img}`}
          alt={props.title}
          className={styles.image}
          width={500}
          height={500}
          // layout="fill"
        />
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.authorDateContainer}>
              <span className={`${inter700.className} ${styles.author}`}>
                {props.author}
              </span>
              <span className={`${inter700.className} ${styles.date}`}>
                {props.date}
              </span>
            </div>
            <h3
              className={`${inter700.className} ${styles.title} ${
                length > 10 ? styles.tooltip : ""
              }`}
              data-title={props.title}
            >
              {title}{" "}
            </h3>

            <div className={`${inter400.className} ${styles.category}`}>
              {props.category.split(" ").map((tag: string, index: number) => (
                <span key={index}>{tag}</span>
              ))}
            </div>

            <Meta
              description={description}
              className={`${styles.para}`}
            />
          </div>

          <div className={`${inter400.className} ${styles.button}`}>
            Read Article...
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
