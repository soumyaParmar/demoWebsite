import Link from "next/link";

import LatestPostCard from "./LatestPostCard";

import styles from "../../(routes1)/readingPage.module.css";
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
    author: "David Clerk",
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
const recentPosts: insightsCardData[] = posts.slice(0, 4);

const LatestPostSection: React.FC<paginationPropsData> = () => {
  return (
    <div className={styles.right}>
      <h1 className={`${inter700.className}`}>Latest Post</h1>
      <div className={styles.latestPost}>
        {recentPosts.map((post, index) => (
          <Link
            href={`/blogs/insights/${post.slug}`}
            className={styles.link}
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
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestPostSection;
