import Markdown from "markdown-to-jsx";

// Components
import LatestPostSection from "@/app/blogs/_components/latestPost/LatestPostSection";
import CodeBlock from "@/app/blogs/_components/CopyToClipboardButton";
import ShareButton from "@/app/blogs/_components/ShareBtn/ShareButton";

// custom styles and fonts
import { inter500 } from "@/app/blogs/_customFonts/inter";
import styles from "../../readingPage.module.css";

import { getInsightsPostContent } from "@/app/blogs/_utils";

const ReadingPage: React.FC = (props: any) => {
  const slug = props.params.slugs;
  const objData = getInsightsPostContent(slug);
  let siteUrl = "https://coedify.onrender.com";
  const url = `${siteUrl}/blogs/insights/${slug}`;

  return (
    <>
      <div className={`${styles.left} ${inter500.className}`}>
        <div className={`${styles.markdownContent}`}>
          <Markdown
            options={{
              overrides: {
                code: {
                  component: CodeBlock,
                },
              },
            }}
          >
            {objData.content}
          </Markdown>
        </div>
        <ShareButton url={url} title={objData.obj.title} />
      </div>

      {/* Latest Blog site */}
    </>
  );
};

export default ReadingPage;
