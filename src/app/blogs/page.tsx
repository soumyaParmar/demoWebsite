/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";


// custom fonts and styles
// import "./global.css";
import { inter700 } from "./_customFonts/inter";
import styles from "./blogsPage.module.css";

// components
import EditiorPickCard from "./_components/EditiorPickCard/EditiorPickCard";
import HeroSection from "./_components/Carousels/Carousels";
import Subscribers from "./_components/Subscribers/Subscribers";
import Insights from "./_components/Insights/Insights";

// utils function
import {
  getEditiorsPick,
  getInsightsBlogData,
  getTrendingBlogData,
} from "./_utils";
import Footer from "../_common/Footer/Footer";
import Navbar from "../_common/Navbar/Navbar";

const BlogPage: React.FC = () => {
  // Calling the function to get the metadata for trending blogs
  const editorsPickData = getEditiorsPick();
  const postData = editorsPickData.map((post, index) => (
    <Link key={index} href={`/blogs/${post.folderName + "/" + post.slug}`}>
      <EditiorPickCard
        category={post.category}
        title={post.title}
        description={post.description}
        image = {post.image}
      />
    </Link>
  ));

  // Calling the function to get the metadata for trending blogs
  const TrendingData = getTrendingBlogData();

  // Calling the function to get the metadata for insights blogs
  const InsightsData = getInsightsBlogData();

  return (
    <>
      <Navbar flag={true} motionValue={true} />

      {/* Hero Section Component */}
      <HeroSection trendingData={TrendingData} />

      {/* Editiors pick container */}
      <div className={styles.editiorPick}>
        <h1 className={`${inter700.className} ${styles.heading}`}>
          Editior's Pick
        </h1>
        <div className={styles.editiorPickCardBox}>{postData}</div>
      </div>
      {/* End of Editiors pick container */}

      <Insights insightsData={InsightsData} />

      {/* NewsLetter Subscriber component */}
      <Subscribers />
      <Footer />
    </>
  );
};

export default BlogPage;
