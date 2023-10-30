import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import { AppDispatch, RootState } from '../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWaitlist } from '../state/waitlist.slice'

const WaitlistDatabase = () => {

    const { waitlist } = useSelector((state: RootState) => state.waitlist)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(fetchWaitlist())
    }, [])
   

    

    
    return (

        <Grid sx={{ background: '#FFF6DB' }} container direction={'column'} height={'100vh'}>
            <Grid container direction={'column'}>
                <Grid item container >
                    <Header />
                </Grid>
                <Grid item bgcolor={'#FFF6DB'} width={'100%'}>
                    <Box sx={{ maxWidth: '1169px', margin: 'auto', paddingY: 3, background: '#E75553', borderRadius: '47px 47px 0px 0px;', border: '1.5px solid', borderBottom: 'none' }}>
                        <Typography variant='h6' color={'#FFFFFF'} textAlign={'center'}>Waitlist Database</Typography>
                    </Box>
                    <Paper sx={{ width: '100%', overflow: 'hidden', background: '#FFF6DB' }}>
                        <TableContainer sx={{ boxShadow: 'none', maxWidth: '1169px', margin: 'auto', background: 'inherit' }} >
                            <Table stickyHeader sx={{ minWidth: 650, maxWidth: '1169px', }} aria-label="simple table">
                                <TableHead sx={{ background: '#FFF6DB' }}>

                                    <TableRow sx={{ '&:last-child td, &:last-child th': { borderRadius: '0' }, }}>
                                        <TableCell sx={{ border: '1.5px solid black', background: 'transparent' }}>
                                            <Typography variant='subtitle2' align="center">
                                                S.No
                                            </Typography>
                                        </TableCell>
                                        <TableCell sx={{ border: '1.5px solid black', background: 'transparent' }} align="center">
                                            <Typography variant='subtitle2'>
                                                Name
                                            </Typography>
                                        </TableCell>
                                        <TableCell sx={{ border: '1.5px solid black', background: 'transparent' }} align="center">
                                            <Typography variant='subtitle2'>
                                                Email
                                            </Typography>
                                        </TableCell>
                                        <TableCell sx={{ border: '1.5px solid black', background: 'transparent' }} align="center">
                                            <Typography variant='subtitle2'>
                                                Contact no.
                                            </Typography>
                                        </TableCell>
                                        <TableCell sx={{ border: '1.5px solid black', background: 'transparent' }} align="center">
                                            <Typography variant='subtitle2'>
                                                Message
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {waitlist.map((row,index) => (
                                        <TableRow
                                            key={row._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: '1.5px solid black' } }}
                                        >
                                            <TableCell align="center" component="th" scope="row" sx={{ border: '1.5px solid black' }}>
                                                <Typography variant='body1'>
                                                    {index + 1}
                                                </Typography>

                                            </TableCell>
                                            <TableCell align="center" component="th" scope="row" sx={{ border: '1.5px solid black' }}>
                                                <Typography variant='body1'>
                                                    {row.email}
                                                </Typography>

                                            </TableCell>
                                            <TableCell align="center" component="th" scope="row" sx={{ border: '1.5px solid black' }}>
                                                <Typography variant='body1'>
                                                    {row.email}
                                                </Typography>

                                            </TableCell>
                                            <TableCell align="center" sx={{ border: '1.5px solid black' }} >
                                                <Typography variant='body1'>
                                                    {row.contact}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="center" sx={{ border: '1.5px solid black' }} > <Typography variant='body1'> {row.message}</Typography></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default WaitlistDatabase