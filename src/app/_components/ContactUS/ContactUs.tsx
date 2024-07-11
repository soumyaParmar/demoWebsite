"use client";

import React, { FormEvent, useEffect, useRef, useState } from "react";
import styles from "../../(routes)/AboutUs/about.module.css";
import { inter500 } from "@/app/blogs/_customFonts/inter";
import axios from "axios";
import { FormData } from "@/app/Interfaces/ContactUSFormData";
import { useRouter } from "next/navigation";

const ContactUs: React.FC<FormData> = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    email: "",
    dropdownOption: "", // Initialize dropdown option with an empty string
    message: "",
  });
  const formRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // useEffect(() => {
  //   if (router.asPath.includes("#form")) {
  //     formRef.current?.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [router]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Submit function
  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    // try {
    //   const response = await axios.post("/api/form", formData);
    //   console.log("Form submitted successfully:", response.data);
    //   // Optionally reset form state after successful submission
    //   setFormData({
    //     companyName: "",
    //     email: "",
    //     dropdownOption: "", // Reset dropdown option
    //     message: "",
    //   });
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    //   // Handle errors and update state accordingly
    // }
  }

  return (
    <>
      <div className={styles.contactUs} ref={formRef} id="form">
        <div
          className={`${styles.leftContactUs} ${inter500.className}`}
          id="leftcontactUs"
        >
          <h5>Contact Us</h5>
          <h1>Leave us a message. We’ll handle the rest</h1>
          <p>
            To become the company that customers want, it takes a group of
            passionate people. Get to know the people who lead
          </p>
        </div>
        <div
          className={`${styles.rightContactUs} ${inter500.className}`}
          id="rightcontactUs"
        >
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="companyName">What is your company name?</label>
              <input
                id="companyName"
                name="companyName"
                placeholder="What is your company name?"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">
                What is your business email address?
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="What is your business email address?"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="whatToChoose">What are you looking for?</label>

              <select
                name="whatToChoose"
                id="whatToChoose"
                value={formData.dropdownOption}
                onChange={handleChange}
              >
                <option value="select">Please choose an option</option>
                <option value="volvo">Option 1</option>
                <option value="saab">Option 2</option>
                <option value="mercedes">Option 3</option>
                <option value="audi">Option 4</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Write your message.</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
