import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { actList } from '../../App';
import '../getstarted.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function ApplyPage() {
    const location = useLocation()
    const { userArr, setUserArr, actArr } = useContext(actList)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState(0)
    const [dates, setDates] = useState('')
    const [mail, setMail] = useState('')
    const form = useRef()
    const navigate = useNavigate()
    const updateUserArr = () => {
        if (firstName !== '' && lastName !== '' && age > 0 && mail !== '' && dates !== '') {
            if (window.confirm(`Are you sure you want to apply for ${location.state.actType} in ${location.state.country}?`)) {
                if (userArr.length < 3) {
                    setUserArr([...userArr, { firstName: firstName, lastName: lastName, age: age, mail: mail, actType: location.state.actType, location: location.state.country, dates: dates }])
                    emailjs.sendForm('service_yaaa6zj', 'template_jfphetu', form.current, 'zARXXwcWVFn8ywbi0')
                        .then((result) => {
                            console.log(result.text);
                        }, (error) => {
                            console.log(error.text);
                        });
                        navigate('/')
                }
                else {
                    alert('Too many requests, to add a request delete an existing one.')
                }
            }
        }
        else {
            alert('Please Fill All Fields')
        }
    }
    return (
        <form ref={form} className='applyDiv'>
            <Box height='70%' width='80%' bgcolor='rgba(255,255,255,.95)' borderRadius='3vw' sx={{ marginTop: { xs: '25%', sm: '5%' } }} display='flex' flexDirection='column' justifyContent='space-evenly' alignItems='center'>
                <Typography p='3%' sx={{ marginBottom: {xs: '2%', sm: '9%'}}} fontSize='4vw' textAlign='center' fontWeight='large' color='secondary'>{`Apply for ${location.state.actType} projects in ${location.state.country}`}</Typography>
                <Box marginBottom='4vw' display='flex' gap='3vw' justifyContent='space-around' flexWrap='wrap' sx={{ flexDirection: { xs: 'column', sm: 'row' } }} flexDirection='row' alignItems='center'>
                    <TextField name='actType' type='text' sx={{ width: '20vw', display: 'none' }} value={location.state.actType} placeholder='act'></TextField>
                    <TextField name='countryName' type='text' sx={{ width: '20vw', display: 'none' }} value={location.state.country} placeholder='act'></TextField>
                    <Box display='flex' flexDirection='column'>
                        <TextField name='firstName' color='secondary' type='text' sx={{ width: { xs: '50vw', sm: '20vw' }, marginBottom: '7%' }} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name'><input type='text' /></TextField>
                        <TextField name='lastName' color='secondary' type='text' sx={{ width: { xs: '50vw', sm: '20vw' }, marginBottom: '7%' }} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name'></TextField>
                    </Box>
                    <Box display='flex' flexDirection='column'>
                        <TextField color='secondary' type='number' sx={{ width: { xs: '50vw', sm: '20vw' }, marginBottom: '7%' }} onChange={(e) => setAge(e.target.value)} placeholder='Age'></TextField>
                        <TextField name='toEmail' color='secondary' type='email' sx={{ width: { xs: '50vw', sm: '20vw' }, marginBottom: '7%' }} onChange={(e) => setMail(e.target.value)} placeholder='E-Mail'></TextField>
                    </Box>
                    <Box display='flex' flexDirection='column'>
                        <FormControl sx={{ width: { xs: '50vw', sm: '20vw' } }}>
                        <InputLabel id='selectDate' sx={{ marginBottom: '7%', textAlign: 'center' }}>Optional Dates</InputLabel>
                            <Select labelId='selectDate' name='date' color='secondary' onChange={(e) => setDates(e.target.value)} label='Optional Dates' autoWidth>
                                {actArr.map((a, i) => (a.location === location.state.country && a.actType === location.state.actType && a.days === location.state.days) && a.dates.map((d) => <MenuItem value={d}>{d}</MenuItem>)
                                )}
                            </Select>
                        </FormControl>
                    </Box>
                    <Button sx={{ bgcolor: '#8e24aa' }} onClick={() => updateUserArr()}>Apply</Button>
                </Box>
            </Box>
        </form>
    )
}

export default ApplyPage;