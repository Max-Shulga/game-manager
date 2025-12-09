import { Box } from '@mantine/core';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import styles from '../Auth.module.css';

const ForgotPasswordPage = () => {
  return (
    <Box className={styles.pageContainer}>
      <ForgotPasswordForm />
    </Box>
  );
};

export default ForgotPasswordPage;
