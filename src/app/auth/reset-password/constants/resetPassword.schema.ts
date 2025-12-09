import { z } from 'zod';

const resetPasswordSchema = z.object({
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  confirm: z.string().optional()
});

export { resetPasswordSchema };
