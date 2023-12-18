import { BASE_URL } from '@/constants/api';

export const getComments = (id: string) => {
  return fetch(`${BASE_URL}/articles/${id}/comments`, {
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

export const postComment = (id: string, body: string) => {
  return fetch(`${BASE_URL}/articles/${id}/comments`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      comment: { body },
    }),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};
