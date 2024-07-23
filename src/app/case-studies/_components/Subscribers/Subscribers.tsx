"use client";

import styles from "./Subscriber.module.css";
import { inter400, inter700 } from "../../_customFonts/inter";
import { useEffect, useState } from "react";
import { getData, postData } from "../../../_lib/api";
import { Modal } from "antd";

const Subscribers: React.FC = () => {
  const [email, setEmail] = useState({
    Email: "",
  });

  // useEffect(() => {
  //   async function fetchData(): Promise<void> {
  //     // You can await here
  //     const response = await getData("/visitors");
  //     console.log(response);
  //   }
  //   fetchData();
  // }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setEmail({
      Email: e.target.value,
    });
  };

  async function handleSubmit(): Promise<void> {
    if (email.Email === "") {
      Modal.warning({
        title: "Warning",
        content: "Please fill the email field",
      });
      return;
    }

    const res = await postData("/subscribe", email);
    if (res.status == 200) {
      Modal.success({
        title: "Successfully subscribed",
        content: "Thank you for subscribing",
      });
    } else {
      Modal.error({
        title: "Oops an error occured!",
        content: "Please try again",
      });
    }
    setEmail({ Email: "" });
  }

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
          <input
            type="email"
            placeholder="test@gmail.com"
            value={email.Email}
            name="Email"
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default Subscribers;
