import React from 'react';
import { Typography } from '@mui/material';

import Link from 'next/link';

type CopyProps = {
    site?: string,
}

export default function Copyright(props: CopyProps) {
    return (
        <Typography sx={{ mt: '6%', color: '#FFF', textAlign: 'center', textShadow: '1px 2px 3px #032859' }}>
            {'Copyright ©'}
            <Link href={`https://www.${props.site}.com`}>
                {props.site}
            </Link>
            {' '}
            2000 - {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

