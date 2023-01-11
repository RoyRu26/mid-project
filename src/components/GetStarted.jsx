import './getstarted.css'
import React, { useState } from 'react';
import { Box, styled } from '@mui/system';
import { Input, InputBase, TextField, Typography } from '@mui/material';

const Search = styled('div')({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: '0.3vw',
    width: '50%',
    height: '10%',
})
function GetStarted(props) {
    const [country, setCountry] = useState('')
    return (
        <div className='container'>
            <Box height='80%' width='40%' bgcolor='white' borderRadius='4%' marginTop='5%' display='flex' flexDirection='column' justifyContent='space-evenly'>
                <Typography color='secondary'>Choose a country</Typography>
                <Input type='text' placeholder='counry' sx={{border:'3% solid black'}} onChange={(e) => setCountry(e.target.value)}/>
            </Box>
        </div>
    );
}

export default GetStarted;