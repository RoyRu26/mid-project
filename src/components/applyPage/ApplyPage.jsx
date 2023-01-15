import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { actList } from '../../App';
import '../getstarted.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function ApplyPage() {
    const location = useLocation()
    const {userArr , setUserArr, actArr} = useContext(actList)
    const [firstName , setFirstName] = useState('')
    const [lastName , setLastName] = useState('')
    const [age , setAge] = useState(0)
    const [dates , setDates] = useState('')
    const [mail , setMail] = useState('')
    const form = useRef()
        const updateUserArr = () =>
        {
            emailjs.sendForm('service_yaaa6zj', 'template_jfphetu', form.current, 'zARXXwcWVFn8ywbi0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            if(firstName !== '' && lastName !== '' && age > 0 && mail !== '' && dates !== '')
            {
                userArr.length < 3 ?
                setUserArr([...userArr, {firstName: firstName, lastName: lastName, age: age, mail: mail, actType: location.state.actType, location: location.state.country, dates: dates}])
                : 
                alert('Too many requests, to add a request delete an existing one.')
                
            }
            else
            {
                alert('Please Fill All Fields')
            }
        }
        console.log(location.state.days);
        return (
            <form ref={form} className='applyDiv'>
            <Typography p='3%' fontSize='4vw' textAlign='center' fontWeight='large' color='secondary'>{`Apply for ${location.state.actType} in ${location.state.country}`}</Typography>
            <Box marginTop='4vw' display='flex' justifyContent='space-around' flexWrap='wrap' flexDirection='row' alignItems='center'>
                <TextField name='actType' type='text' sx={{width: '20vw',display:'none'}} value={location.state.actType} placeholder='act'></TextField>
                <TextField name='countryName' type='text' sx={{width: '20vw',display:'none'}} value={location.state.country} placeholder='act'></TextField>
                <TextField name='firstName' type='text' sx={{width: '20vw'}} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name'></TextField>
                <TextField name='lastName' type='text' sx={{width: '20vw'}} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name'></TextField>
                <TextField type='number' sx={{width: '20vw'}} onChange={(e) => setAge(e.target.value)} placeholder='Age'></TextField>
                <TextField name='toEmail' type='email' sx={{width: '20vw'}} onChange={(e) => setMail(e.target.value)} placeholder='E-Mail'></TextField>
                <FormControl sx={{width: '10vw'}}>
                    <InputLabel>Optional Dates</InputLabel>
                    <Select name='date' onChange={(e) => setDates(e.target.value)} label='Optional Dates'>
                        {actArr.map((a,i) => (a.location === location.state.country && a.actType===location.state.actType && a.days === location.state.days) && a.dates.map((d,i) => <MenuItem value={d}>{d}</MenuItem>)
                        )}
                    </Select>
                </FormControl>
                <Button sx={{bgcolor:'black'}} onClick={() => updateUserArr()}>Apply</Button>
            </Box>
        </form>
    )
}

export default ApplyPage;