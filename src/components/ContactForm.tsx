import { SendHorizonal } from 'lucide-react'
import { useState } from 'react'
import InputMask from 'react-input-mask'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormErrorSpan } from './FormErrorSpan'
import axios from 'axios'
import { successNotification } from './Notifiers/Success'
import { RotationSpinner } from './Spinners/RotationSpinner'

const contactFormSchema = z.object({
  name: z.string().min(1, 'Digite seu nome.'),
  phone: z.string().min(1, 'Digite seu telefone.'),
  email: z.string().email('Digite seu email.'),
  description: z.string().min(1, 'Digite sua mensagem.'),
})

type ContactFormInputs = z.infer<typeof contactFormSchema>

const maxLength = 500

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  })

  const [description, setDescription] = useState('')

  async function handleContact(data: ContactFormInputs) {
    console.log(isSubmitting)
    await handleSendMessage(data)
  }

  async function handleSendMessage(data: ContactFormInputs) {
    try {
      const response = await axios.post('/api/sendEmail', {
        to: 'luisptavio.l.p@gmail.com',
        subject: `Contato: ${data.name.toUpperCase()}`,
        html: `
        <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
          </head>
          <body>

            <h1>${data.name} entrou em contato!</h1>
              
            <h2>Informações do usuário:</h2>
              <p>Nome: ${data.name}</p>
              <p>Email: ${data.email}</p>
              <p>Telefone: ${data.phone}</p>
              <p>Descrição: ${data.description}</p>
          </body>
        </html>
`,
      })

      if (response.status === 200) {
        successNotification('Email de contato enviado com sucesso!')
      }
    } catch (error) {
      console.error(error)
    }

    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleContact)}
      className="flex w-full flex-col gap-4 border-2 bg-zinc-200 px-8 pb-20 pt-8 sm:rounded-md sm:pb-8 xl:max-w-lg"
    >
      <span className="w-full text-center text-2xl font-extrabold uppercase text-violet-600">
        Formulário de Contato
      </span>

      <label htmlFor="" className="flex flex-col gap-2">
        <span className="font-medium text-zinc-500">
          Nome:{' '}
          <span className="text-sm font-extrabold text-violet-600">*</span>
        </span>
        <input
          type="text"
          placeholder="Digite seu nome"
          className="rounded-md border  px-4 py-2.5 text-zinc-950 placeholder:text-sm  focus:outline-none focus:ring-2 focus:ring-violet-500"
          {...register('name')}
        />
        <FormErrorSpan key={errors.name?.message} err={errors.name?.message} />
      </label>

      <label htmlFor="" className="flex flex-col gap-2">
        <span className="font-medium text-zinc-500">
          E-mail:{' '}
          <span className="text-sm font-extrabold text-violet-600">*</span>
        </span>
        <input
          type="email"
          placeholder="Digite seu E-mail"
          className="rounded-md border  px-4 py-2.5 text-zinc-950 placeholder:text-sm  focus:outline-none focus:ring-2 focus:ring-violet-500"
          {...register('email')}
        />
        <FormErrorSpan
          key={errors.email?.message}
          err={errors.email?.message}
        />
      </label>

      <label htmlFor="" className="flex flex-col gap-2">
        <span className="font-medium text-zinc-500">
          Telefone:{' '}
          <span className="text-sm font-extrabold text-violet-600">*</span>
        </span>
        <InputMask
          type="text"
          mask="(99) 99999-9999"
          placeholder="(xx) xxxxx-xxxx"
          className="rounded-md border  px-4 py-2.5 text-zinc-950 placeholder:text-sm  focus:outline-none focus:ring-2 focus:ring-violet-500"
          {...register('phone')}
        />
        <FormErrorSpan
          key={errors.phone?.message}
          err={errors.phone?.message}
        />
      </label>

      <label htmlFor="description" className="flex flex-col gap-2">
        <span className="font-medium text-zinc-500">
          Mensagem:{' '}
          <span className="text-sm font-extrabold text-violet-600">*</span>
        </span>
        <textarea
          id="description"
          rows={15}
          maxLength={maxLength}
          className="resize-none rounded-md bg-white px-5 py-2.5 text-zinc-950 focus:outline-none focus:ring-2 focus:ring-violet-500"
          placeholder="Digite sua mensagem aqui!"
          {...register('description')}
          onChange={(e) => setDescription(e.target.value)}
        />
        <span className="w-full text-right text-xs text-zinc-500">{`${description.length} de ${maxLength}`}</span>

        <FormErrorSpan
          key={errors.description?.message}
          err={errors.description?.message}
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 flex w-full items-center justify-center gap-3 rounded-md border-2 border-violet-100 bg-violet-600 px-8 py-2.5 font-bold text-violet-100 transition-all hover:scale-105 hover:bg-violet-500 hover:font-extrabold disabled:cursor-not-allowed  sm:max-w-[250px]"
      >
        {isSubmitting ? (
          <RotationSpinner />
        ) : (
          <>
            Enviar
            <SendHorizonal size={22} strokeWidth={2} />
          </>
        )}
      </button>
    </form>
  )
}
