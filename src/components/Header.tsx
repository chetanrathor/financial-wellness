import { Box, Grid } from '@mui/material'
import React from 'react'
import * as Images from "../images/index";
// import image from '../../public/Logo.svg'
const Header = () => {
    return (
        <Grid container paddingLeft={{xs:2,lg:5}} maxWidth={'1440px'} margin={'auto'}>
            <Box padding={{xs:2,lg:4}}>
            <img src={Images.logo}></img>
            </Box>
        </Grid>
    )
}

export default Header