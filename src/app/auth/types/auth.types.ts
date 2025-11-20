import type { authSchema } from '@/app/auth/constants/auth.schema';
import type { z } from 'zod';

type TAuth = z.infer<typeof authSchema>;

export type { TAuth };
