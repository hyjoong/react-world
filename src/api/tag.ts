import { BASE_URL } from "@/constants/api";
import { ArticlesResponse } from "@/types/article";
import { TagsResponse } from "@/types/tag";

export const getAllTags = (): Promise<TagsResponse> => {
  return fetch(`${BASE_URL}/tags`, {
    cache: 'no-store',
    method: 'get',
    headers: {
        'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((err) => {
        console.error(err);
    });
}

export const getArticlesByTag = (tag:string): Promise<ArticlesResponse> => {
  return fetch(`${BASE_URL}/articles?tag=${tag}`, {
    cache: 'no-store',
    method: 'get',
    headers: {
        'Content-Type': 'application/json',
    },
  })
  .then((res) => res.json())
  .catch((err) => {
      console.error(err);
  });
}