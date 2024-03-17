'use client'
import { Typography, Button } from '@mui/material'
import { Form, FormTextField } from '@/components'
import { useAuthStore } from '@/stores/auth'
import { paths } from '@/config'
import Link from 'next/link'
import { RedirectType } from 'next/navigation'
import { toast } from 'react-toastify'
import { SignUpFormFields, useFormProps } from './SignUpForm.utils'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

export const SignUpForm = () => {
  const authStore = useAuthStore()
  const router = useRouter()
  const t = useTranslations()
  const postSignUp = authStore.usePostSignUp({
    onErrorToast: (message: string) => toast.error(message),
    onSuccess: () => {
      toast.success(t('signUp.accountCreated'))
      router.push(paths.signIn.root.path)
    },
  })

  const formProps = useFormProps(postSignUp)

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <div className="mb-4 flex text-start flex-wrap">
          <div className="mr-2">
            <Typography variant="h3">{t('auth.welcomeTo')}</Typography>
          </div>
          <Typography color="primary" variant="h3">
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
              variant="filled"
              label={t('common.email')}
              name={SignUpFormFields.Email}
              className="w-full"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <FormTextField
              variant="filled"
              label={t('common.password')}
              name={SignUpFormFields.Password}
              className="w-full"
              type="password"
              required
              autoComplete="on"
            />
          </div>
          <div className="mb-4 w-full">
            <FormTextField
              label={t('signUp.repeatPassword')}
              name={SignUpFormFields.RepeatPassword}
              variant="filled"
              className="w-full"
              type="password"
              required
              autoComplete="on"
            />
          </div>
          <div className="mt-5 w-full">
            <Button type="submit" variant="contained" className="w-full">
              {t('signUp.register')}
            </Button>
          </div>
          <div className="flex items-center justify-center mt-5">
            <div className="mr-1">
              <Typography>{t('signUp.alreadyRegistered')}</Typography>
            </div>
            <Link href={paths.signIn.root.path}>
              <Typography color="primary">{t('signUp.signIn')}</Typography>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  )
}
