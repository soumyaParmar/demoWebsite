import Markdown from "markdown-to-jsx";

// Custom styles and fonts
import { inter400, inter500, inter700 } from "../../../_customFonts/inter";
import styles from "../../readingPage.module.css";

// components
import { getEditiorsPick, getEditiorsPostContent } from "@/app/case-studies/_utils";
import CodeBlock from "@/app/case-studies/_components/CopyToClipboardButton";
import ShareButton from "@/app/case-studies/_components/ShareBtn/ShareButton";

const EditiorPickReadingPage: React.FC = (props: any) => {
  const slug = props.params.slugs;
  let objData = getEditiorsPostContent(slug);
  let siteUrl = "https://coedifydemo.netlify.app";
  const url = `${siteUrl}/case-studies/editiorspick/${slug}`;

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
  const editiorsData = getEditiorsPick();
  const params = editiorsData.map((editior) => ({
    slugs: editior.slug
  }))
  return params;
}

export default EditiorPickReadingPage;
