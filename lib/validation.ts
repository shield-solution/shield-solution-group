import { z } from 'zod';

export const ClientFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters.' })
    .max(255),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone), {
    message: 'Invalid phone number',
  }),
  budget: z
    .string()
    .min(2, { message: 'Budget must be at least 2 characters.' }),
});
