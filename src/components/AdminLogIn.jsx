import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogIn() {
    const [adminName, setAdminName] = useState('')
    const [adminPassword, setAdminPassword] = useState('')
    const navigate = useNavigate()
    const checkAdmin = () =>{
        if(adminName === 'admin' && adminPassword === 'admin'){
            navigate('../AdminPage')
        }
        else{
            alert('Invalid Input')
        }
    }
    return (
        <Box width='100vw' height='100vh' display='flex' alignItems='center' flexDirection='column' marginTop='7%'>
            <Typography fontSize='6vw' color='secondary' fontWeight='large' marginBottom='5%'>Admin Log In</Typography>
            <Box display='flex' flexDirection='row' alignSelf='center' alignItems='center'>
                <TextField color='secondary' sx={{ p: '3%' }} type='text' onChange={(e) => setAdminName(e.target.value)} placeholder='Name'></TextField>
                <TextField color='secondary' sx={{ p: '3%' }} type='password' onChange={(e) => setAdminPassword(e.target.value)} placeholder='Password'></TextField>
                <Button color='secondary' variant='contained' onClick={checkAdmin} sx={{ width: '8vw', height:'3.7vw' }}>Log In</Button>
            </Box>
        </Box>
    );
}

export default AdminLogIn;