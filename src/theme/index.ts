import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: 'Urbanist sans-serif',
        h2: {
            fontFamily: 'Urbanist',
            fontSize: '38px',
            fontWeight: 700,
            lineHeight: '140%'
        },
        h3:{
            fontFamily: 'Urbanist',
            fontSize: '38px',
            fontWeight: 600,
            lineHeight: '140%',
            textAlign:'center'
        },
        h4:{
            fontFamily: 'Urbanist',
            fontSize: '24px',
            fontWeight: 500,
            lineHeight: '140%'
        },
        h6:{
            fontFamily: 'Urbanist',
            fontSize: '24px',
            fontWeight: 700,
            lineHeight: '140%'
        },
        subtitle1:{
            fontFamily: 'Epilogue sans-serif',
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: '140%',
            color:'#000'
        },
         button:{
            color:'#FFFFFF',
            fontFamily:'Urbanist',
            fontSize: '27.697px',
            fontWeight: 500,
            lineHeight: '100%',
            textTransform:'initial'
            

         }
    }
})