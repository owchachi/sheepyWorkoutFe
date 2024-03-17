import { useEffect, useTransition, useRef } from 'react'

interface ServerActionArgs<P, R> {
  action: (_: P) => Promise<string>
  setIsLoading: (isLoading: boolean) => void
  setData: (data: R) => void
  onError?: () => void
  onErrorToast?: (message: string) => void
  onSuccess?: () => void
}

export const useServerAction = <P, R>(
  actionHandlerArgs: ServerActionArgs<P, R>,
): ((_: P) => Promise<R | undefined>) => {
  const [isPending, startTransition] = useTransition()
  const resolver = useRef<(value?: R | PromiseLike<R>) => void>()

  useEffect(() => {
    actionHandlerArgs.setIsLoading(isPending)
  }, [isPending]) // eslint-disable-line

  const runAction = async (args: P): Promise<R | undefined> => {
    startTransition(async () => {
      const res = await actionHandlerArgs.action(args)
      const data = await JSON.parse(res)
      actionHandlerArgs.setData(data)

      if (data?.error) {
        if (actionHandlerArgs?.onError) actionHandlerArgs?.onError()
        if (actionHandlerArgs?.onErrorToast) actionHandlerArgs?.onErrorToast(data.error)
      } else {
        if (actionHandlerArgs.onSuccess) actionHandlerArgs.onSuccess()
      }
    })

    return new Promise((resolve) => {
      resolver.current = resolve
    })
  }

  return runAction
}

export type ServerAction = <P, R>(
  actionHandlerArgs: ServerActionArgs<P, R>,
) => (_: P) => Promise<R | undefined>
