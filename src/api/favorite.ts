import { BASE_URL } from '@/constants/api';

export const postFavorite = (id: string) => {
  return fetch(`${BASE_URL}/articles/${id}/favorite`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};

export const deleteFavorite = (id: string) => {
  return fetch(`${BASE_URL}/articles/${id}/favorite`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};
