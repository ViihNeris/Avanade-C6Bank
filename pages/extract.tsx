import React from 'react'
import styled from '@emotion/styled';
import Sidebar from '../components/Sidebar';
import ExtractContent from '../components/ExtractContent';

const ExtractContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`

export default function ExtractPage() {
  return (
    <ExtractContainer>
      <Sidebar />
      <ExtractContent />
    </ExtractContainer >
  )
}