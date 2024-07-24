"use client";

import React, { FormEvent, useEffect, useRef, useState } from "react";
import styles from "../../(routes)/aboutus/about.module.css";
import { inter500 } from "@/app/case-studies/_customFonts/inter";
import * as api from "../../_lib/api";
import { FormData } from "@/app/Interfaces/ContactUSFormData";
import { useRouter, useSearchParams } from "next/navigation";
import { Modal } from "antd";
import Buttons from "@/app/_common/Button/Buttons";

interface Window {
  Calendly: any;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    CompanyName: "",
    CompanyEmailAddress: "",
    LookingFor: "",
    Message: "",
  });
  const formRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // for setting up the calendly
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);


  const openCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/shraddha-coedify/meet-and-greet",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
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

    if (
      !formData.CompanyName ||
      !formData.CompanyEmailAddress ||
      !formData.LookingFor
    ) {
      Modal.warning({
        title: "Warning",
        content: "Please fill all required fields",
      });
      return;
    }

    const res = await api.postData("/contact", formData);
    if ("data" in res && res.data.status == "Success") {
      Modal.success({
        title: "Successfully submitted",
        content: "Thank you",
      });
    } else {
      Modal.error({
        title: "Oops an error occured!",
        content: "Please try again",
      });
    }
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

          <div>
            <p
              style={{
                fontSize: "1.5rem",
                marginTop: "3rem",
                marginBottom: "3rem",
              }}
            >
              OR
            </p>

            <button
              type="submit"
              className={` ${styles.button1}`}
              onClick={openCalendlyPopup}
            >
              Schedule a Call
            </button>
          </div>
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
                <option value="Hire Developer">Hire Developer</option>
                <option value="Cloud cost Optimization">
                  Cloud cost Optimization
                </option>
                <option value="AI/ML">AI/ML</option>
                <option value="Other">Other</option>
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

            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
