import styles from "./Subscriber.module.css";
import {inter400,inter700} from "../../_customFonts/inter";

const Subscribers: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={`${styles.heading} ${inter700.className}`}>
          Subscribe to our monthly analyst insights newsletter
        </h2>
        <p className={`${styles.para} ${inter400.className}`}>
          Stay on top of emerging trends by joining our newsletter, a monthly
          publication from our leading network of analysts.
        </p>

        <div className={`${styles.inputfield} ${inter400.className}`}>
          <input type="text" placeholder="test@gmail.com" />
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default Subscribers;
