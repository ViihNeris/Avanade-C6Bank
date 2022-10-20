import React, { useEffect, useState, FormEvent } from 'react';
import {
    Typography,
    Container,
    Button,
    TextField,
    Checkbox,
    Box,
    FormControlLabel,
    CssBaseline,
    Stack,
} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../components/utils/Copyright/';
// @mui/material
import Snackbar from '../components/Snackbar';
import Login from '../components/Form/Login';
// Arquivo a parte (Alert)
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


// type CopyProps = {
//     site?: string,
// }

// function Copyright(props: CopyProps) {
//     return (
//         <Typography sx={{ mt: '6%', color: '#FFF', textAlign: 'center', textShadow: '1px 2px 3px #032859' }}>
//             {'Copyright ©'}
//             <Link href={`https://www.${props.site}.com`}>
//                 {props.site}
//             </Link>
//             {' '}
//             2000 - {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     )
// }

const theme = createTheme();

export default function LoginPage() {
    // state != variável
    // one way data binding = o react envia dados para o DOM. O que o DOM faz não importa.
    const [email, setEmail] = useState<string | undefined | null>('');

    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);
    // const [contador, setContador] = useState<number>(0);



    //Execute automaticamente após o primeiro render da página
    // useEffect(() => {
    //     if (contador == 0) document.title = `Executando pela primeira vez`;
    //     else document.title = `Executando: ${contador}...`

    //     console.log(`useEffect\nExecutado pela ${contador} vez.`)
    // }, []);



    // const inputLogin = useRef(null);
    // useEffect(()=>{
    //     if(inputLogin.current) {inputLogin.current.focus()};
    // },[]);

    return (
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='xs'>
                <CssBaseline />

                {/* Arquivo a parte (Stack) */}
                {/* A linha que ficará no lugar será: 
                <Snackbar open={open} duration={6} message={'Usuário logado com sucesso! ...Aguarde...'}>
                */}

                {/* <button onClick={() => setContador(contador + 1)}>Contador + 1</button>
                Contador: {contador}. */}

                {/* Login.tsx */}
                <Login />
                <Copyright site='avanade' />
                </Container>
        </ThemeProvider>
    )
}


