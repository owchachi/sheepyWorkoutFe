import { styled, TextField } from '@mui/material'

export const StyledTextField = styled(TextField)(({ theme }) => ({
  // outlined

  '& .MuiInputBase-input': {
    color: theme.palette.secondary.contrastText,
  },

  '& .MuiInputBase-root': {
    '& fieldset': {
      borderColor: theme.palette.secondary.light,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.dark,
    },
  },

  // fillled

  '& .MuiFilledInput-underline': {
    borderBottom: `1px solid ${theme.palette.secondary.light}`,
  },

  '& .MuiFilledInput-underline:hover': {
    borderBottom: `1px solid ${theme.palette.primary.dark}`,
  },

  '& .MuiFilledInput-root': {
    backgroundColor: theme.palette.secondary.main,
  },

  '& .MuiFilledInput-root:hover': {
    backgroundColor: theme.palette.secondary.main,
  },

  // underline

  '& .MuiInput-root': {
    borderBottom: `1px solid ${theme.palette.secondary.light}`,
  },

  '& .MuiInput-root:hover': {
    borderBottom: `1px solid ${theme.palette.primary.dark}`,
  },
}))
