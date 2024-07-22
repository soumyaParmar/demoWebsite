import Markdown from "markdown-to-jsx";

// Styles and fonts
import styles from "../../readingPage.module.css";
import { inter500 } from "@/app/blogs/_customFonts/inter";

// Components import
import LatestPostSection from "@/app/blogs/_components/latestPost/LatestPostSection";
import { getTrendingPostContent } from "@/app/blogs/_utils";
import CodeBlock from "@/app/blogs/_components/CopyToClipboardButton";
import ShareButton from "@/app/blogs/_components/ShareBtn/ShareButton";

const TrendingDataReadingPage: React.FC = (props: any) => {
  const slug = props.params.slugs;
  let objData = getTrendingPostContent(slug);
  let siteUrl = "https://coedify.onrender.com"
  const url = `${siteUrl}/blogs/trendingBlogs/${slug}`;
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
    </>
  );
};

export const generateStaticParams  =() =>{
  return [{slugs:"Single-Page-Applications"}]
}

export default TrendingDataReadingPage;
