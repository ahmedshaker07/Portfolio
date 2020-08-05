import React from 'react'
import lines from '../assest/img/lines.svg'
import LinearProgress from '@material-ui/core/LinearProgress';

export default function About(){
    return(
        <div id='about' className='mainAS'>
            <div  className='about'>
                <h1>ABOUT</h1>
                <img src={lines} alt='lines'/>
                <p>Hello! I'm Ahmed, a full stack developer and a guy slighty obsessed for code quality. 
                    I’m currently available for internships. 
                    If you have an opportunity that you can give me to get started, then get in touch.
                </p>
                {/* <a href="https://drive.google.com/file/d/1YLpCUuu5Wr8tjfLWEP9cpV6I11H_UtGE/view?usp=sharing" download>Download my cv</a> */}
                <a href="https://drive.google.com/u/0/uc?id=1YLpCUuu5Wr8tjfLWEP9cpV6I11H_UtGE&export=download" download>Download my cv</a>
            </div>
            <div className='skills'>
                <h1>my Skills</h1>    
                <img src={lines} alt='lines'/>
                <div className='progressContainer'>
                    <div>
                        <h1>
                            HTML&CSS
                        </h1>
                        <LinearProgress variant="determinate" color="secondary" value={90} />
                    </div>
                    <div>
                        <h1>
                            Javascript
                        </h1>
                        <LinearProgress variant="determinate" color="secondary" value={90} />
                    </div>
                    <div>
                        <h1>
                            MERN Stack
                        </h1>
                        <LinearProgress variant="determinate" color="secondary" value={100} />
                    </div>
                    <div>
                        <h1>
                            Java
                        </h1>
                        <LinearProgress variant="determinate" color="secondary" value={75} />
                    </div>
                </div>
            </div>
        </div>
    )
}