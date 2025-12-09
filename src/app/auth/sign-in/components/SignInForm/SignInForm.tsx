'use client';

import { Button, PasswordInput, TextInput, Text } from '@mantine/core';
import GoogleButton from '@/app/auth/components/GoogleButton/GoogleButton';
import { AUTH_FIELDS } from '@/app/auth/constants/auth.constants';
import { useSignIn } from '@/app/auth/sign-in/components/SignInForm/hooks/useSignIn';
import { ROUTES } from '@/constants/routes';
import styles from '../../../Auth.module.css';

const SignInForm = () => {
  const { error, handleSubmit, onSubmit, register, redirect, formState } = useSignIn();
  return (
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
        Sign In
      </Button>
      <GoogleButton />
      <button
        type='button'
        className={styles.forgotPasswordButton}
        onClick={() => redirect(ROUTES.GUEST.FORGOT_PASSWORD)}
      >
        Forgot password?
      </button>
    </form>
  );
};

export default SignInForm;
