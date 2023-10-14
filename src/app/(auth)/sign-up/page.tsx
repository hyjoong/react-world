'use client';

import { sendSignupRequest } from '@/api/auth';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const SignUpPage = () => {
  const { push } = useRouter();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const isFormValid = Object.values(formData).every((value) => value !== '');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = {
      user: {
        ...formData,
      },
    };

    await sendSignupRequest(user)
      .then((res) => {
        if (res?.errors) {
          console.log('error !', res.errors);
          return;
        }
        alert('회원가입이 완료되었습니다.');
        push('/sign-in');
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
    <form onSubmit={handleSubmit}>
      <div className="flex-col">
        <input
          name="username"
          placeholder="username"
          onChange={handleInputChange}
        />
        <input name="email" placeholder="email" onChange={handleInputChange} />
        <input
          name="password"
          placeholder="password"
          onChange={handleInputChange}
        />
        <Button disabled={!isFormValid}>Sign Up</Button>
      </div>
    </form>
  );
};

export default SignUpPage;
