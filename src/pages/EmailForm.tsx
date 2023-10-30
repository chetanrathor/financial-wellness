import { Box, Button, Grid, TextField, TextFieldProps, Theme, Typography, createStyles, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import * as Images from '../images/index'
import MuiTextField from '@mui/material/TextField';
import TextInput from '../components/TextInput';
import TextArea from '../components/TextArea';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ErroMessage from '../components/ErroMessage';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { addNewEnquiry } from '../state/waitlist.slice';
import { addEnquiry } from '../types';
const EmailForm = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const [borderColor, setBorderColor] = useState('black')
    const handelFormSubmit = (values: addEnquiry) => {
        dispatch(addNewEnquiry(values))
        window.scrollTo({ top: 0 })
        navigate('/cheers')
    }
    const joinFormValidationSchema = Yup.object().shape({
        fullName: Yup.string().required('Full name is required.').min(3, 'Min 3 characters.'),
        email: Yup.string().email('Email is invalid.').required('Email is required.'),
        contact: Yup.string().required('Contact is required.').matches(/^[0-9]{10}$/, { message: 'Contact is invalid.' }),
        message: Yup.string().required().min(3, 'Min 3 characters.')
    })

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            contact: '',
            message: ''
        },
        validationSchema: joinFormValidationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            handelFormSubmit(values)
        },
    })

    let key: string = 'email'


    return (
        <Grid sx={{ background: 'linear-gradient(180deg, rgba(255, 246, 219, 0.15) 0%, #FFF6DB 39.53%, #FFF6DB 68.69%)', height: '100vh' }}>
            <Header></Header>
            <Grid container sx={{ background: 'inherit' }} paddingBottom={15} paddingX={{ xs: 2 }}>
                <Grid maxWidth={'525px'} marginX={'auto'}>
                    <Grid item paddingBottom={8}>
                        <Box display={'flex'} alignItems={'center'} columnGap={1} flexDirection={{ xs: 'row-reverse', lg: 'row' }}>
                            <img height={'51px'} width={'51px'} src={Images.cup} alt="" />
                            <Typography variant='h2' color={'#23827A'}>
                                Join now and get AED50
                            </Typography>
                        </Box>

                    </Grid>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid item container rowGap={3}>
                            <h1>{formik.touched.fullName}</h1>
                            <TextInput onBlur={() => { formik.setFieldTouched('fullName', true) }} error={formik.errors.fullName && formik.touched.fullName ? formik.errors.fullName : ''} onChange={formik.handleChange} value={formik.values.fullName} id='fullName' name='fullName' placeholderText='Full Name' type='text' />
                            <TextInput onBlur={() => { formik.setFieldTouched('email', true) }} error={formik.errors.email && formik.touched.email ? formik.errors.email : ''} onChange={formik.handleChange} value={formik.values.email} id='email' name='email' placeholderText='Email' type='text' />
                            <TextInput onBlur={() => { formik.setFieldTouched('contact', true) }} error={formik.errors.contact && formik.touched.contact ? formik.errors.contact : ''} onChange={formik.handleChange} value={formik.values.contact} id='contact' name='contact' placeholderText='Contact' type='text' />
                            <TextArea onBlur={() => { formik.setFieldTouched('message', true) }} error={formik.errors.message && formik.touched.message ? formik.errors.message : ''} onChange={formik.handleChange} value={formik.values.message} name='message' id='message' style={{}} cols={30} rows={8} />
                            <Button type='submit' variant='contained' sx={{ paddingY: '13px', paddingX: 11, bgcolor: '#313131', '&:hover': { background: '#313131' } }}
                            >
                                <Typography variant='h4'>
                                    Submit
                                </Typography>
                            </Button>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default EmailForm