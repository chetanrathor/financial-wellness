import { Grid, Typography } from '@mui/material'
import React from 'react'
import * as Images from "../images/index";

interface PropType {
    errorMessage: string
}

const ErroMessage = ({ errorMessage }: PropType) => {
    return (
        <Grid container alignItems={'center'} columnGap={1} padding={'10px'} borderRadius={'10px'} bgcolor={'rgba(255, 129, 129, 0.51)'}>
            <Grid item height={'18px'} width={'19px'}>
                <img src={Images.ErrorLogo} height={'100%'} width={'100%'} alt="" />
            </Grid>
            <Grid item>
                <Typography variant='body1' fontWeight={600} color={'#B90000'}>
                    {errorMessage}
                </Typography>
            </Grid>

        </Grid>
    )
}

export default ErroMessage