import { BASE_URL } from '@/constants/api';
import { LoginRequest, UserResponse } from '@/types/auth';

export const sendLoginRequest = (user: LoginRequest): Promise<UserResponse> => {
  return fetch(`${BASE_URL}/users/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};

export const sendSignupRequest = (
  user: LoginRequest,
): Promise<UserResponse> => {
  return fetch(`${BASE_URL}/users`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};
