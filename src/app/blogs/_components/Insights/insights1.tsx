"use client";

import Link from "next/link";
import Pagination from "@mui/material/Pagination";
import { PaginationItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect, useState } from "react";

import styles from "./Insights.module.css";
import { inter700 } from "../../_customFonts/inter";
import CardComponent from "./Card/CardComponent";

import {
  paginationPropsData,
  insightsCardData,
} from "../../Interfaces/interfaceData";

type visibleInsights = insightsCardData[];

let postData: any = undefined;

// Function to show the data
const showData = (visibleInsights: visibleInsights) => {
  postData = visibleInsights.map((post, i) => (
    <Link href={`/blogs/insights/${post.slug}`} className={styles.link} key={i}>
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

  // console.log("Post data for post funct");
  // console.log(postData);

  return postData;
};

// trial mode
const showData1 = (insightsData: insightsCardData[], visibleCards: number) => {
  let postData = insightsData
    .slice(0, visibleCards)
    .map((post: insightsCardData, index: number) => (
      <Link
        href={`/blogs/insights/${post.slug}`}
        className={styles.link}
        key={index}
      >
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
};

const getPages = (
  insightsData: insightsCardData[],
  paginationPerPage: number
): number => {
  return Math.ceil(insightsData.length / paginationPerPage);
};

const getAPart = (
  insightsData: insightsCardData[],
  indexOfFirstBlog: number,
  indexOfLastBlog: number
) => {
  return insightsData.slice(indexOfFirstBlog, indexOfLastBlog);
};
const Insights: React.FC<paginationPropsData> = ({ insightsData }) => {
  // Pagination logic
  const [paginationPerPage, setPaginationPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfTotalPages, setnumberOfTotalPages] = useState(1);
  const [blog, setBlog] = useState(insightsData);
  const [category, setCategory] = useState("All");
  const [filterItem, setFilterItem] = useState(insightsData);
  const [visibleCards, setVisibleCards] = useState(8);

  const indexOfLastBlog: number = currentPage * paginationPerPage;
  const indexOfFirstBlog: number = indexOfLastBlog - paginationPerPage;

  const onChangePagination = (e: React.ChangeEvent<unknown>, p: number) => {
    setCurrentPage(p);
  };

  const handleLoadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
  };

  useEffect(() => {
    postData = showData1(insightsData, visibleCards);
  }, []);

  useEffect(() => {
    if (category === "All") postData = showData1(insightsData, visibleCards);
    else postData = postData = showData1(filterItem, visibleCards);
  }, [filterItem, category]);

  // function to get the catefories of the insights blogs
  const getCategory = (): string[] => {
    let Categories = insightsData.map((post) => post.category);

    Categories = ["All", ...Array.from(new Set(Categories))];
    return Categories;
  };
  const Categories: string[] = getCategory();

  // function to get the get filtered value from the array
  const filteredValue = (category: string) => {
    let filterItem = insightsData.filter((post) => post.category === category);
    setFilterItem(filterItem);
    if (category === "All") {
      setCategory("All");
      let val = getPages(insightsData, paginationPerPage);

      setnumberOfTotalPages(val);

      const visibleInsights = getAPart(
        insightsData,
        indexOfFirstBlog,
        indexOfLastBlog
      );
      setBlog(visibleInsights);
      postData = showData(blog);

      postData = showData1(filterItem, visibleCards);
    } else {
      setCategory(category);
      let val = getPages(filterItem, paginationPerPage);

      setnumberOfTotalPages(val);

      const visibleInsights = getAPart(
        filterItem,
        indexOfFirstBlog,
        indexOfLastBlog
      );
      setBlog(visibleInsights);
      postData = showData(blog);

      postData = showData1(filterItem, visibleCards);
    }
  };

  postData = showData1(insightsData, visibleCards);

  return (
    <>
      <div className={styles.container}>
        <h1 className={`${inter700.className} ${styles.heading}`}>
          CoEdify Insights
        </h1>
        <nav className={`${styles.navbar}`}>
          {Categories.map((item, index) => (
            <h4 onClick={() => filteredValue(item)} key={index}>
              {item}
            </h4>
          ))}
        </nav>

        <div className={styles.cardContainer}>
          {insightsData.slice(0, visibleCards).map((post, index) => (
            <Link
              href={`/blogs/insights/${post.slug}`}
              className={styles.link}
              key={index}
            >
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
          ))}
        </div>

        <button onClick={handleLoadMore} className="load-more-button">
          Load More
        </button>
        <div className={styles.pagination}>
          {/* material ui pagenation componetn */}
          <Pagination
            count={numberOfTotalPages}
            onChange={onChangePagination}
            shape="rounded"
            size="large"
            sx={{
              // '& .MuiPaginationItem-root': {
              //   color: '#0ca07d', // Custom color for pagination items
              // },
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "green", // Custom background color for selected item
                color: "white", // Custom color for selected item
              },
              "& .MuiPaginationItem-root:hover": {
                backgroundColor: "lightgreen", // Custom background color for hover state
              },
            }}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </div>
      </div>
    </>
  );
};

export default Insights;
