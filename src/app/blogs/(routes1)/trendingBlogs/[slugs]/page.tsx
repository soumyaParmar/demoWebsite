import fs from "fs";
import Markdown from "markdown-to-jsx";

// Styles and fonts
import styles from "../../readingPage.module.css";
import { inter500 } from "@/app/blogs/_customFonts/inter";

// Components import
import Subscribers from "@/app/blogs/_components/Subscribers/Subscribers";
import LatestPostSection from "@/app/blogs/_components/latestPost/LatestPostSection";
import matter from "gray-matter";

const getPostContent = (slug: string): any => {
  const folder = "content/trendingBlogs/";
  const file = `${folder}${slug}mdx`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  const obj = {
    title: matterResult.data.title,
    description: matterResult.data.summary,
    category: matterResult.data.category,
    author: matterResult.data.author,
    date: matterResult.data.publishedAt,
  };
  return { obj, content };
};

const TrendingDataReadingPage = (props: any) => {
  const slug = props.params.slugs;
  let objData = getPostContent(slug);
  // const TrendingData = getTrendingBlogData();
  return (
    <div>
      <div className={styles.container}>
        <div className={`${styles.left} ${inter500.className}`}>
          {/* <ShareButton /> */}

          <div className={`${styles.imageTextContainer} ${inter500.className}`}>
            <img
              src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fcrphsq85rsgrivdmntmj.jpg"
              alt="trending"
            />

            <h1 className={styles.heading}>{objData.obj.title}</h1>
            <div className={styles.authorDateContainer}>
              <span>{`By ${objData.obj.author}`}</span>
              <span>{objData.obj.date}</span>
            </div>
          </div>

          <Markdown className={styles.markdown}>{objData.content}</Markdown>
        </div>

        {/* Latest Blog site */}
        <LatestPostSection insightsData={[]} />
      </div>

      <Subscribers />
    </div>
  );
};

export default TrendingDataReadingPage;
