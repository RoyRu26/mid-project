import React from 'react';
import {useContext} from 'react'
import { actList } from '../App';

function About() {
    const {x}=useContext(actList)
    return (
        <div style={{backgroundColor:'blue',height:'100vh'}}>
            {console.log(x)}
            hi
        </div>
    );
}

export default About;