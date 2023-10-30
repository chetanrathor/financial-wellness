import { Grid, Box, Typography, Button, Fade } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import TextArea from '../components/TextArea'
import TextInput from '../components/TextInput'
import * as Images from '../images/index'
import { useNavigate } from 'react-router-dom';
const WaitlistMessage = () => {
  const navigate = useNavigate()
  const [inFade, setInFade] = useState(false)

  useEffect(() => {

    const id = setTimeout(() => {
      setInFade(true)
    }, 1000)

    return () => clearTimeout(id)
  }, [])
  const handelDoneClick = () => {
    navigate('/waitlist-database')
  }
  return (
    <Grid sx={{ background: 'linear-gradient(180deg, rgba(255, 246, 219, 0.15) 0%, #FFF6DB 39.53%, #FFF6DB 68.69%)', height: '100vh' }}>
      <Header></Header>
      <Grid container sx={{ background: 'inherit' }} paddingBottom={15} alignItems={'center'} justifyContent={'center'} >
        <Grid container justifyContent={'center'} alignItems={'center'} direction={'column'} maxWidth={'636px'} minHeight={'556px'} borderRadius={7} bgcolor={'#fff'} paddingX={5}>
          <Box bgcolor={"#FFF"} height={'225px'} width={'245px'} >
            {
              inFade &&
              <img src={Images.gift} width={'100%'} height={'100%'} alt="" />
            }
          </Box>
          <Fade in={inFade} timeout={1000}  >

            <Typography variant='h1' fontSize={{xs:'32px',lg:'40px'}} color={'#FFA400'}>
              CONGRATULATIONS!
            </Typography>
          </Fade>
          <Fade in={inFade}>
            <Box>
              <Typography variant='body2' textAlign={'center'}>
                You have been added on the waiting list
              </Typography>
            </Box>
          </Fade>
          <Fade in={inFade}>
            <Button variant='contained' sx={{ paddingX: 12, paddingY: 2, marginY: 4, background: 'linear-gradient(90deg, #E75553 0%, #E75553 107.32%)' }}
              onClick={handelDoneClick}
            >
              <Typography variant='h6'>
                Done
              </Typography>
            </Button>
          </Fade>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default WaitlistMessage