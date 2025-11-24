import { zodResolver } from '@hookform/resolvers/zod';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AUTH_FIELDS } from '@/app/auth/constants/auth.constants';
import { authSchema } from '@/app/auth/constants/auth.schema';
import { ROUTES } from '@/constants/routes';
import { signUp } from './../api/signUp.api';
import type { TAuth } from '@/app/auth/types/auth.types';
import type { TNullable } from '@/core/types/utility.types';

const useSignUp = () => {
  const [error, setError] = useState<TNullable<string>>(null);
  const {
    register,
    handleSubmit,
    formState,
    setError: formSetError
  } = useForm<TAuth>({
    mode: 'onBlur',
    resolver: zodResolver(authSchema)
  });

  const handleSignUp = async ({ email, password }: TAuth) => {
    setError(null);

    const { error } = await signUp({ email, password });

    if (error) {
      setError(error.message);
      return false;
    }
    redirect(ROUTES.HOME);
    return true;
  };

  const onSubmit = async (data: TAuth) => {
    if (data.password !== data.confirm) {
      formSetError(AUTH_FIELDS.CONFIRM, {
        type: 'custom',
        message: 'Passwords do not match'
      });
      return;
    }
    await handleSignUp({ email: data.email, password: data.password });
  };

  return { error, register, handleSubmit, formState, onSubmit } as const;
};

export { useSignUp };
