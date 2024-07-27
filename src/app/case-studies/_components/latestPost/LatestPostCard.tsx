import Image from "next/image";

import styles from "./LatestPostCars.module.css";

import { inter400, inter700 } from "../../_customFonts/inter";

import { insightsCardData } from "../../Interfaces/interfaceData";

const LatestPostCard: React.FC<insightsCardData> = (props) => {
  let length : number = props.title.split(" ").length;
  let lengthDes : number = props.description.split(" ").length;
  let title: string = props.title.split(" ").slice(0, 7).join(" ");
  if(length > 7)
     title = title + ".....";

  let description: string = props.description.split(" ").slice(0, 15).join(" ");
  if(lengthDes > 15)
    description = description + ".....";

  return (
    <>
      <div className={`${styles.cardContainer} `}>
        <div className={`${styles.leftContainer}`}>
          <div className={styles.image}>
            <Image
              src={props.img}
              alt={props.title}
              className={styles.image}
              width={300}
              height={300}
            />
          </div>
        </div>

        <div className={`${styles.rightContainer}`}>
          <div className={`${styles.topContent}`}>
            <div className={`${inter400.className} ${styles.category}`}>
              <span>{props.category}</span>
            </div>
            <div className={`${styles.authorDateContainer}`}>
              <span className={`${inter400.className} ${styles.author}`}>
                {props.author}
              </span>
              <span className={`${inter400.className} ${styles.date}`}>
                {props.date}
              </span>
            </div>
            <h3 className={`${inter700.className} ${styles.title}`}>
              {title}{" "}
            </h3>

            <p className={`${styles.para} ${inter400.className}`}>
              {description}
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
