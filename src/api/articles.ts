import { BASE_URL } from '@/constants/api';
import { ArticlesResponse } from '@/types/article';

// TODO: limit 값 로직 추가, 캐싱 주기 설정
export const getArticles = (tag?: string): Promise<ArticlesResponse> => {
  const url = tag ? `${BASE_URL}/articles?tag=${tag}` : `${BASE_URL}/articles`;

  return fetch(url, {
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
};
