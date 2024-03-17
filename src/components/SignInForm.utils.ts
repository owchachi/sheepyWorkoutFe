import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import * as z from 'zod'

export enum SignInFormFields {
  Password = 'password',
  Email = 'email',
}

export interface SignInFormValues {
  [SignInFormFields.Password]: string
  [SignInFormFields.Email]: string
}

const defaultValues: SignInFormValues = {
  [SignInFormFields.Password]: '',
  [SignInFormFields.Email]: '',
}

export type SubmitHandler = (values: SignInFormValues) => void

export const useValidationSchema = (): z.ZodType<SignInFormValues> => {
  const t = useTranslations()
  return z.object({
    [SignInFormFields.Email]: z.string().email({ message: t('validation.wrongEmailFormat') }),
    [SignInFormFields.Password]: z.string(),
  })
}

export const useFormProps = (submit: SubmitHandler = () => {}) => {
  const schema = useValidationSchema()
  const methods = useForm<SignInFormValues>({
    defaultValues,
    resolver: zodResolver(schema),
    mode: 'onChange',
  })

  const onSubmit = (values: SignInFormValues) => {
    submit(values)
  }

  return { ...methods, onSubmit }
}
