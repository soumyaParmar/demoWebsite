import Markdown from "markdown-to-jsx";

// Custom styles and fonts
import { inter400, inter500, inter700 } from "../../../_customFonts/inter";
import styles from "../../readingPage.module.css";

import Subscribers from "@/app/blogs/_components/Subscribers/Subscribers";
import { getEditiorsPostContent } from "@/app/blogs/_utils";
import ReadingPageSection from "@/app/blogs/_components/ReadingPageSection";
import LatestPostSection from "@/app/blogs/_components/latestPost/LatestPostSection";

const EditiorPickReadingPage: React.FC = (props: any) => {
  const slug = props.params.slugs;
  let objData = getEditiorsPostContent(slug);

  return (
    <>
      <div className={styles.container}>
        
        <div className={`${styles.left} ${inter500.className}`}>
          <ReadingPageSection objData={objData} />
          <Markdown className={styles.markdown}>{objData.content}</Markdown>
        </div>

        {/* Latest Blog site */}
        <LatestPostSection insightsData={[]} />
      </div>

      <Subscribers />
    </>
  );
};

export default EditiorPickReadingPage;
