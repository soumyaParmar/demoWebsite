"use client";

import Link from "next/link";
import { useState } from "react";

import styles from "./Insights.module.css";
import { inter500, inter700 } from "../../_customFonts/inter";
import CardComponent from "./Card/CardComponent";

import {
  paginationPropsData,
  insightsCardData,
} from "../../Interfaces/interfaceData";

let postData: any = undefined;

// function to show the data
const showData = (insightsData: insightsCardData[], visibleCards: number) => {
  let postData = insightsData
    .slice(0, visibleCards)
    .map((post: insightsCardData) => (
      <Link href={`/blogs/insights/${post.slug}`} className={styles.link}>
        <CardComponent
          category={post.category}
          title={post.title}
          description={post.description}
          author={post.author}
          img={post.img}
          date={post.date}
          slug={post.slug}
        />
      </Link>
    ));

  return postData;
};

const Insights: React.FC<paginationPropsData> = ({ insightsData }) => {
  const [visibleCards, setVisibleCards] = useState<number>(8);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // function to add the more pages on insights
  const handleLoadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
  };

  // function to get the catefories of the insights blogs
  const getCategory = (): string[] => {
    let Categories = insightsData.map((post) => post.category);

    Categories = ["All", ...new Set(Categories)];
    return Categories;
  };

  let Categories: string[] = getCategory();
  // Categories array if we want to hard code the categories in the insights navbar
  // Categories = [
  //   "All",
  //   "Technology",
  //   "Product",
  //   "Development",
  //   "Coding",
  //   "Javascript",
  //   "Web",
  //   "Design",
  // ];

  // function to get the get filtered value from the array
  const filteredValue = (category: string) => {
    setSelectedCategory(category);
    setVisibleCards(8);
  };

  const filteredCards =
    selectedCategory === "All"
      ? insightsData
      : insightsData.filter(
          (inisights) => inisights.category === selectedCategory
        );

  postData = showData(filteredCards, visibleCards);

  return (
    <>
      <div className={styles.container}>
        <h1 className={`${inter700.className} ${styles.heading}`}>
          CoEdify Insights
        </h1>

        <nav className={`${styles.navbar} ${inter700.className}`}>
          {Categories.map((item: string, index: number) => (
            <h4
              className={selectedCategory === item ? `${styles.active}` : ""}
              onClick={() => filteredValue(item)}
            >
              {item}
            </h4>
          ))}
        </nav>

        <div className={styles.cardContainer}>{postData}</div>

        {/* Load more button */}
        <div className={styles.loadMoreButton}>
          {visibleCards < filteredCards.length && (
            <button
              onClick={handleLoadMore}
              className={`${styles.loadMoreButton} ${inter500.className}`}
            >
              Load More....
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Insights;
