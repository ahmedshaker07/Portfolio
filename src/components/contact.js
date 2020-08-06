import React from 'react'
import lines from '../assest/img/lines.svg'
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from "@material-ui/core/styles";
const styles= {
    button:{
        fontFamily:"Poppins",
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '50px',
        borderRadius:"0",
        marginRight:"2px",
        "&:hover":{
            boxShadow: "0px 10px 18px 0px rgba(0, 0, 0, 0.15)"
        },
        marginBottom: '60px'
    }
}
const useStyles= makeStyles(styles)

export default function Contact(){
    const classes = useStyles();

    return(
        <div id='contact' className='mainC'>
            <div  className='container'>
                <div className='title'>
                    <h1>CONTACT</h1>
                    <p>I would love to hear from you, If you have any inquiries, please do not hesitate to contact me</p>
                    <img src={lines} alt='lines'/>
                    <form>
                        <div>
                            <div className="inputs">
                                <input type="text" name="name" className="form-control" placeholder="Name" required/>
                                <input type="email" name="email" className="form-control" placeholder="Email" required/>   
                            </div>
                            <div>
                                <textarea name="message" id="mesaage" className="form-control form-control-text" placeholder="Message" required/>
                            </div>
                        </div>
                        <Button
                            variant="outlined"
                            color="white"
                            className={classes.button}
                            endIcon={<SendIcon />}
                        >
                            Send Message
                        </Button>
                    </form>
                   
                </div>
            </div>
        </div>
    )
}