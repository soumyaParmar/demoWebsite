import { inter500, inter400 } from "@/app/case-studies/_customFonts/inter";
import styles from "./OurValueCard.module.css";
import Image from "next/image";

import { OurValue } from "@/app/Interfaces/ourValues";

const OurValueCard: React.FC<OurValue> = (props) => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.topSection}>
          <Image src = {props.image} height= {53} width= {53} alt={props.teamName}/>
        </div>
        <div className={styles.bottomSection}>
          <h2 className={inter500.className}>{props.teamName}</h2>
          <p className={inter400.className}>{props.somePara}</p>
        </div>
      </div>
    </>
  );
};

export default OurValueCard;
