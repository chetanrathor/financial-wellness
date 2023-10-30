import { Box, Grid, InputBaseProps, SxProps, TextField, TextFieldProps, Theme, styled } from '@mui/material'
import React from 'react'
import MuiTextField from '@mui/material/TextField';
import { makeStyles } from "@mui/material";
import ErroMessage from './ErroMessage';

interface PropType {
    placeholderText: string,
    type: string,
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    sx?: SxProps<Theme>,
    name?: string,
    value?: string,
    id?: string,
    error?: string,
    onBlur?: InputBaseProps['onBlur']


}

const options = {
    shouldForwardProp: (prop: string) => prop !== 'borderColor',
}
const outlinedSelectors = [
    '& .MuiOutlinedInput-notchedOutline',
    '&:hover .MuiOutlinedInput-notchedOutline',
    '& .MuiOutlinedInput-notchedOutline',
];
const MyTextField = styled(MuiTextField, options)<TextFieldProps>(() => ({

    '& .MuiOutlinedInput-root.Mui-focused ': {
        color: 'black',
        borderColor: 'red',
    },
    [outlinedSelectors.join(',')]: {
        borderWidth: 1.5,
        borderColor: 'black',
        borderStyle: 'solid'
    },
}))

const TextInput = ({ onChange, placeholderText, type, error, sx, name, value, id, onBlur }: PropType) => {



    return (
        <Grid container sx={{
            position: 'relative'
        }}>
            <MyTextField
                onBlur={onBlur}
                sx={{
                    background: '#fff',
                    borderRadius: '8px',
                    fontSize: '16px',
                    typography: 'body2',
                    fontFamily: '',
                    zIndex:200,

                    ...sx
                }}
                inputProps={{
                    sx: {
                        '&::placeholder': {
                            color: 'black', opacity: 1, fontFamily: 'Epilogue', fontSize: '16px', fontWeight: "400",
                            '&:focus': { outline: 'none' }
                        }
                    }
                }}
                name={name}
                value={value}
                id={id}
                fullWidth
                placeholder={placeholderText}
                type={type}
                onChange={onChange}
                error={error ? true : false}

            > </MyTextField>
            {
                error && <Box sx={{
                    display: 'flex',
                    justifyContent: 'end',
                    position: 'absolute',
                    top: '15%',
                    right: '2%',
                    zIndex:300,
                    background:'#fff'
                }}>
                    <Box>
                        <ErroMessage errorMessage={error}></ErroMessage>
                    </Box>
                </Box>
            }


        </Grid>

    )
}

export default TextInput