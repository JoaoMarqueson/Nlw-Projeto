'use client'

import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRightIcon, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const subscripitionSchema = z.object({
  name: z.string().min(2, 'Digite seu nome Completo'),
  email: z.string().email('Digite um E-mail válido'),
})

type subscripitionSchema = z.infer<typeof subscripitionSchema>

export function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<subscripitionSchema>({
    resolver: zodResolver(subscripitionSchema),
  })

  function onSubscribe(data: subscripitionSchema) {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>
      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Digite Seu Nome Completo"
              {...register('name')}
            />
          </InputRoot>
          {errors.name && (
            <p className="text-danger text-xs font-semibold">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField
              type="email"
              placeholder="Digite Seu e-mail"
              {...register('email')}
            />
          </InputRoot>
          {errors.email && (
            <p className="text-danger text-xs font-semibold">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <Button type="submit">
        Confirmar
        <ArrowRightIcon />
      </Button>
    </form>
  )
}
