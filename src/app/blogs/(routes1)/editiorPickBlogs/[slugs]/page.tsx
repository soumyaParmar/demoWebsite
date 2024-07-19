import Markdown from "markdown-to-jsx";

// Custom styles and fonts
import { inter400, inter500, inter700 } from "../../../_customFonts/inter";
import styles from "../../readingPage.module.css";

// components
import { getEditiorsPostContent } from "@/app/blogs/_utils";
import LatestPostSection from "@/app/blogs/_components/latestPost/LatestPostSection";
import CodeBlock from "@/app/blogs/_components/CopyToClipboardButton";
import ShareButton from "@/app/blogs/_components/ShareBtn/ShareButton";

const EditiorPickReadingPage: React.FC = (props: any) => {
  const slug = props.params.slugs;
  let objData = getEditiorsPostContent(slug);
  let siteUrl = "https://coedify.onrender.com";
  const url = `${siteUrl}/blogs/editiorPickBlogs/${slug}`;

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

export default EditiorPickReadingPage;
