import { Box } from '@mantine/core';
import SignInForm from '@/app/auth/sign-in/components/SignInForm/SignInForm';
import styles from '../Auth.module.css';

const SignInPage = () => {
  return (
    <Box className={styles.pageContainer}>
      <SignInForm />;
    </Box>
  );
};

export default SignInPage;
