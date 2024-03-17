import { TextFieldProps } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { StyledTextField } from './FormTextField.styles'

type Props = {
  name: string
} & TextFieldProps

export const FormTextField = (props: Props) => {
  const { formState, register } = useFormContext()
  return (
    <>
      <StyledTextField
        variant="standard"
        error={!!formState.errors[props.name]}
        helperText={(formState.errors[props.name]?.message as string) || ''}
        {...register(props.name)}
        {...props}
      />
    </>
  )
}
