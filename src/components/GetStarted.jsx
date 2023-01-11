import './getstarted.css'
import React, { useContext, useState } from 'react';
import { Box, styled } from '@mui/system';
import { Autocomplete, Card, CardContent, CardMedia, Input, InputBase, TextField, Typography } from '@mui/material';
import { actList } from '../App';
import { NavLink } from 'react-router-dom';

const Search = styled('div')({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: '0.3vw',
    width: '50%',
    height: '10%',
})
function GetStarted(props) {
    // const [country, setCountry] = useState('')
    const { actArr } = useContext(actList)
    // const countries = ['South Africa', 'Costa Rica', 'Brazil', 'Peru', 'Tanzania', 'Ecuador', 'Indonesia', 'Thailand', 'Nepal']
    return (
        <div className='container'>
            <Box height='80%' width='40%' bgcolor='white' borderRadius='4%' marginTop='5%' display='flex' flexDirection='column' justifyContent='space-evenly' alignItems='center'>
                <Typography fontSize='large' marginBottom='2%' textAlign='center' fontWeight='medium' color='secondary'>Choose a Country</Typography>
                {/* <Autocomplete
                        disablePortal
                        options={countries}
                        sx={{ width: '30vw' }}
                        onChange = {(event,value) => setCountry(value)}
                        renderInput={(params) => <TextField {...params} la="country" />}
                    /> */}
                <Box width='100%' height='80%' display='flex' justifyContent='center' flexDirection='row' flexWrap='wrap'  >
                    <NavLink to=''><div id='flagDiv' className='SA'><p className='flagText'>South Africa</p></div></NavLink>
                    <NavLink to=''><div id='flagDiv' className='Thailand'><Typography className='flagText'>Thailand</Typography></div></NavLink>
                    <NavLink to=''><div id='flagDiv' className='Costa'><Typography className='flagText'>Costa Rica</Typography></div></NavLink>
                    <NavLink to=''><div id='flagDiv' className='Nepal'><Typography className='flagText'>Nepal</Typography></div></NavLink>
                    <NavLink to=''><div id='flagDiv' className='Peru'><Typography className='flagText'>Peru</Typography></div></NavLink>
                    <NavLink to=''><div id='flagDiv' className='Tansania'><Typography className='flagText'>Tansania</Typography></div></NavLink>
                    <NavLink to=''><div id='flagDiv' className='Ecuador'><Typography className='flagText'>Ecuador</Typography></div></NavLink>
                    <NavLink to=''><div id='flagDiv' className='Indonesia'><Typography className='flagText'>Indonesia</Typography></div></NavLink>
                    <NavLink to=''><div id='flagDiv' className='Brazil'><Typography className='flagText'>Brazil</Typography></div></NavLink>
                </Box>
            </Box>
        </div >
    );
}

export default GetStarted;