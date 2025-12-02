const ROUTES = {
  GUEST: {
    SIGN_IN: '/auth/sign-in',
    SIGN_UP: '/auth/sign-up',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password'
  },
  AUTHENTICATED: {
    HOME: '/',
    PROFILE: '/profile'
  }
} as const;

export { ROUTES };
