import React from 'react'
import lines from '../assest/img/lines.svg'

export default function About(){
    return(
        <div id='about'className='mainAS'>
            <h1>ABOUT</h1>
            <img src={lines} alt='lines'/>
            <p>Hello! I'm Ahmed, a full stack developer and a guy slighty obsessed for code quality. 
                I’m currently available for internships. 
                If you have an opportunity that you can give me to get started, then get in touch.
            </p>
            <a href="http://www.grad.illinois.edu/sites/default/files/pdfs/cvsamples.pdf" download>Download my cv</a>
            <h1>Skills</h1>    
            <img src={lines} alt='lines'/>
        </div>
    )
}