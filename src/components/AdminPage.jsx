import { Box, Button, List, ListItem, TextField, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { height } from '@mui/system';
import React, { useContext, useRef, useState } from 'react';
import { actList } from '../App';
import emailjs from '@emailjs/browser';
import { NavLink, useNavigate } from 'react-router-dom';

function AdminPage() {
    const [disabled, setDisabled] = useState(false)
    const { userArr, setUserArr } = useContext(actList)
    const [notes, setNotes] = useState('')
    const [approved, setApproved] = useState([])
    const form = useRef()
    const navigate = useNavigate()
    const handleRequest = async(bool, index, formRef) => {
        if (bool) {
            alert('Request approved')
            emailjs.sendForm('service_mertw8m', 'template_zy8njls', form.current, 'rDGBrhGgBIgi-w9Ff')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            }
            else {
                alert('Request denied')
                emailjs.sendForm('service_mertw8m', 'template_a1bdawd', form.current, 'rDGBrhGgBIgi-w9Ff')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            }
    }

    return (
        <Box width='100vw' minHeight='100vh' sx={{ marginTop: { xs: '20%', sm: '4.4%' } }} display='flex' flexDirection='column' alignItems='center'>
            <Typography color='secondary' fontSize='5vw' fontWeight='large'>Request Manager</Typography>
            <List>
                {userArr.map((request, i) =>
                    <ListItem key={i}>
                        <form ref={form}>
                            <Box sx={{ height: { xs: '30vh', sm: '25vh' }, flexDirection: { xs: 'column', sm: 'row' } }} minWidth='80vw' display='flex' alignItems='center' flexDirection='row' justifyContent='space-evenly' border='0.2vw solid purple' borderRadius='2vw'>
                                <TextField name='requestMail' value={request.mail} sx={{ display: 'none' }}></TextField>
                                <TextField name='requestFname' value={request.firstName} sx={{ display: 'none' }}></TextField>
                                <TextField name='requestLname' value={request.lastName} sx={{ display: 'none' }}></TextField>
                                <TextField name='requestAct' value={request.actType} sx={{ display: 'none' }}></TextField>
                                <TextField name='requestCountry' value={request.country} sx={{ display: 'none' }}></TextField>
                                <TextField name='requestDate' value={request.dates} sx={{ display: 'none' }}></TextField>
                                <Box display='flex' flexDirection='column'>
                                    <Typography p='1.5%' color='secondary'>{`${request.firstName} ${request.lastName}`}</Typography>
                                    <Typography p='1.5%' color='secondary'>{`${request.actType} in ${request.location}`}</Typography>
                                    <Typography p='1.5%' color='secondary'>{request.mail}</Typography>
                                </Box>
                                <TextField name='notes' color='secondary' placeholder='Add notes' sx={{ p: '1%', width: '50%' }} onChange={(e) => setNotes(e.target.value)}></TextField>
                                <Box display='flex' flexDirection='row' gap='2%'>
                                    <Button sx={{ p: '1%' }} color='secondary' variant='contained' onClick={() => handleRequest(true, i, form)}>Accept Request</Button>
                                    <Button sx={{ p: '1%' }} color='error' variant='contained' onClick={() => handleRequest(false, i, form)}>Deny Request</Button>
                                </Box>
                            </Box>
                        </form>
                    </ListItem>)}
            </List>
        </Box >
    );
}

export default AdminPage;