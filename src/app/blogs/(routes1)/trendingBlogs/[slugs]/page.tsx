import fs from "fs";
import Markdown from "markdown-to-jsx";
import Image from "next/image";

// Styles and fonts
import styles from "../../readingPage.module.css";
import { inter500 } from "@/app/blogs/_customFonts/inter";

// Components import
import Subscribers from "@/app/blogs/_components/Subscribers/Subscribers";
import LatestPostSection from "@/app/blogs/_components/latestPost/LatestPostSection";
import matter from "gray-matter";
import { getTrendingPostContent } from "@/app/blogs/_utils";
import ReadingPageSection from "@/app/blogs/_components/ReadingPageSection";

const TrendingDataReadingPage:React.FC = (props: any) => {
  const slug = props.params.slugs;
  let objData = getTrendingPostContent(slug);
  return (
    <div>
      <div className={styles.container}>
        <div className={`${styles.left} ${inter500.className}`}>
          <ReadingPageSection objData={objData} />

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
