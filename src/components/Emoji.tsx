import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
interface PropType {
    imagePath: string,
    alt?: string,
    height?: string,
    width?: string,
    text?: string
}

const Emoji = ({ imagePath, alt, height, width, text }: PropType) => {
    return (
        <Grid container direction={'column'} width={'250px'} justifyContent={'center'}>
            <Grid item container justifyContent={'center'}>
                <Box height={height ?? '100px'} width={width ?? '100px'}>
                    <img src={imagePath} alt={alt ?? imagePath} height={'100%'} width={'100%'} />
                </Box>
            </Grid>
            <Grid item container justifyContent={'center'}>
                <Typography variant='subtitle1'>
                    {text ?? "Practical Achiever"}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Emoji