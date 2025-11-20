import { Button } from '@mantine/core';
import React from 'react';
import signInWithGoogle from '@/app/auth/components/GoogleButton/api/signInWithGoogle.api';
import GoogleIcon from '@/shared/components/Icons/GoogleIcon/GoogleIcon';

const GoogleButton = () => {
  return (
    <Button
      leftSection={<GoogleIcon />}
      fullWidth
      onClick={() => {
        void signInWithGoogle();
      }}
      variant={'light'}
      color={'rgba(255, 255, 255, 1)'}
    >
      Sign in with Google
    </Button>
  );
};

export default GoogleButton;
