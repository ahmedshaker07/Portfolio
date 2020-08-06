import React from 'react'
import lines from '../assest/img/lines.svg'

export default function Service(){
    return(
        <div id='service' className='testa'>
            <div id='service' className='mainSS'>
                <div className= 'pic'/> 
                <div className='container'>
                    <div class="title">
                        <h1>What i do</h1>
                        <img src={lines}  alt="lines"/>
                    </div> 
                    <div className='services'>
                        <div class="service">
                            <h4>Front-end</h4>
                            <p>As a javascript developer, I have experience in HTML5 and CSS3 techniques working with advanced javascript MVC frameworks such as react</p>
                        </div>
                        <div class="service">
                            <h4>Back-end</h4>
                            <p>Utilising php frameworks such as Zend or creating bespoke code, I've written services supporting thousands of users, including REST APIs, e-learning applications and more.</p>
                        </div>  
                        <div class="service">
                            <h4>Consultancy</h4>
                            <p>As well as providing development services, I can also help you decide strategic roadmaps via free consultancy services.</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        
        
    )
}