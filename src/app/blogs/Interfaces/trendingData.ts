export interface TrendingBlogs {
  title: string;
  description: string;
  slug: string;
  folderName: string;
}

export interface TrendingDataItem {
  title: string;
  description: string;
  slug: string;
  folderName: string;
}

export interface TrendingDataProps {
  trendingData: TrendingDataItem[];
}
