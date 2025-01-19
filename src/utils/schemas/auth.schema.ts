import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters long',
  }),
})

export const SignUpSchema = z.object({
  name: z
    .string()
    .min(4, { message: 'Name must be at least 4 characters long' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters long',
  }),
})

export const ForgetPasswordSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
})
