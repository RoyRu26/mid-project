import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './notfound.css'

function NotFound() {
    return (
        <div>
            <Box bgcolor='black' height='100vh' width='100vw' display='flex' alignItems='center' justifyContent='center'>
                <Typography className='notFound' fontSize='7vw' fontWeight='large' color='secondary'>404 - Not Found</Typography>
            </Box>
        </div>
    );
}

export default NotFound;