import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import * as z from 'zod'

export enum SignUpFormFields {
  RepeatPassword = 'repeatPassword',
  Password = 'password',
  Email = 'email',
}

export interface SignUpFormValues {
  [SignUpFormFields.Password]: string
  [SignUpFormFields.RepeatPassword]: string
  [SignUpFormFields.Email]: string
}

const defaultValues: SignUpFormValues = {
  [SignUpFormFields.Password]: '',
  [SignUpFormFields.RepeatPassword]: '',
  [SignUpFormFields.Email]: '',
}

export type SubmitHandler = (values: SignUpFormValues) => void

export const useValidationSchema = (): z.ZodType<SignUpFormValues> => {
  const t = useTranslations()
  return z
    .object({
      [SignUpFormFields.Email]: z.string().email({ message: t('validation.wrongEmailFormat') }),
      [SignUpFormFields.Password]: z
        .string()
        .min(6, t('validation.fieldMinLength', { field: t('common.password'), characters: 6 })),
      [SignUpFormFields.RepeatPassword]: z.string(),
    })
    .refine((data) => data.password === data.repeatPassword, {
      message: t('validation.passwordDontMatch'),
      path: [SignUpFormFields.RepeatPassword],
    })
}

export const useFormProps = (submit: SubmitHandler = () => {}) => {
  const schema = useValidationSchema()
  const methods = useForm<SignUpFormValues>({
    defaultValues,
    resolver: zodResolver(schema),
    mode: 'onChange',
  })

  const onSubmit = (values: SignUpFormValues) => {
    submit(values)
  }

  return { ...methods, onSubmit }
}
