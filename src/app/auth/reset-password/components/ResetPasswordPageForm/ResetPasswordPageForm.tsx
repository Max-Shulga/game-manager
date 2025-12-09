'use client';

import { Button, PasswordInput } from '@mantine/core';
import { RESET_PASSWORD_FIELDS } from '@/app/auth/reset-password/constants/resetPassword.constant';
import LoadingWrapper from '@/shared/components/LoadingWrapper/LoadingWrapper';
import { useResetPassword } from './hooks/useResetPassword';
import styles from '@/app/auth/Auth.module.css';

const ResetPasswordPageForm = () => {
  const { onSubmit, errors, register, isLoading } = useResetPassword();

  return (
    <form onSubmit={onSubmit} className={styles.contentContainer} noValidate>
      <LoadingWrapper isLoading={isLoading}>
        <PasswordInput
          label='Password'
          placeholder='••••••••'
          className={styles.field}
          {...register(RESET_PASSWORD_FIELDS.PASSWORD)}
          error={errors.password?.message}
        />
        <PasswordInput
          label='Confirm Password'
          placeholder='••••••••'
          className={styles.field}
          {...register(RESET_PASSWORD_FIELDS.CONFIRM)}
          error={errors.confirm?.message}
        />
        <Button type='submit' fullWidth>
          Send
        </Button>
      </LoadingWrapper>
    </form>
  );
};

export default ResetPasswordPageForm;
