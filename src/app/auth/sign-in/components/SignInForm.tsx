'use client';

import { Box, Button, PasswordInput, TextInput, Text } from '@mantine/core';
import GoogleButton from '@/app/auth/components/GoogleButton/GoogleButton';
import { AUTH_FIELDS } from '@/app/auth/constants/auth.constants';
import { useSignIn } from '@/app/auth/sign-in/hooks/useSignIn';
import styles from '../../Auth.module.css';

const SignInForm = () => {
  const { error, handleSubmit, onSubmit, register, formState } = useSignIn();
  return (
    <Box className={styles.pageContainer}>
      <form
        onSubmit={(e) => void handleSubmit(onSubmit)(e)}
        className={styles.contentContainer}
        noValidate
      >
        <TextInput
          label='Email'
          className={styles.field}
          {...register(AUTH_FIELDS.EMAIL)}
          error={formState.errors.email?.message}
        />

        <PasswordInput
          label='Password'
          placeholder='••••••••'
          className={styles.field}
          {...register(AUTH_FIELDS.PASSWORD)}
          error={formState.errors.password?.message}
        />

        {error && <Text className={styles.errorMessage}>{error}</Text>}
        <Button type='submit' fullWidth>
          Sign Up
        </Button>
        <GoogleButton />
      </form>
    </Box>
  );
};

export default SignInForm;
