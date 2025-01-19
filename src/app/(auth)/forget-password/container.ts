import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { ForgetPasswordSchema } from '@/utils/schemas/auth.schema'

type IForgetPasswordForm = z.infer<typeof ForgetPasswordSchema>

const ForgetPasswordContainer = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IForgetPasswordForm>({
    resolver: zodResolver(ForgetPasswordSchema),
  })

  const onSubmit = (data: IForgetPasswordForm) => {
    console.log(data)
  }

  return { handleSubmit, register, errors, onSubmit }
}

export default ForgetPasswordContainer
