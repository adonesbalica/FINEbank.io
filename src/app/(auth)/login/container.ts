import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

import { LoginSchema } from '@/utils/schemas/auth.schema'

type ILoginForm = z.infer<typeof LoginSchema>

const LoginContainer = () => {
  const [showPassword, setShowPassword] = useState(false)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: zodResolver(LoginSchema),
  })

  const onSubmit = (data: ILoginForm) => {
    console.log(data)
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return { handleSubmit, register, errors, onSubmit, handleShowPassword }
}

export default LoginContainer
