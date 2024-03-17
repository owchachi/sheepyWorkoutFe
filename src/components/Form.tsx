import {
  UseFormProps,
  UseFormHandleSubmit,
  FormProvider,
  UseFormReturn,
  FieldValues,
} from 'react-hook-form'
import { PropsWithChildren } from 'react'

interface FormProps<T extends FieldValues> extends UseFormProps, UseFormReturn<T> {
  onSubmit: (values: any) => void
  handleSubmit: UseFormHandleSubmit<any>
}

interface Props<T extends FieldValues> {
  props: FormProps<T>
}

export const Form = <T extends FieldValues>({ children, props }: PropsWithChildren<Props<T>>) => {
  return (
    <FormProvider {...props}>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>{children}</form>
    </FormProvider>
  )
}
