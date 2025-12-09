import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { forgotPasswordSchema } from '@/app/auth/forgot-password/constants/forgotPassword.schema';
import { ROUTES } from '@/constants/routes';
import { createClient } from '@/utils/supabase/client';
import type { TForgotPassword } from '@/app/auth/forgot-password/types/forgotPassword';
import type { FormEvent } from 'react';

const useForgotPassword = () => {
  const supabase = createClient();

  const [isLoading, setIsLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<TForgotPassword>({
    mode: 'onBlur',
    resolver: zodResolver(forgotPasswordSchema)
  });

  const onSubmit = async (data: TForgotPassword) => {
    setIsLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
      redirectTo: `${window.location.origin}/${ROUTES.GUEST.RESET_PASSWORD}`
    });

    if (error) {
      setError('email', { message: error.message ?? 'Something went wrong' });
    }
    setSuccessMessage('We have sent a password reset link to your email.');

    setIsLoading(false);
  };

  return {
    isLoading,
    successMessage,
    register,
    errors,
    onSubmit: (e: FormEvent<HTMLFormElement>) => void handleSubmit(onSubmit)(e)
  } as const;
};
export { useForgotPassword };
