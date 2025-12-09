import { Box } from '@mantine/core';
import SignUpForm from '@/app/auth/sign-up/components/SignUpForm';
import styles from '../Auth.module.css';

const SignUpPage = () => {
  return (
    <Box className={styles.pageContainer}>
      <SignUpForm />
    </Box>
  );
};

export default SignUpPage;
