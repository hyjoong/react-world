'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { sendSignupRequest } from '@/api/auth';
import { useFunnel } from '@/hooks/useFunnel/useFunnel';
import { Button } from '@/components/ui/Button';

const SignUpPage = () => {
  const { push } = useRouter();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // TODO: submit loading state & disable button

  const handleregisterUser = async () => {
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
  // TODO: magic number 상수화
  const [Funnel, activeStepIndex, setStep] = useFunnel(
    ['username', 'email', 'password'],
    {
      initialStep: 'username',
    },
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <p>{activeStepIndex}</p>
      <Funnel>
        <Funnel.Step name="username">
          <input
            name="username"
            placeholder="username"
            onChange={handleInputChange}
          />
          <Button onClick={() => setStep('email')}>다음</Button>
        </Funnel.Step>
        <Funnel.Step name="email">
          <input
            name="email"
            placeholder="email"
            onChange={handleInputChange}
          />
          <Button onClick={() => setStep('password')}>다음</Button>
        </Funnel.Step>
        <Funnel.Step name="password">
          <input
            name="password"
            placeholder="password"
            onChange={handleInputChange}
          />
          <Button onClick={handleregisterUser}>회원가입</Button>
        </Funnel.Step>
      </Funnel>
    </div>
  );
};

export default SignUpPage;
