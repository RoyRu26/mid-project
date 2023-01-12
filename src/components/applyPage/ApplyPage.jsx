import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { actList } from '../../App';
import '../getstarted.css'

function ApplyPage() {
    const location = useLocation()
    const {userArr , setUserArr, actArr} = useContext(actList)
    const [firstName , setFirstName] = useState('')
    const [lastName , setLastName] = useState('')
    const [age , setAge] = useState(0)
    const [dates , setDates] = useState('')
    const [mail , setMail] = useState('')
        const updateUserArr = () =>
        {
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
            <div className='applyDiv'>
            <Typography p='3%' fontSize='4vw' textAlign='center' fontWeight='large' color='secondary'>{`Apply for ${location.state.actType} in ${location.state.country}`}</Typography>
            <Box marginTop='4vw' display='flex' justifyContent='space-around' flexWrap='wrap' flexDirection='row' alignItems='center'>
                <TextField type='text' sx={{width: '20vw'}} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name'></TextField>
                <TextField type='text' sx={{width: '20vw'}} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name'></TextField>
                <TextField type='number' sx={{width: '20vw'}} onChange={(e) => setAge(e.target.value)} placeholder='Age'></TextField>
                <TextField type='email' sx={{width: '20vw'}} onChange={(e) => setMail(e.target.value)} placeholder='E-Mail'></TextField>
                <FormControl sx={{width: '10vw'}}>
                    <InputLabel>Optional Dates</InputLabel>
                    <Select onChange={(e) => setDates(e.target.value)} label='Optional Dates'>
                        {actArr.map((a,i) => (a.location === location.state.country && a.actType===location.state.actType && a.days === location.state.days) && a.dates.map((d) => <MenuItem value={d}>{d}</MenuItem>)
                        )}
                    </Select>
                </FormControl>
                <Button sx={{bgcolor:'black'}} onClick={() => updateUserArr()}>Apply</Button>
            </Box>
        </div>
    )
}

export default ApplyPage;