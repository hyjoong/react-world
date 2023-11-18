import { BASE_URL } from "@/constants/api";
import { TagsResponse } from "@/types/tag";

export const getTags = (): Promise<TagsResponse> => {
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