import styles from "./EditiorPickCard.module.css";
import { inter700 } from "../../_customFonts/inter";
import { EditiorPick } from "../../Interfaces/editiorsPick";

const EditiorPickCard: React.FC<EditiorPick> = ({
  category,
  title,
  description,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerText}>
          <div className={`${styles.category} ${inter700.className}`}>
            {category.split(" ").map((tag: string, index: number) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
          <h2 className={`${styles.heading} ${inter700.className}`}>{title}</h2>
          <span className={`${styles.para} ${inter700.className}`}>
            {description}
          </span>
          <div style={{color: "#2aba88"}}>Read Article...</div>
        </div>
      </div>
    </>
  );
};

export default EditiorPickCard;
