
export interface insightsCardData {
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  img: any;
  slug: string;
  index ?: number
}

export type visibleInsights = insightsCardData[];

export interface paginationPropsData {
  insightsData: insightsCardData[];
}
