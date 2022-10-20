import React from 'react';
import styled from '@emotion/styled';
import bg from '../src/backgroundprof.webp';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: url('/backgroundprof.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`

export default function RegisterPage() {
  return (
    <Container>Register</Container>
  )
}
