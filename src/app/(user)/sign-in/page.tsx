import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { BASE_URL } from '@/constants/api';
import LoginForm from '@/components/domain/login/LoginForm/LoginForm';

export const getCurrentUser = () => {
  const cookieStore = cookies();
  const userTokenCookie = cookieStore.get('accessToken');

  if (!userTokenCookie?.value) {
    return null;
  }

  return fetch(`${BASE_URL}/user`, {
    method: 'get',
    headers: {
      authorization: `Bearer ${userTokenCookie.value}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};
const SignInPage = () => {
  async function setToken(token: string) {
    'use server';
    cookies().set({
      name: 'accessToken',
      value: token,
      path: '/',
      maxAge: 60 * 60,
    });
  }

  const isUserLoggedIn = getCurrentUser();

  if (isUserLoggedIn) {
    redirect('/');
  }
  return <LoginForm setToken={setToken} />;
};

export default SignInPage;
