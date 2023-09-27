import nodemailer, { Transporter } from 'nodemailer'
import type { NextApiRequest, NextApiResponse } from 'next'
import dotenv from 'dotenv'
import { z } from 'zod'

dotenv.config()

const sendEmailSchema = z.object({
  to: z.string(),
  subject: z.string(),
  html: z.string(),
})

const transporter: Transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  port: parseInt(process.env.SMTP_PORT!),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { to, subject, html } = sendEmailSchema.parse(req.body)

  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      html,
    })
    res.status(200).json({ message: 'E-mail enviado com sucesso!' })
  } catch (error) {
    res.status(400).json({ message: 'Erro ao enviar o e-mail.' })
  }
}
