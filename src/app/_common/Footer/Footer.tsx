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
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import image from "../../_assets/image/phone.png";

const Footer: React.FC = () => {
  return (
    <div className={style.footer}>
      <div className={style.innerLayer}>
        <div className={style.navigation}>
          <div className={style.pages}>
            <div className="w-[230px] mt-[-20px] max-[700px]:w-full pb-4">
              <Image src={logo} alt="logo" className={style.image} />
              <div className="flex items-center gap-2 mb-3 cursor-pointer">
                <p>
                  <HomeWorkIcon style={{ fill: "gray" }} />
                </p>
                <Link href="https://www.google.com/maps/dir/28.5839865,77.3149678/2nd+Floor,+C-89,+Sector+2,+Noida,+Uttar+Pradesh+201301/@28.5836284,77.3149346,19.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390ce56776056375:0xcd5588316a03ab74!2m2!1d77.3149697!2d28.5839899?entry=ttu">
                  <span>
                    {" "}
                    C-89, Second Floor Sector-2, Noida, 201301 Uttar Pradesh,
                    India{" "}
                  </span>
                </Link>
              </div>
              <div className="flex items-center gap-2 mb-3 cursor-pointer">
                <p>
                  <AddIcCallIcon style={{ fill: "gray" }} />
                </p>
                <Link href="https://wa.me/+917834906274">
                  <span>+91 7834906274</span>
                </Link>
              </div>
              <div className="flex items-center gap-2 mb-3 cursor-pointer">
                <p>
                  <Image
                    src={image}
                    height={24}
                    width={24}
                    style={{ filter: "opacity(0.5)" }}
                    alt=""
                  />
                </p>
                <Link href="tel:+911204130067">
                  <span>+91 120 4130067</span>
                </Link>
              </div>
              <div className="flex items-center gap-2 mb-3 cursor-pointer">
                <span>
                  <EmailIcon style={{ fill: "gray" }} />
                </span>
                <Link href="mailto:contact@coedify.com">
                  <span>contact@coedify.com</span>
                </Link>
              </div>
            </div>
            <div>
              <h1>Quick Links</h1>
              <ul>
                {pages.map((item: pagesType, index: number) => (
                  <Link href={item.link} key={index}>
                    <li>
                      <span>{item.page}</span>
                    </li>
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
                  <Link href={item.link} key={index}>
                    <li>
                      <span>{item.solution}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-end pb-3 max-[700px]:items-start">
            <div>
              <h1>Our Expertise</h1>
              <ul>
                {companies.map((item: companyType, index: number) => (
                  <Link href={item.link} key={index}>
                    <li key={index}>
                      <span>{item.company}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={style.copywrite}>
          <div className="pt-2 flex justify-between max-[700px]:text-[12px]">
            <p>&copy;Design by CoEdify 2024.</p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/coedifytechnology"
                target="_blank"
              >
                <Image src={img1} alt="fb" />
              </Link>
              <Link
                href="https://www.instagram.com/coedifytechnology/"
                target="_blank"
              >
                <Image src={img2} alt="insta" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/coedify/mycompany/"
                target="_blank"
              >
                <Image src={img3} alt="linkedin" />
              </Link>
              <Link href="https://x.com/CoEdifyTech" target="_blank">
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
