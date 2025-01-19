import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

import { SignUpSchema } from '@/utils/schemas/auth.schema'

type ISignUpForm = z.infer<typeof SignUpSchema>

const SignUpContainer = () => {
  const [showPassword, setShowPassword] = useState(false)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISignUpForm>({
    resolver: zodResolver(SignUpSchema),
  })

  const onSubmit = (data: ISignUpForm) => {
    console.log(data)
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return { handleSubmit, register, errors, onSubmit, handleShowPassword }
}

export default SignUpContainer
