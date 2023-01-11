import React from 'react';
import {useContext} from 'react'
import { actList } from '../../App';
import { Box, styled } from '@mui/system';
import {Typography} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import './actTypeFilter.css'
function ActTypeFilter() {
    const {actArr}=useContext(actList)
    return (
        <div className='container'>
            <Box height='80%' width='40%' bgcolor='white' borderRadius='4%' marginTop='5%' display='flex' flexDirection='column' justifyContent='space-evenly'>
            <Typography fontSize='large' marginBottom='5%' textAlign='center' fontWeight='medium' color='secondary'>Choose an Activity</Typography>
                {actArr.map((a)=>
                a.location==="South Africa"&&
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem sx={{marginLeft:'1vw',border:' 1px solid transparent', borderRadius: '1vw'}} className='listItemAct'>
                        <ListItemAvatar >
                            <Avatar alt='actTypeImg' src={a.actTypeImg}/>
                        </ListItemAvatar>
                        <ListItemText primary={a.actType} secondary={a.description}/>
                    </ListItem>
                </List>
                )}
            </Box>
        </div>
    );
}

export default ActTypeFilter;