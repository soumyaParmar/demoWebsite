import fs from "fs";
import matter from "gray-matter";

// function to get the data from the markdown file and shown it on the editiors pick card
export const getEditiorsPick = () => {
  const folder = "public/content/editiorspick/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".mdx"));

  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(
      `public/content/editiorspick/${filename}`,
      "utf8"
    );
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title || "",
      description: matterResult.data.summary || "",
      category: matterResult.data.category || "",
      slug: filename.replace(".mdx", "") || "",
      folderName: "editiorspick" || "",
      image: matterResult.data.image || "",
    };
  });

  return posts;
};

// function to get the data fromt the editiors mdx file
export const getEditiorsPostContent = (slug: string): any => {
  const folder = "public/content/editiorspick/";
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
  const folder = "public/content/insights/";
  const files: string[] = fs.readdirSync(folder);
  const markdownPosts: string[] = files.filter((file) => file.endsWith(".mdx"));

  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(
      `public/content/insights/${filename}`,
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
  const folder = "public/content/trending/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".mdx"));

  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(
      `public/content/trending/${filename}`,
      "utf8"
    );
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title || "",
      description: matterResult.data.summary || "",
      slug: filename.replace(".mdx", "") || "",
      folderName: "trending" || "",
      image: matterResult.data.image || ""
    };
  });

  return posts;
};

// Function to get the content of the trending mdx files
export const getTrendingPostContent = (slug: string): any => {
  const folder = "public/content/trending/";
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
