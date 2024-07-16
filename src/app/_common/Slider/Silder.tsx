import React from "react";
import styles from "./slider.module.css";

interface propComp {
  data: Array<object>;
}

export const Silder: React.FC<propComp> = ({ data }) => {
  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {data.map((item: any, index: number) => (
          <div key={index} className={styles.slide}>
            {item.item}
          </div>
        ))}
        {data.map((item: any, index: number) => (
          <div key={index} className={styles.slide}>
            {item.item}
          </div>
        ))}
        {data.map((item: any, index: number) => (
          <div key={index} className={styles.slide}>
            {item.item}
          </div>
        ))}
      </div>
    </div>
  );
};
