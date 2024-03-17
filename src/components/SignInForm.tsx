'use client'
import { Typography, Button } from '@mui/material'
import { Form, FormTextField } from '@/components'
import { useAuthStore } from '@/stores/auth'
import { paths } from '@/config'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { SignInFormFields, useFormProps } from './SignInForm.utils'
import { useTranslations } from 'next-intl'

export const SignInForm = () => {
  const authStore = useAuthStore()
  const t = useTranslations()
  const postSignIn = authStore.usePostSignIn({
    onErrorToast: (message: string) => toast.error(message),
  })

  const formProps = useFormProps(postSignIn)

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <div className="mb-4 flex text-start flex-wrap">
          <Typography variant="h3" className="mr-2">
            {t('auth.welcomeTo')}
          </Typography>
          <Typography variant="h3" color="primary">
            {t('common.sheepyWorkout')}
          </Typography>
        </div>
        <div className="mb-4">
          <Typography className="text-left" variant="subtitle1">
            {t('auth.trackAndAnalyzeYourWorkout')}
          </Typography>
        </div>
        <Form props={{ ...formProps }}>
          <div className="mb-4 w-full">
            <FormTextField
              label={t('common.email')}
              name={SignInFormFields.Email}
              variant="filled"
              className="w-full"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <FormTextField
              label={t('common.password')}
              name={SignInFormFields.Password}
              variant="filled"
              className="w-full"
              type="password"
              required
            />
          </div>
          <div className="mt-5 w-full">
            <Button type="submit" variant="contained" className="w-full">
              {t('signIn.logIn')}
            </Button>
          </div>
          <div className="flex items-center justify-center mt-5">
            <div className="mr-1">
              <Typography variant="body1">{t('signIn.noAccount')}</Typography>
            </div>
            <Link href={paths.signUp.root.path}>
              <Typography variant="body1" color="primary">
                {t('signIn.signUp')}
              </Typography>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  )
}
