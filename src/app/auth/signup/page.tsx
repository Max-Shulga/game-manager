'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, PasswordInput, Text, TextInput } from '@mantine/core';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SIGN_UP_FORM_FIELDS } from '@/app/auth/constants/auth.constants';
import { signUpSchema } from '@/app/auth/constants/auth.schema';
import { supabase } from '@/lib/supabaseClient';
import type { TSignUp } from '@/app/auth/types/auth.types';
import type { TNullable } from '@/core/types/utility.types';
import styles from './SignUp.module.css';

const SignUp = () => {
  const [authError, setAuthError] = useState<TNullable<string>>(null);
  const { register, handleSubmit, formState } = useForm<TSignUp>({
    resolver: zodResolver(signUpSchema)
  });

  const onSubmit = async (data: TSignUp) => {
    setAuthError(null);

    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password
    });

    if (error) {
      setAuthError(error.message);
      return;
    }
  };
  return (
    <Box className={styles.pageContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.contentContainer}>
        <TextInput
          label='Email'
          className={styles.field}
          {...register(SIGN_UP_FORM_FIELDS.EMAIL)}
          error={formState.errors.email?.message}
          required
        />
        <PasswordInput
          label='Password'
          className={styles.field}
          placeholder='••••••••'
          {...register(SIGN_UP_FORM_FIELDS.PASSWORD)}
          error={formState.errors.password?.message}
          required
          mb='sm'
        />
        <PasswordInput
          label='Confirm Password'
          className={styles.field}
          placeholder='••••••••'
          {...register(SIGN_UP_FORM_FIELDS.CONFIRM)}
          error={formState.errors.confirm?.message}
          required
          mb='sm'
        />
        {authError && <Text>{authError}</Text>}
        <Button type='submit' fullWidth>
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default SignUp;
