'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

const SignInPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
