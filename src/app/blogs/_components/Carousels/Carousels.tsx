import Link from "next/link";
import Image from "next/image";

// for carousel
import { Carousel } from "antd";

// for fonts and styles
import styles from "./Carousel.module.css";
import { inter700, inter400 } from "../../_customFonts/inter";

import {
  TrendingBlogs,
  TrendingDataProps,
} from "../../Interfaces/trendingData";

const HeroSection: React.FC<TrendingDataProps> = ({ trendingData }) => {
  return (
    <>
      <div className={styles.carouselContainer}>
        {/*  trending blogs files is mapping */}
        <Carousel autoplay infinite effect="fade">
          {trendingData.map((post: TrendingBlogs, index: number) => (
            <div className={styles.carouselSlide} key={index}>
              <Image
                src={post.image}
                alt={post.title}
                className={styles.image}
                width={2500}
                height={1500}
              />
              <div className={`${styles.innerText}`}>
                <h1 className={` ${inter700.className} ${styles.innerHeading}`}>
                  {post.title}
                </h1>
                <p className={` ${inter400.className} ${styles.innerPara}`}>
                  {post.description}
                </p>
                <Link href={`/blogs/trendingBlogs/${post.slug}`}>
                  <button
                    className={` ${inter400.className} ${styles.innerButton}`}
                  >
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default HeroSection;
