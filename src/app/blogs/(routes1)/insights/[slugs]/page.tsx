import Markdown from "markdown-to-jsx";

// Components
import LatestPostSection from "@/app/blogs/_components/latestPost/LatestPostSection";
import ReadingPageSection from "@/app/blogs/_components/ReadingPageSection";

// custom styles and fonts
import { inter500 } from "@/app/blogs/_customFonts/inter";
import styles from "../../readingPage.module.css";

import { getInsightsPostContent } from "@/app/blogs/_utils";


const ReadingPage: React.FC = (props: any) => {
  const slug = props.params.slugs;
  const objData = getInsightsPostContent(slug);

  return (
    <>
      <div className={`${styles.container} flex w-full`}>
        <div className={`${styles.left} ${inter500.className}`}>
          {/* <ReadingPageSection objData={objData} /> */}

          <div className={`${styles.markdownContent}`}>
            <Markdown>{objData.content}</Markdown>
          </div>
        </div>

        {/* Latest Blog site */}
        <LatestPostSection insightsData={[]} />
      </div>
    </>
  );
};

export default ReadingPage;
