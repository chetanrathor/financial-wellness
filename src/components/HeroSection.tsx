import { Grid } from '@mui/material'
import React from 'react'

interface PropType {
    children: React.ReactNode
}


export const HeroSection = ({ children }: PropType) => {
    return (
        <Grid container justifyContent={'center'} sx={{
            background: 'linear-gradient(180deg, rgba(255, 226, 92, 0.10) 0%, rgba(255, 231, 163, 0.06) 100%)',
            boxShadow: '0px 0px 36px 0px rgba(254, 212, 93, 0.15)',
            // height: '100vh',
            // maxWidth:'1162px',
            // marginX:'139px'
            paddingTop:10,
            width:'100%',
            marginTop:10
        }}>
            {children}
        </Grid>
    )
}
