'use client';

import { Box, Button, PasswordInput, TextInput, Text } from '@mantine/core';
import GoogleButton from '@/app/auth/components/GoogleButton/GoogleButton';
import { AUTH_FIELDS } from '@/app/auth/constants/auth.constants';
import { useSignUp } from '@/app/auth/sign-up/hooks/useSignUp';
import styles from '../../Auth.module.css';

const SignUpForm = () => {
  const { error, handleSubmit, onSubmit, register, formState } = useSignUp();
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

        <PasswordInput
          label='Confirm Password'
          placeholder='••••••••'
          className={styles.field}
          {...register(AUTH_FIELDS.CONFIRM)}
          error={formState.errors.confirm?.message}
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
export default SignUpForm;
