import React from 'react'
import lines from '../assest/img/lines.svg'

export default function Service(){
    return(
        <div id='service' className= 'mainSS'>
            {/* <div class="title">
                <h3>What i do</h3>
                <img src={lines}  alt="lines"/>
            </div> */}
            <div className='container'>
                <div class="service">
                    <h4>Front-end</h4>
                    <p>As a javascript developer, I have experience in HTML5 and CSS3 techniques working with jQuery or more advanced javascript MVC frameworks such as angular</p>
                </div>
                <div class="service">
                    <h4>Back-end</h4>
                    <p>Utilising php frameworks such as Zend or creating bespoke code, I've written services supporting thousands of users, including REST APIs, e-learning applications and more.</p>
                </div>  
                    <div class="service">
                        <h4>Consultancy</h4>
                        <p>As well as providing development services, I can also help you decide strategic roadmaps via consultancy services.</p>
                </div>
            </div>
        </div>
    )
}