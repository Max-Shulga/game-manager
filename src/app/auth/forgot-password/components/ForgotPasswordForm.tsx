'use client';

import { Button, TextInput } from '@mantine/core';
import { useForgotPassword } from '@/app/auth/forgot-password/components/hooks/useForgotPassword';
import { FORGOT_PASSWORD_FIELDS } from '@/app/auth/forgot-password/constants/forgotPassword.constant';
import LoadingWrapper from '@/shared/components/LoadingWrapper/LoadingWrapper';
import styles from '@/app/auth/Auth.module.css';

const ForgotPasswordPageForm = () => {
  const { isLoading, successMessage, onSubmit, register, errors } = useForgotPassword();
  return (
    <form onSubmit={onSubmit} className={styles.contentContainer} noValidate>
      <LoadingWrapper isLoading={isLoading}>
        {successMessage ? (
          <p>{successMessage}</p>
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
      </LoadingWrapper>
    </form>
  );
};
export default ForgotPasswordPageForm;
