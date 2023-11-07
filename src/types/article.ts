type UserProfile = {
  username: string;
  bio: string;
  image: string;
  following: boolean;
};

type Article = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: UserProfile;
};

export type ArticlesResponse = {
  articles: Article[];
  articlesCount: number;
};
