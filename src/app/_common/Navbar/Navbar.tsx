"use client";

import React, { useRef, useState } from "react";
import styles from "./navbar.module.css";
import { Button, Dropdown, MenuProps, Select, Space } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import logo from "../../_assets/background/logo.png";
import Image from "next/image";
import Buttons from "../Button/Buttons";
import { useMotionValueEvent, useScroll } from "framer-motion"

const Navbar: React.FC = () => {
  const devref = useRef<HTMLDivElement>(null);
  const devref1 = useRef<HTMLDivElement>(null);
  const devref2 = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [nav,setNav] = useState<boolean>(false);

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if(latest > 100){
      setNav(true);
    }else{
      setNav(false);
    }
  })

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link href="/whatwedo/Cloud_Computing">
          <div className={styles.what}>
            <div className={styles.box}></div>
            <div>
              <h1>Cloud Computing</h1>
              <p>
                Powerful options to security authenticate and manage your users
              </p>
            </div>
          </div>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link href="/whatwedo/AI_ML">
          <div className={styles.what}>
            <div className={styles.box}></div>
            <div>
              <h1>AI/ML</h1>
              <p>
                Powerful options to security authenticate and manage your users
              </p>
            </div>
          </div>
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link href="/whatwedo/Hire_Professional">
          <div className={styles.what}>
            <div className={styles.box}></div>
            <div>
              <h1>Hire Professional</h1>
              <p>
                Powerful options to security authenticate and manage your users
              </p>
            </div>
          </div>
        </Link>
      ),
    },
  ];

  const handleMenu = () => {
    if (!open && devref.current && devref1.current && devref2.current) {
      setOpen(true);
      devref.current.style.display = "block";
      devref.current.style.height = "100vh";
      devref1.current.style.display = "block";
      devref2.current.style.display = "block";
    } else if (open && devref.current && devref1.current && devref2.current) {
      setOpen(false);
      devref.current.style.height = "80px";
      devref1.current.style.display = "none";
      devref2.current.style.display = "none";
    }
  };

  return (
    <>
      <div className={nav ? styles.nav_outer2 : styles.nav_outer} ref={devref}>
        <div className={styles.small}>
          <div className={styles.logo}>
            <Link href="/"><Image src={logo} alt="coedify" /></Link>
          </div>
          <div className={styles.menu} onClick={handleMenu}>
            <MenuIcon fontSize="large" />
          </div>
        </div>
        <div className={styles.nav_innerOne} ref={devref1}>
          <Dropdown
            menu={{ items }}
            className={styles.drop}
            overlayClassName={styles.customDropdown}
          >
            <Space className="text-nowrap">
              What we do
              <CaretDownOutlined />
            </Space>
          </Dropdown>
          <Dropdown
            menu={{ items }}
            className={styles.drop}
            overlayClassName={styles.customDropdown}
          >
            <Space>
              Expertise
              <CaretDownOutlined />
            </Space>
          </Dropdown>
          <p>Case Studies</p>
          <p>About Us</p>
        </div>
        <div className={styles.nav_innerTwo} ref={devref2}>
          <p>Call Us</p>
          <Buttons label="Schedule Meeting" varient="fill"/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
