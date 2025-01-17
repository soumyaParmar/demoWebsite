"use client";

import React, { useRef, useState } from "react";
import stylex from "./navbar.module.css";
import { Button, Dropdown, MenuProps, Select, Space } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import logo from "../../_assets/background/logo.png";
import Image from "next/image";
import Buttons from "../Button/Buttons";
import { useMotionValueEvent, useScroll } from "framer-motion";
import AI from "../../_assets/what/AI";
import Cloud from "../../_assets/what/Cloud";
import Hire from "../../_assets/what/Hire";
import { useRouter } from "next/navigation";
import Developers from "../../_assets/expertise/Developers";
import System from "@/app/_assets/expertise/System";
import Redesign from "@/app/_assets/expertise/Redesign";
import Audit from "@/app/_assets/expertise/Audit";

interface Navbar {
  flag: boolean;
  motionValue: boolean;
}

const Navbar: React.FC<Navbar> = ({ flag, motionValue }) => {
  const devref = useRef<HTMLDivElement>(null);
  const devref1 = useRef<HTMLDivElement>(null);
  const devref2 = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [nav, setNav] = useState<boolean>(flag);
  const router = useRouter();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setNav(true);
    } else {
      setNav(motionValue);
    }
  });

  // what we do
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link href="/whatwedo/digital-engineering">
          <div className={stylex.what}>
            <div className={stylex.box}>
              <Cloud />
            </div>
            <div>
              <h1>Digital Engineering</h1>
              <p>Accelerate Software Development and ensure scalability.</p>
            </div>
          </div>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link href="/whatwedo/ai-ml">
          <div className={stylex.what}>
            <div className={stylex.box}>
              <AI />
            </div>
            <div>
              <h1>AI/ML</h1>
              <p>Focus on creation and implementation of AI/ML models.</p>
            </div>
          </div>
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link href="/whatwedo/hire-professionals">
          <div className={stylex.what}>
            <div className={stylex.box}>
              <Hire />
            </div>
            <div>
              <h1>Hire Professionals</h1>
              <p>Get top-tier professional according to your requirement</p>
            </div>
          </div>
        </Link>
      ),
    },
  ];

  // expertise
  const item2: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link href="/expertise/cloud-cost-optimization">
          <div className={stylex.what}>
            <div className={stylex.box}>
              <Cloud />
            </div>
            <div>
              <h1>Cloud Cost Optimization</h1>
              <p>Eliminates wasteful spending and increases efficiency.</p>
            </div>
          </div>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link href="/whatwedo/hire-professionals">
          <div className={stylex.what}>
            <div className={stylex.box}>
              <Developers />
            </div>
            <div>
              <h1>Dedicated Experienced Developers</h1>
              <p>
                Leverage our ready-to-deploy professional resources on your
                requirements
              </p>
            </div>
          </div>
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link href="/expertise/system-design-and-development">
          <div className={stylex.what}>
            <div className={stylex.box}>
              <System />
            </div>
            <div>
              <h1>System Design and Development</h1>
              <p>
                Develop a robust system architecture which can be scaled up.
              </p>
            </div>
          </div>
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link href="/whatwedo/ai-ml">
          <div className={stylex.what}>
            <div className={stylex.box}>
              <AI />
            </div>
            <div>
              <h1>AI Intergration</h1>
              <p>
                Integrate AI in your system, according to your business needs
              </p>
            </div>
          </div>
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link href="/expertise/redesign-and-performance-enhancement">
          <div className={stylex.what}>
            <div className={stylex.box}>
              <Redesign />
            </div>
            <div>
              <h1>Redesign & Performance Enhancement</h1>
              <p>Upgrade outdated systems and integrate new technologies.</p>
            </div>
          </div>
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link href="/expertise/comprehensive-system-audit">
          <div className={stylex.what}>
            <div className={stylex.box}>
              <Audit />
            </div>
            <div>
              <h1>Comprehensive System Audit</h1>
              <p>
                Audit your system to identify vulnerabilities, and performance
                bottlenecks.
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

  const handleRoute = () => {
    router.push("/aboutus#form");
  };

  return (
    <>
      <div className={nav ? stylex.nav_outer2 : stylex.nav_outer} ref={devref}>
        <div className={stylex.small}>
          <div className={stylex.logo}>
            <Link href="/">
              <Image src={logo} alt="coedify" width={170} />
            </Link>
          </div>
          <div className={stylex.menu} onClick={handleMenu}>
            <MenuIcon fontSize="large" />
          </div>
        </div>
        <div className={stylex.nav_innerOne} ref={devref1}>
          <span>
            <Dropdown
              menu={{ items }}
              className={stylex.drop}
              overlayClassName={stylex.customDropdown}
            >
              <Space className="text-nowrap">
                What we do
                <CaretDownOutlined />
              </Space>
            </Dropdown>
          </span>
          <span>
            <Dropdown
              menu={{ items: item2 }}
              className={stylex.drop}
              overlayClassName={stylex.customDropdown2}
            >
              <Space>
                Expertise
                <CaretDownOutlined />
              </Space>
            </Dropdown>
          </span>
          <span className="flex items-center">
            <p>
              <Link href="/case-studies">Case Studies</Link>
            </p>
          </span>
          <span className="flex items-center">
            <p>
              {" "}
              <Link href="/aboutus">About Us</Link>
            </p>
          </span>
        </div>
        <div className={stylex.nav_innerTwo} ref={devref2}>
          <Buttons
            label="Schedule Meeting"
            varient="fill"
            onClick={handleRoute}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
