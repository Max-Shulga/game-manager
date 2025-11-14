import type { signUpSchema } from '@/app/auth/constants/auth.schema';
import type { z } from 'zod';

type TSignUp = z.infer<typeof signUpSchema>;

export type { TSignUp };
