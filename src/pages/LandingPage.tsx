import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import * as Images from '../images/index'
import Emojis from "../json/emojis.json";
import Emoji from '../components/Emoji'
const LandingPage = () => {
    return (
        <Grid >
            <Header></Header>
            <HeroSection>
                <Grid container maxWidth={'1162px'} alignSelf={'center'} direction={{ xs: 'column-reverse' }}>
                    <Grid item container xs={10} lg={6} paddingX={{ xs: 2, lg: 0 }}>
                        <Typography variant='h2'>
                            They say, when life gives you lemons, make lemonade!
                        </Typography>
                        <Box display={'flex'} flexDirection={'column'} rowGap={5} marginY={3}>
                            <Typography variant='h4'>
                                But your lemonade might taste different from others considering how well you play with the ingredients.
                            </Typography>
                            <Typography variant='h6'>
                                Let’s see how your lemonade tastes!
                            </Typography>
                        </Box>
                        <Button variant='contained' sx={{
                            background: 'linear-gradient(90deg, #E75553 0%, #ED8663 107.32%)',
                            paddingY: '15px',
                            borderRadius: '8.655px'
                        }}>
                            <Typography variant='button'>
                                Join now <img src={Images.arrow} alt="" />
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={0} lg={6} container justifyContent={'end'}>
                        <Box maxHeight={'557px'} maxWidth={'475px'}>
                            <img src={Images.heroImage}  height={'100%'} width={'100%'} style={{aspectRatio:'6/5'}}></img>
                        </Box>

                    </Grid>
                </Grid>
                <Grid container marginTop={10} direction={'column'} rowGap={8} paddingBottom={10}>
                    <Grid item container>
                        <Grid item xs={12} lg={6} margin={'auto'}>

                            <Typography variant='h3'>
                                Take the test & know which of the
                                lemon personalities you resonate with
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container justifyContent={'center'} alignContent={'center'} rowGap={3} columnGap={4} direction={{ xs: 'column', lg: 'row' }} >
                        {
                            Emojis.map((item) => {
                                return (
                                    <Emoji text={item.text} imagePath={item.imagePath} height={item.height} width={item.width} key={item.id}></Emoji>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </HeroSection>
        </Grid>
    )
}

export default LandingPage