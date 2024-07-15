import fs from "fs";
import matter from "gray-matter";

// function to get the data from the markdown file and shown it on the editiors pick card
export const getEditiorsPick = () => {
  const folder = "content/editiorPickBlogs/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".mdx"));

  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(
      `content/editiorPickBlogs/${filename}`,
      "utf8"
    );
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title || "",
      description: matterResult.data.summary || "",
      category: matterResult.data.category || "",
      slug: filename.replace(".mdx", "") || "",
      folderName: "editiorPickBlogs" || "",
    };
  });

  return posts;
};

// function to get the data fromt the editiors mdx file
export const getEditiorsPostContent = (slug: string): any => {
  const folder = "public/content/editiorPickBlogs/";
  const file = `${folder}${slug}.mdx`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  const obj = {
    title: matterResult.data.title || "",
    description: matterResult.data.summary || "",
    category: matterResult.data.category || "",
    author: matterResult.data.author || "",
    date: matterResult.data.publishedAt || "",
    image: matterResult.data.image || "",
  };
  return { obj, content };
};

// to get the metadata from the insights blog
export const getInsightsBlogData = () => {
  const folder = "content/insights/";
  const files: string[] = fs.readdirSync(folder);
  const markdownPosts: string[] = files.filter((file) => file.endsWith(".mdx"));

  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(
      `content/insights/${filename}`,
      "utf8"
    );
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title || "",
      description: matterResult.data.summary || "",
      slug: filename.replace(".mdx", ""),
      author: matterResult.data.author || "",
      date: matterResult.data.publishedAt || "",
      category: matterResult.data.category || "",
      img: matterResult.data.image || "",
    };
  });

  return posts;
};

// Function to get the content of the insights mdx files
export const getInsightsPostContent = (slug: string) => {
  const folder = "public/content/insights/";
  const file = `${folder}${slug}.mdx`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  const obj = {
    title: matterResult.data.title || "",
    description: matterResult.data.summary || "",
    category: matterResult.data.category || "",
    author: matterResult.data.author || "",
    date: matterResult.data.publishedAt || "",
    image: matterResult.data.image || "",
  };

  return { obj, content };
};

// function to get the data from the markdown file and shown it on the trending blogs
export const getTrendingBlogData = () => {
  const folder = "content/trendingBlogs/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".mdx"));

  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(
      `content/trendingBlogs/${filename}`,
      "utf8"
    );
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title || "",
      description: matterResult.data.summary || "",
      slug: filename.replace(".mdx", "") || "",
      folderName: "trendingBlogs" || "",
    };
  });

  return posts;
};

// Function to get the content of the trending mdx files
export const getTrendingPostContent = (slug: string): any => {
  const folder = "public/content/trendingBlogs/";
  const file = `${folder}${slug}.mdx`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  const obj = {
    title: matterResult.data.title || "",
    description: matterResult.data.summary || "",
    category: matterResult.data.category || "",
    author: matterResult.data.author || "",
    date: matterResult.data.publishedAt || "",
    image: matterResult.data.image || "",
  };
  return { obj, content };
};
