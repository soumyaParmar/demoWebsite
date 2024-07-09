import Markdown from "markdown-to-jsx";

// Custom styles and fonts
import { inter400, inter700 } from "../../../_customFonts/inter";
import styles from "../../readingPage.module.css";

import Subscribers from "@/app/blogs/_components/Subscribers/Subscribers";
import { getEditiorsPostContent } from "@/app/blogs/_utils";

const EditiorPickReadingPage: React.FC = (props: any) => {
  const slug = props.params.slugs;
  let content = getEditiorsPostContent(slug);

  return (
    <>
      <div className={styles.nav}></div>
      <div className={styles.container}>
        <div
          className={`${styles.leftWithoutLatestPost} ${inter400.className}`}
        >
          <Markdown className={styles.markdown}>{content}</Markdown>
        </div>
      </div>
      <Subscribers />
    </>
  );
};

export default EditiorPickReadingPage;
