import './getstarted.css'
import React, { useContext, useState } from 'react';
import { Box, styled } from '@mui/system';
import { Autocomplete, Card, CardContent, CardMedia, Input, InputBase, TextField, Tooltip, Typography, tooltipClasses } from '@mui/material';
import { actList } from '../App';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

const Search = styled('div')({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: '0.3vw',
    width: '50%',
    height: '10%',
})
function GetStarted(props) {
    const { actArr } = useContext(actList)
    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: '#fefefe',
          color: 'purple',
          fontSize: '1vw',
          border: '0.2vw solid purple',
        },
      }));
    return (
        <div className='container'>
            <Box height='80%' width='40%' bgcolor='rgba(255,255,255,.8)' borderRadius='4%' marginTop='5%' display='flex' flexDirection='column' justifyContent='space-evenly' alignItems='center'>
                <Typography fontSize='2.5vw' marginBottom='2%' textAlign='center' fontWeight='large' color='secondary'>Choose a Country</Typography>
                {/* <Autocomplete
                        disablePortal
                        options={countries}
                        sx={{ width: '30vw' }}
                        onChange = {(event,value) => setCountry(value)}
                        renderInput={(params) => <TextField {...params} la="country" />}
                    /> */}
                <Box width='90%' gap='3%' height='80%' display='flex' justifyContent='center' flexDirection='row' flexWrap='wrap'  >
                    <NavLink to="/ActTypeFilter/South Africa"><HtmlTooltip title='South Africa' followCursor><div id='flagDiv' className='SA'><Typography height='auto' className='flagText'>South Africa</Typography></div></HtmlTooltip></NavLink>
                    <NavLink to='/ActTypeFilter/Thailand'><HtmlTooltip title='Thailand' followCursor><div id='flagDiv' className='Thailand'><Typography className='flagText'>Thailand</Typography></div></HtmlTooltip></NavLink>
                    <NavLink to='/ActTypeFilter/Costa Rica'><HtmlTooltip title='Costa Rica' followCursor><div id='flagDiv' className='Costa'><Typography className='flagText'>Costa Rica</Typography></div></HtmlTooltip></NavLink>
                    <NavLink to='/ActTypeFilter/Nepal'><HtmlTooltip title='Nepal' followCursor><div id='flagDiv' className='Nepal'><Typography className='flagText'>Nepal</Typography></div></HtmlTooltip></NavLink>
                    <NavLink to='/ActTypeFilter/Peru'><HtmlTooltip title='Peru' followCursor><div id='flagDiv' className='Peru'><Typography className='flagText'>Peru</Typography></div></HtmlTooltip></NavLink>
                    <NavLink to='/ActTypeFilter/Tanzania'><HtmlTooltip title='Tanzania' followCursor><div id='flagDiv' className='Tansania'><Typography className='flagText'>Tansania</Typography></div></HtmlTooltip></NavLink>
                    <NavLink to='/ActTypeFilter/Ecuador'><HtmlTooltip title='Ecuador' followCursor><div id='flagDiv' className='Ecuador'><Typography className='flagText'>Ecuador</Typography></div></HtmlTooltip></NavLink>
                    <NavLink to='/ActTypeFilter/Indonesia'><HtmlTooltip title='Indonesia' followCursor><div id='flagDiv' className='Indonesia'><Typography className='flagText'>Indonesia</Typography></div></HtmlTooltip></NavLink>
                    <NavLink to='/ActTypeFilter/Brazil'><HtmlTooltip title='Brazil' followCursor><div id='flagDiv' className='Brazil'><Typography className='flagText'>Brazil</Typography></div></HtmlTooltip></NavLink>
                </Box>
            </Box>
        </div >
    );
}

export default GetStarted;