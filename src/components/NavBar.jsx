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
    return (
        <Box>
            <AppBar position='fixed' sx={{ marginBottom: '30px', zIndex: '1' }}>
                <StyledToolBar>
                    <IconButton size='large' edge='start' color='secondary' onClick={() => setIsDrawerOpen(true)}><MenuIcon /></IconButton>
                    <NavLink style={{textDecoration:'none'}} to='/About'><Typography fontWeight='medium' color='secondary'>About</Typography></NavLink>
                    <NavLink style={{textDecoration:'none'}} to=''><Typography fontWeight='medium' color='secondary'>Activities</Typography></NavLink>
                    <Box display='flex' flexDirection='row' alignItems='center'>
                        <Typography className='Title' fontWeight='large' color='secondary' variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>Give Back Nation</Typography>
                        <SpaIcon color='secondary' size='large'/>
                    </Box>
                </StyledToolBar>
            </AppBar>
            <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box p='3%' width='30vw' textAlign='center' role='presentation'>

                </Box>
            </Drawer>
        </Box>
    );
}

export default NavBar;