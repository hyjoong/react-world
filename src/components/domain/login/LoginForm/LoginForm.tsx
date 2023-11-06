'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { sendLoginRequest } from '@/api/auth';
import { Button } from '@/components/ui/Button';
import { LoginForm } from '@/types/auth';
import { LoginFormProps } from './LoginForm.type';

const LoginForm = ({ setToken }: LoginFormProps) => {
  const { push } = useRouter();

  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');
    const user = {
      user: {
        email: formData.email,
        password: formData.password,
      },
    };
    await sendLoginRequest(user)
      .then((res) => {
        if (res?.errors) {
          console.error('error !', JSON.stringify(res.errors));
          setErrorMessage(JSON.stringify(res.errors));
          return;
        }
        setToken(res.user.token);
        push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
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
      <div className="min-h-[26px] text-red-500">{errorMessage}</div>
      <Button>login</Button>
    </form>
  );
};

export default LoginForm;
