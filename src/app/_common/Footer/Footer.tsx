import { companyType, pagesType, solutionType } from "@/app/Interfaces/footer";
import style from "./footer.module.css";
import React from "react";
import { pages, companies, solution } from "@/app/utils/footer";
import img1 from "../../_assets/image/face.svg";
import img2 from "../../_assets/image/in.svg";
import img3 from "../../_assets/image/li.svg";
import img4 from "../../_assets/image/x.svg";
import Image from "next/image";
import logo from "../../_assets/background/logo.png";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className={style.footer}>
      <div className={style.innerLayer}>
        <div className={style.navigation}>
          <div className={style.pages}>
            <div className="w-[230px] mt-[-20px] max-[700px]:w-full pb-4">
              <Image src={logo} alt="logo" className={style.image} />
              <p>
                At CoEdify, we take immense pride in being your trusted partner
                in achieving your goals and exceeding your expectations. Our
                unwavering commitment to excellence is reflected in every facet
                of our services. With a track record of successfully resolving
                complex engineering challenges and optimizing software systems.
              </p>
            </div>
            <div>
              <h1>Quick Links</h1>
              <ul>
                {pages.map((item: pagesType, index: number) => (
                  <Link href={item.link} key={index}>
                    <li>{item.page}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className={style.company}>
            <div>
              <h1>Hire Professionals</h1>
              <ul>
                {solution.map((item: solutionType, index: number) => (
                  <Link href={item.link} key={index}><li>{item.solution}</li></Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-[200px] flex flex-col items-end pb-3 max-[700px]:items-start">
            <div>
              <h1>Company</h1>
              <ul>
                {companies.map((item: companyType, index: number) => (
                  <li key={index}>{item.company}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={style.copywrite}>
          <div className="pt-2 flex justify-between max-[700px]:text-[12px]">
            <p>&copy;Design by CoEdify 2024.</p>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/coedifytechnology">
                <Image src={img1} alt="fb" />
              </Link>
              <Link href="https://www.instagram.com/coedifytechnology/">
                <Image src={img2} alt="insta" />
              </Link>
              <Link href="https://www.linkedin.com/company/coedify/mycompany/">
                <Image src={img3} alt="linkedin" />
              </Link>
              <Link href="https://x.com/CoEdifyTech">
                <Image src={img4} alt="x" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
