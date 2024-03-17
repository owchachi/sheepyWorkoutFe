'use server'
import { serverAction } from '@/utils/serverAction'
import { PostSignInBody, PostSignUpBody } from '@/server/services/auth.types'
import { cookies } from 'next/headers'

export const postSignIn = async (body: PostSignInBody) => {
  const res = await serverAction<string, PostSignInBody>({
    url: '/sign-in',
    method: 'POST',
    body,
  })
  if (res?.data) {
    cookies().set('token', res.data, { secure: true })
  }
  return JSON.stringify(res)
}

export const postSignUp = async (body: PostSignUpBody) => {
  const res = await serverAction<string, PostSignUpBody>({
    url: '/user',
    method: 'POST',
    body,
  })
  if (res?.data) {
    cookies().set('token', res.data, { secure: true })
  }
  return JSON.stringify(res)
}
