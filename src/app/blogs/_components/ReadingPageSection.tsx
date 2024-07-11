import styles from "../(routes1)/readingPage.module.css";
import { objectData } from "../Interfaces/trendingData";
import { inter700 } from "../_customFonts/inter";
import Image from "next/image";

const ReadingPageSection: React.FC<objectData> = ({ objData }) => {
  return (
    <div className={`${styles.imageTextContainer} ${inter700.className}`}>
      <Image src={objData.obj.image} alt={objData.obj.title} width={500} height={500} />

      <div className={styles.category}>
        {objData.obj.category.split(" ").map((c: string, i: number) => (
          <span key={i}>{c}</span>
        ))}
        
      </div>

      <h1 className={styles.heading}>{objData.obj.title}</h1>
      <div className={styles.authorDateContainer}>
        <span>By {objData.obj.author}</span>
        <span>{objData.obj.date}</span>
      </div>
    </div>
  );
};

export default ReadingPageSection;
