import Markdown from "markdown-to-jsx";

// Styles and fonts
import styles from "../../readingPage.module.css";
import { inter500 } from "@/app/case-studies/_customFonts/inter";

// Components import
// import LatestPostSection from "@/app/blogs/_components/latestPost/LatestPostSection";
import { getTrendingPostContent,getTrendingBlogData } from "@/app/case-studies/_utils";
import CodeBlock from "@/app/case-studies/_components/CopyToClipboardButton";
import ShareButton from "@/app/case-studies/_components/ShareBtn/ShareButton";

const TrendingDataReadingPage: React.FC = (props: any) => {
  const slug = props.params.slugs;
  let objData = getTrendingPostContent(slug);
  let siteUrl = "https://coedifydemo.netlify.app"
  const url = `${siteUrl}/case-studies/trending/${slug}`;
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
  const TrendingData = getTrendingBlogData();
  const params = TrendingData.map((trending) => ({
    slugs: trending.slug
  }))
  return params;
}

export default TrendingDataReadingPage;
