import { z } from 'zod';

const forgotPasswordSchema = z.object({
  email: z.email({ message: 'Invalid email' })
});

export { forgotPasswordSchema };
