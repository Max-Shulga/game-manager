import { ROUTES } from '@/constants/routes';

const ACCESS_RULES = {
  guestOnly: [ROUTES.SIGN_IN, ROUTES.SIGN_UP],

  authOnly: [ROUTES.PROFILE, ROUTES.HOME]
};

export { ACCESS_RULES };
