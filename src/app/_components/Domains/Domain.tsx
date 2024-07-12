import React, { useRef } from "react";
import style from "./domain.module.css";
import { domain } from "../../utils/domains";
import { domainType } from "@/app/Interfaces/domain";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Domain: React.FC = () => {
  const divref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(divref.current, {
      y: -100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: divref.current,
        start: "top 40%",
      },
    });
  });

  return (
    <div className={style.domain} ref={divref}>
      <div className={style.layer}>
        <div className={style.heading}>
          <h1>DOMAINS</h1>
          <h2>Our Working Domains</h2>
          <h3>
            We are specialized in crafting robust solutions for a wide spectrum
            of industries, including stock and crypto trading, banking and
            finance, healthcare, and insurance. Our expertise lies in delivering
            high-performance, secure, and scalable software applications that
            empower clients to navigate their respective sectors with
            cutting-edge technology
          </h3>
        </div>
        <div className={style.allDomains} id="allDomain">
          {domain.map((item: domainType, index: number) => (
            <div key={index} className="flex flex-col gap-2">
              <Image src={item.image} alt="" width={50} height={50} />
              <h1>{item.title}</h1>
              <p>{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Domain;
