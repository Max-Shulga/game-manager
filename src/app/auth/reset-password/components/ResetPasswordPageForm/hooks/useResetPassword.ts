import { zodResolver } from '@hookform/resolvers/zod';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RESET_PASSWORD_FIELDS } from '@/app/auth/reset-password/constants/resetPassword.constant';
import { resetPasswordSchema } from '@/app/auth/reset-password/constants/resetPassword.schema';
import { ROUTES } from '@/constants/routes';
import { createClient } from '@/utils/supabase/client';
import type { TResetPassword } from '@/app/auth/reset-password/types/resetPassword';
import type { FormEvent } from 'react';

const useResetPassword = () => {
  const supabase = createClient();

  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<TResetPassword>({
    mode: 'onBlur',
    resolver: zodResolver(resetPasswordSchema)
  });

  const onSubmit = async (data: TResetPassword) => {
    if (data.password !== data.confirm) {
      setError(RESET_PASSWORD_FIELDS.CONFIRM, {
        type: 'custom',
        message: "Passwords don't match"
      });
      return;
    }

    setIsLoading(true);

    const { error } = await supabase.auth.updateUser({ password: data.password });
    if (error) {
      setError('password', { message: error.message && 'Something went wrong' });
    }

    redirect(ROUTES.AUTHENTICATED.HOME);
    setIsLoading(false);
  };

  return {
    isLoading,
    register,
    onSubmit: (e: FormEvent<HTMLFormElement>) => void handleSubmit(onSubmit)(e),
    errors
  } as const;
};

export { useResetPassword };
