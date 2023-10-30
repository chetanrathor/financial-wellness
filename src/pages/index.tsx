import React from 'react'
import LandingPage from './LandingPage'
import { Grid } from '@mui/material'
import EmailForm from './EmailForm'
import WaitlistMessage from './WaitlistMessage'
import WaitlistDatabase from './WaitlistDatabase'
import { Outlet } from 'react-router-dom'

const IndexPage = () => {
    return (
        <Grid margin={'auto'}>
            {/* <LandingPage></LandingPage> */}
            {/* <EmailForm></EmailForm> */}
            {/* <WaitlistMessage></WaitlistMessage> */}
            {/* <WaitlistDatabase></WaitlistDatabase> */}
            <Outlet></Outlet>
        </Grid>
    )
}

export default IndexPage