import { create } from 'zustand'
import { ApiResponse, ApiRequest } from '@/types'
import { useServerAction } from '@/hooks/useServerAction'
import { PostSignInBody, PostSignUpBody, postSignIn, postSignUp } from '@/server/services'

type AuthStore = {
  isTodosLoading: boolean
  todos: any
  isSignInLoading: boolean
  postSignIn?: ApiResponse<string>
  isSignUpLoading: boolean
  usePostSignIn: ApiRequest<PostSignInBody>
  postSignUp?: ApiResponse<string>
  usePostSignUp: ApiRequest<PostSignUpBody>
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  todos: undefined,
  isTodosLoading: false,
  // useGetTodos: () => {
  //   const setIsLoading = (isLoading: boolean) => set(() => ({ isTodosLoading: isLoading }))

  //   const execute = useServerAction({
  //     action: refetchTodos,
  //     setIsLoading,
  //     onFinished: () => {},
  //   })
  //   return execute
  // },
  isSignInLoading: false,
  postSignIn: undefined,
  usePostSignIn: (onFinished) => {
    const setIsLoading = (isLoading: boolean) => set(() => ({ isSignInLoading: isLoading }))
    const setData = (data: ApiResponse<string>) => set(() => ({ postSignIn: data }))
    const execute = useServerAction<PostSignInBody, ApiResponse<string>>({
      action: postSignIn,
      setIsLoading,
      setData,
      onError: onFinished?.onError,
      onSuccess: onFinished?.onSuccess,
      onErrorToast: onFinished?.onErrorToast,
    })
    return execute
  },
  isSignUpLoading: false,
  postSignUp: undefined,
  usePostSignUp: (onFinished) => {
    const setIsLoading = (isLoading: boolean) => set(() => ({ isSignUpLoading: isLoading }))
    const setData = (data: ApiResponse<string>) => set(() => ({ postSignUp: data }))
    const execute = useServerAction<PostSignUpBody, ApiResponse<string>>({
      action: postSignUp,
      setIsLoading,
      setData,
      onError: onFinished?.onError,
      onSuccess: onFinished?.onSuccess,
      onErrorToast: onFinished?.onErrorToast,
    })
    return execute
  },
}))
