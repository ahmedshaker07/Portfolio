import React from 'react'
import lines from '../assest/img/lines.svg'
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from "@material-ui/core/styles";
import emailjs from 'emailjs-com';

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
    const [name,setName] = React.useState("")
    const [email,setEmail] = React.useState("")
    const [message,setMessage] = React.useState("")

    const nameChanged = event =>{
        setName(event.target.value)
    }
    const emailChanged = event =>{
        setEmail(event.target.value)
    }
    const messageChanged = event =>{
        setMessage(event.target.value)
    }
    const handleSubmit = event =>{
        event.preventDefault();
        emailjs.sendForm('ahmedshaker08gmail', 'ahmedshaker08gmail', event.target, 'user_794vOIkWEmqFkd4zTTxu9')
          .then(() => {
              alert('Mail sent successfully')
              window.location.reload()
          }, (error) => {
              alert(error)
          });
    }
    return(
        <div id='contact' className='mainC'>
            <div  className='container'>
                <div className='title'>
                    <h1>CONTACT</h1>
                    <p>I would love to hear from you, If you have any inquiries, please do not hesitate to contact me</p>
                    <img src={lines} alt='lines'/>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="inputs">
                                <input type="text" name="name" className="form-control" placeholder="Name" required onChange={nameChanged}/>
                                <input type="email" name="email" className="form-control" placeholder="Email" required onChange={emailChanged}/>   
                            </div>
                            <div>
                                <textarea name="message" id="message" className="form-control form-control-text" placeholder="Message" required onChange={messageChanged}/>
                            </div>
                        </div>
                        <Button
                            variant="outlined"
                            type="submit"
                            className={classes.button}
                            endIcon={<SendIcon />}
                        >
                            Send Mail
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}