export interface TrendingBlogs {
  title: string;
  description: string;
  slug: string;
  folderName: string;
  image:any;
}

export interface TrendingDataProps {
  trendingData: TrendingBlogs[];
}

export interface TrendingData {
  image: any;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
}

export interface objectData {
  objData: {
    obj: TrendingData;
    content: any;
  };
}
