import { BASE_URL } from '@/constants/api';
import { LoginRequest } from '@/types/auth';

export const sendLoginRequest = async (user: LoginRequest) => {
  try {
    const data = await fetch(`${BASE_URL}/users/login`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
