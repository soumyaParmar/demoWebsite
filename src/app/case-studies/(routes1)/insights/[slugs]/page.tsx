import Markdown from "markdown-to-jsx";

// Components
import CodeBlock from "@/app/case-studies/_components/CopyToClipboardButton";
import ShareButton from "@/app/case-studies/_components/ShareBtn/ShareButton";

// custom styles and fonts
import { inter500 } from "@/app/case-studies/_customFonts/inter";
import styles from "../../readingPage.module.css";

import { getInsightsBlogData, getInsightsPostContent } from "@/app/case-studies/_utils";

const ReadingPage: React.FC = (props: any) => {
  const slug = props.params.slugs;
  const objData = getInsightsPostContent(slug);
  let siteUrl = "https://coedifydemo.netlify.app";
  const url = `${siteUrl}/case-studies/insights/${slug}`;

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

export const generateStaticParams  =() =>{
  const insightsData = getInsightsBlogData();
  const params = insightsData.map((insights) => ({
    slugs: insights.slug
  }))
  return params;
}

export default ReadingPage;
