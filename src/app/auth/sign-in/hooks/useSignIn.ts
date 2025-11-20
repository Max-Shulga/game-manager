import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { authSchema } from '@/app/auth/constants/auth.schema';
import { signIn } from '@/app/auth/sign-in/api/signIn.api';
import type { TAuth } from '@/app/auth/types/auth.types';
import type { TNullable } from '@/core/types/utility.types';

const useSignIn = () => {
  const [error, setError] = useState<TNullable<string>>(null);
  const { register, handleSubmit, formState } = useForm<TAuth>({
    mode: 'onBlur',
    resolver: zodResolver(authSchema)
  });

  const handleSignIn = async ({ email, password }: TAuth) => {
    setError(null);
    const { error } = await signIn({ email, password });

    if (error) {
      setError(error.message);
      return false;
    }

    return true;
  };

  const onSubmit = async (data: TAuth) => {
    await handleSignIn(data);
  };

  return { error, register, handleSubmit, formState, onSubmit } as const;
};

export { useSignIn };
