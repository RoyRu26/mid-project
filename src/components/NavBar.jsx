import styled from '@emotion/styled';
import { AppBar, Button, Drawer, IconButton, List, ListItem, ListItemIcon, Toolbar, Tooltip, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SpaIcon from '@mui/icons-material/Spa';
import { Box } from '@mui/system';
import { NavLink, useNavigate } from 'react-router-dom';
import { actList } from '../App';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SendIcon from '@mui/icons-material/Send';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function NavBar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const StyledToolBar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between'
    })
    const { userArr, setUserArr } = useContext(actList)
    const deleteReq = (index) => {
        { setUserArr(userArr.filter((request, reqIndex) => index !== reqIndex)) }
    }
    const navigate = useNavigate()
    return (
        <Box>
            <AppBar position='fixed' sx={{ marginBottom: '30px', zIndex: '2' }}>
                <StyledToolBar>
                    <Box display='flex' flexDirection='row' alignItems='center' gap='6vw' >
                        <NavLink style={{ textDecoration: 'none' }} to='/'><Box display='flex' flexDirection='row' alignItems='center'>
                            <Typography className='Title' fontWeight='large' color='secondary' variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>Give Back Nation</Typography>
                            <SpaIcon color='secondary' size='large' />
                        </Box></NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to='/GetStarted'><Typography fontWeight='medium' color='secondary'>Get Started</Typography></NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to='/Gallery'><Typography fontWeight='medium' color='secondary'>Gallery</Typography></NavLink>
                    </Box>
                    <IconButton size='large' edge='start' color='secondary' onClick={() => setIsDrawerOpen(true)}><MenuIcon /></IconButton>
                </StyledToolBar>
            </AppBar>
            <Drawer anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box display='flex' justifyContent='space-between' flexDirection='column' gap='3vw' p='1vw' height='100%' sx={{ width: { xs: '50vw', sm: '20vw' } }} textAlign='center' role='presentation'>
                    <Box>
                        <Typography fontWeight='medium' color='secondary'>Pending Requests</Typography>
                        {userArr.length === 0 ? <Typography marginTop='9%' sx={{opacity: '.4'}} display='flex' alignItems='center' gap='3%' justifyContent='center'><SentimentVeryDissatisfiedIcon />Nothing to see</Typography> :
                            <List>{userArr.map((a, i) =>
                                <ListItem key={i}>
                                    <ListItemIcon><SendIcon /></ListItemIcon>
                                    <Typography>{`${a.actType} in ${a.location}`}<br />{a.dates}
                                        <IconButton onClick={() => { if (window.confirm('Are you sure you wish to delete this request?')) deleteReq(i) }}><DeleteForeverIcon /></IconButton></Typography>
                                </ListItem>
                            )}</List>
                        }
                    </Box>
                    <NavLink style={{ textDecoration: 'none' }} to='./AdminLogIn'><Typography color='secondary' sx={{fontSize: {xs: '4vw', sm: '1vw'}}} fontWeight='medium'>Admin Access</Typography></NavLink>
                </Box>
            </Drawer>
        </Box>
    );
}

export default NavBar;