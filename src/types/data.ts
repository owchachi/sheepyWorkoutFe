export interface ApiResponse<T> {
  data: T
  error?: string
  status: number
}

export interface OnRequestFinish {
  onErrorToast?: (message: string) => void
  onError?: () => void
  onSuccess?: () => void
}

export type ApiRequest<T> = (onFinished?: OnRequestFinish) => (_: T) => Promise<any>
