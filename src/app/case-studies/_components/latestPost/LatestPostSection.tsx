import Link from "next/link";

import LatestPostCard from "./LatestPostCard";

import styles from "../../(routes1)/readingPage.module.css";
import stylex from "./LatestPostCars.module.css";
import { inter700 } from "../../_customFonts/inter";

import {
  insightsCardData,
  paginationPropsData,
} from "../../Interfaces/interfaceData";
import { getInsightsBlogData } from "../../_utils";

let postData: insightsCardData[] = getInsightsBlogData();

// Sorting the data on the basis of date
const posts: insightsCardData[] = postData
  .map((post) => ({
    title: post.title,
    description: post.description,
    author: post.author,
    date: post.date, // Assuming 'publishedAt' is a valid date string
    category: post.category,
    img: post.img,
    slug: post.slug,
  }))
  .sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

// Getting 4 recents post from the posts
let recentPosts: insightsCardData[] = posts.slice(0, 5);
const lastPost: insightsCardData = recentPosts[3];
const lastPost1: insightsCardData = recentPosts[4];
recentPosts = recentPosts.slice(0, 3);

const LatestPostSection: React.FC<paginationPropsData> = () => {
  return (
    <>
      <div className={`${styles.right}`}>
        <h1 className={`${inter700.className} ${styles.title}`}>Latest Post</h1>
        <div className={styles.latestPost}>
          {recentPosts.map((post, index) => (
            <Link
              href={`/case-studies/insights/${post.slug}`}
              className={`${styles.link}`}
              key={index}
            >
              <LatestPostCard
                category={post.category}
                title={post.title}
                description={post.description}
                author={post.author}
                img={post.img}
                date={post.date}
                slug={post.slug}
                index={index}
              />
            </Link>
          ))}
        </div>
        <div className={stylex.customSticky}>
          <Link
            href={`/blogs/insights/${lastPost.slug}`}
            className={`${styles.link}`}
          >
            <LatestPostCard
              category={lastPost.category}
              title={lastPost.title}
              description={lastPost.description}
              author={lastPost.author}
              img={lastPost.img}
              date={lastPost.date}
              slug={lastPost.slug}
              index={3}
            />
          </Link>
          <br />
          <Link
            href={`/blogs/insights/${lastPost1.slug}`}
            className={`${styles.link}`}
          >
            <LatestPostCard
              category={lastPost1.category}
              title={lastPost1.title}
              description={lastPost1.description}
              author={lastPost1.author}
              img={lastPost1.img}
              date={lastPost1.date}
              slug={lastPost1.slug}
              index={4}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default LatestPostSection;
