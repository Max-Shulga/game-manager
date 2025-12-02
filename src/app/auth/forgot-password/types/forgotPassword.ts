import type { forgotPasswordSchema } from '@/app/auth/forgot-password/constants/forgotPassword.schema';
import type { z } from 'zod';

type TForgotPassword = z.infer<typeof forgotPasswordSchema>;
export type { TForgotPassword };
