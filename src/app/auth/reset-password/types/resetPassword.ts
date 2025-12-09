import type { resetPasswordSchema } from '@/app/auth/reset-password/constants/resetPassword.schema';
import type { z } from 'zod';

type TResetPassword = z.infer<typeof resetPasswordSchema>;

export type { TResetPassword };
