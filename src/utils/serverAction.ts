import { ServerActionParams } from '@/types/utils'

interface ApiError extends Error {
  status: number
  errors: string
}

export const serverAction = async <T, B extends Object>({
  url,
  method,
  tags,
  body,
}: ServerActionParams<B>) => {
  try {
    const response = await fetch(`http://localhost:3001${url}`, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      next: { tags: tags },
    })
    const data = await response.json()
    if (!response.ok) {
      const error = new Error(data?.message || 'unexpected error') as ApiError
      error.status = response.status
      error.errors = JSON.stringify(data)
      throw error
    }
    return {
      data: JSON.parse(JSON.stringify(data)) as T,
      error: undefined,
      status: response.status,
    }
  } catch (e) {
    const isApiError = (err: any): err is ApiError => err instanceof Error
    if (isApiError(e)) {
      console.log(e.errors)
      return {
        data: undefined,
        error: e.message,
        status: e.status,
      }
    }
  }
}
