"use client";

import React, { FormEvent, useEffect, useRef, useState } from "react";
import styles from "../../(routes)/AboutUs/about.module.css";
import { inter500 } from "@/app/blogs/_customFonts/inter";
import * as api from "../../_lib/api";
import { FormData } from "@/app/Interfaces/ContactUSFormData";
import { useRouter } from "next/navigation";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    CompanyName: "",
    CompanyEmailAddress: "",
    LookingFor: "",
    Message: "",
  });
  const formRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

    const res = await api.postData("/contact", formData);
    console.log(res);
  }

  return (
    <>
      <div className={styles.contactUs} ref={formRef} id="form">
        <div
          className={`${styles.leftContactUs} ${inter500.className}`}
          id="leftcontactUs"
        >
          <h5>Contact Us</h5>
          <h1>Leave us a message. We&#39;ll handle the rest</h1>
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
                name="CompanyName"
                placeholder="What is your company name?"
                value={formData.CompanyName}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">
                What is your business email address?
              </label>
              <input
                id="email"
                name="CompanyEmailAddress"
                type="email"
                value={formData.CompanyEmailAddress}
                onChange={handleChange}
                placeholder="What is your business email address?"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="whatToChoose">What are you looking for?</label>

              <select
                name="LookingFor"
                id="whatToChoose"
                value={formData.LookingFor}
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
                name="Message"
                placeholder="Write your message."
                value={formData.Message}
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
