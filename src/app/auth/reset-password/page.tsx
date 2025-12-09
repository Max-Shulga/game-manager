import { Box } from '@mantine/core';
import ResetPasswordPageForm from './components/ResetPasswordPageForm/ResetPasswordPageForm';
import styles from '@/app/auth/Auth.module.css';

const ResetPasswordPage = () => {
  return (
    <Box className={styles.pageContainer}>
      <ResetPasswordPageForm />
    </Box>
  );
};

export default ResetPasswordPage;
