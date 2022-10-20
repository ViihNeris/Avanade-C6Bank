import React from 'react';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { red } from '@mui/material/colors';

const ExtractTotalContainer = styled.div`
    display: flex;
    width: 100%;
    height: 20vh;
    color: #042b53;
    align-items: center;
    justify-content: center;
`

export default function ExtractTotal() {
  return (
    <ExtractTotalContainer>
      <Button color='inherit' sx={{ background: "#e2f4f6", width: 200, pt: 1, pb: 1, fontSize: 20 }} href="/login">Sair</Button>
    </ExtractTotalContainer>
  )
}
