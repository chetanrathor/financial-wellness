import { Box, Grid } from '@mui/material'
import React from 'react'
import * as Images from "../images/index";
// import image from '../../public/Logo.svg'
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate()
    const hanelLogoClick = ()=>{
        navigate('/',{preventScrollReset:false})
    }
    return (
        <Grid container paddingLeft={{ xs: 2, lg: 5 }} maxWidth={'1440px'} margin={'auto'}>
            <Box padding={{ xs: 2, lg: 4 }}>
                <img onClick={hanelLogoClick} src={Images.logo}></img>
            </Box>
        </Grid>
    )
}

export default Header