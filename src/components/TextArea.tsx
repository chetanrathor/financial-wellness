import { Box, Grid, InputBaseProps } from '@mui/material'
import React, { CSSProperties, ChangeEventHandler } from 'react'
import ErroMessage from './ErroMessage'

interface PropType {
    name: string,
    id: string,
    cols: number,
    rows: number,
    style?: CSSProperties,
    onChange: ChangeEventHandler<HTMLTextAreaElement> | undefined,
    value: string,
    error?: string,
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement>


}
const TextArea = ({ cols, id, name, error, rows, style, onChange, onBlur, value }: PropType) => {
    return (
        <Grid container sx={{
            position: 'relative'
        }}>

            <textarea onBlur={onBlur} placeholder='Message' onChange={onChange} value={value} className='message-textarea' style={{ border: error ? '1px solid red' : '1px solid black', borderRadius: '8px', width: '100%', resize: 'none', padding: '24px', ...style }} name={name} id={id} cols={cols} rows={rows}></textarea>
            {
                error && <Box sx={{
                    display: 'flex',
                    justifyContent: 'end',
                    position: 'absolute',
                    top: '10%',
                    right: '2%'
                }}>
                    <Box>
                        <ErroMessage errorMessage={error}></ErroMessage>
                    </Box>
                </Box>
            }

        </Grid>
    )
}

export default TextArea