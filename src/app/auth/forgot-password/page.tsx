'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, TextInput } from '@mantine/core';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FORGOT_PASSWORD_FIELDS } from '@/app/auth/forgot-password/constants/forgotPassword.constant';
import { forgotPasswordSchema } from '@/app/auth/forgot-password/constants/forgotPassword.schema';
import { ROUTES } from '@/constants/routes';
import Spinner from '@/shared/components/Icons/Spinner/Spinner';
import { createClient } from '@/utils/supabase/client';
import type { TForgotPassword } from '@/app/auth/forgot-password/types/forgotPassword';
import styles from '../Auth.module.css';

const ForgotPasswordPage = () => {
  const supabase = createClient();

  const [isLoading, setIsLoading] = useState(false);
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

    setIsLoading(false);
  };

  return (
    <Box className={styles.pageContainer}>
      <form
        onSubmit={(e) => void handleSubmit(onSubmit)(e)}
        className={styles.contentContainer}
        noValidate
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <TextInput
              className={styles.field}
              label='Email'
              {...register(FORGOT_PASSWORD_FIELDS.EMAIL)}
              error={errors.email?.message}
            />
            <Button type='submit' fullWidth>
              Send
            </Button>
          </>
        )}
      </form>
    </Box>
  );
};

export default ForgotPasswordPage;
