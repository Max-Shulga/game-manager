import { z } from 'zod';

const signUpSchema = z
  .object({
    email: z.email({ message: 'Invalid email' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
    confirm: z.string().min(6)
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  });

export { signUpSchema };
