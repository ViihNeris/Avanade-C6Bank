import React, { useState } from 'react';
import { Stack, Snackbar as Container, AlertColor } from '@mui/material';
import Alert from '../utils/Alert';
import { color } from '@mui/system';
// as = apelido, qualquer um

// enum SeverityColor{
//   a = 'sucess',
//   b = 'info',
//   c = 'warning',
//   d = 'error'
// }

type SnackbarProps = {
  open: boolean;
  hide: number;
  message: string;
  severity: AlertColor; //poderia utilizar o SeverityColor que EU criei também.;
}

export default function Snackbar(props: SnackbarProps) {
  const [open, setOpen] = useState<boolean>(props.open);

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Stack>
      <Container open={open} autoHideDuration={props.hide * 1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.severity ? props.severity : 'success'} sx={{ width: '100%' }}>
          {props.message} <a href="/" style={{color: '#b9ebd8'}}>Clique aqui para acessar a Home: www.c6bankViih.com</a>
        </Alert>
      </Container>
    </Stack>
  )
}
