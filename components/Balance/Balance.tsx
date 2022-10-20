import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
// import { ShowSVG } from '../svg/ShowSVG';
// import { HideSVG } from '../svg/HideSVG';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LinearProgress from '@mui/material/LinearProgress';


const BalanceContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: #afd1f4;
    background-color: #242424;
    padding-left: 30px;
    padding-bottom: 30px;
    & > div > strong {
        font-size: 1.5em;
        font-weight: 600;
        margin-right: 10%;
        display: flex;
        align-items: center;
    }
    & > div {
        display: flex;
        align-items: center;
    }
    & > p {
        font-size: 1.3em;
        margin: 0;
    }
    & > button{
    border: none;
    background: transparent;
    color: #f8f8f8;
    
    & div button {
        justify-content: space-between;
        border:none;
        position: absolute;
        right: 30px;
    }
  }

`
type BalanceProps = {
    amount: number;
}
export default function Balance(props: BalanceProps) {
    const [show, setShow] = useState<boolean>(false);
    return (
        <BalanceContainer>
            <p>Saldo</p>
            <div>

                {show ?
                    <strong>
                        {new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(props.amount)}
                    </strong>
                    :
                    <strong>R$ <LinearProgress sx={{ width: 138, ml: 2 }} color='inherit' /> </strong>
                }

                <Button color='inherit' onClick={() => setShow(!show)}> {show ? <Visibility /> : <VisibilityOff />} </Button>
                {/* <Button onClick={() => setShow(!show)}> {show ? <ShowSVG /> : <VisibilityOff />} </Button> */}

            </div>
        </BalanceContainer>
    )
}
