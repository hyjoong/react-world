import { ProfileResponse } from './profile';

type UserProfile = {
  username: string;
  bio: string;
  image: string;
  following: boolean;
};

export type Article = {
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

export type FeedResponse = {
  article: {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: ProfileResponse['profile'];
  };
  errors?: unknown;
  status?: string;
  message?: string;
};
