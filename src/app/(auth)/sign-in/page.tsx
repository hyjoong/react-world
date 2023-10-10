'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { LoginForm } from '@/types/auth';
import { sendLoginRequest } from '@/api/auth';
import { useRouter } from 'next/navigation';

const SignInPage = () => {
  const { push } = useRouter();
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = {
      user: {
        email: formData.email,
        password: formData.password,
      },
    };
    await sendLoginRequest(user)
      .then((res) => {
        if (res?.errors) {
          console.log('error !', res.errors);
          return;
        }
        // TODO: token storage 저장
        const userInfo = res.user.token;

        push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleInputChange}
          />
        </div>
        <Button>login</Button>
      </form>
    </div>
  );
};

export default SignInPage;
