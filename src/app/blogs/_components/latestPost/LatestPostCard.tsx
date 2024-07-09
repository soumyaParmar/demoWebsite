import Image from "next/image";

import styles from "./LatestPostCars.module.css";
import { inter400, inter700 } from "../../_customFonts/inter";

import CardImg from "../../../../../public/cardImg.png";
import { insightsCardData } from "../../Interfaces/interfaceData";

const LatestPostCard: React.FC<insightsCardData> = (props) => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.image}>
            <Image src={CardImg} alt="Card 1" className={styles.image} />
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.topContent}>
            <div className={`${inter400.className} ${styles.category}`}>
              <span>{props.category}</span>
            </div>
            <div className={styles.authorDateContainer}>
              <span className={`${inter400.className} ${styles.author}`}>
                {props.author}
              </span>
              <span className={`${inter400.className} ${styles.date}`}>
                {props.date}
              </span>
            </div>
            <h3 className={`${inter700.className} ${styles.title}`}>
              {props.title}{" "}
            </h3>

            <p className={`${styles.para} ${inter400.className}`}>
              {props.description}
            </p>
          </div>

          <div className={`${inter400.className} ${styles.button}`}>
            Read Article...
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestPostCard;
