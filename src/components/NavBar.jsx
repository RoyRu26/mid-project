import styled from '@emotion/styled';
import { AppBar, Drawer, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SpaIcon from '@mui/icons-material/Spa';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';


function NavBar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const StyledToolBar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between'
    })
    // const arr=[1,2,3,4,5]
    return (
        <Box>
            <AppBar position='fixed' sx={{ marginBottom: '30px', zIndex: '1' }}>
                <StyledToolBar>
                    <Box display='flex' flexDirection='row' alignItems='center' gap='6vw' >
                    <Box display='flex' flexDirection='row' alignItems='center'>
                        <Typography className='Title' fontWeight='large' color='secondary' variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>Give Back Nation</Typography>
                        <SpaIcon color='secondary' size='large'/>
                    </Box>
                    <NavLink style={{textDecoration:'none'}} to='/About'><Typography fontWeight='medium' color='secondary'>About</Typography></NavLink>
                    <NavLink style={{textDecoration:'none'}} to='/GetStarted'><Typography fontWeight='medium' color='secondary'>Activities</Typography></NavLink>
                    <NavLink style={{textDecoration:'none'}} to='/ActTypeFilter'><Typography fontWeight='medium' color='secondary'>ActTypeFilter</Typography></NavLink>
                    </Box>
                    <IconButton size='large' edge='start' color='secondary' onClick={() => setIsDrawerOpen(true)}><MenuIcon /></IconButton>
                </StyledToolBar>
            </AppBar>
            <Drawer anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box display='flex' flexDirection='column' gap='3vw' p='1vw' height='100%' width='20vw' textAlign='center' role='presentation'>
                <NavLink style={{textDecoration:'none'}} to='/About'><Typography fontWeight='medium' color='secondary'>My Saved Activities</Typography></NavLink>
                {/* <Typography>{arr.map(a=><ul><li>{a}</li></ul>)}</Typography> */}
                </Box>
            </Drawer>
        </Box>
    );
}

export default NavBar;