import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

const styles= {
    button1:{
        fontFamily:"sans firas",
        fontWeight:"500",
        fontSize:"16px",
        height:"50px",
        width:'50%',
        borderRadius:"0",
        marginRight:"2px",
        backgroundColor:"black",
        color:"white",
        "&:hover":{
            backgroundColor: "black"
        }
    },
    button2:{
        fontFamily:"sans firas",
        fontWeight:"500",
        fontSize:"16px",
        height:"50px",
        width:'50%',
        borderRadius:"0",
        marginLeft:"2px",
        border:"1px solid"
    }
}
const useStyles= makeStyles(styles)
export default function Welcome(){
    const classes = useStyles();
    return(   
        <div id="home" className="mainWS">
            <div className="container">
                <div className="div1">
                    <h1>AHMED HOSSAM</h1>
                    <p>Full Stack Developer</p>
                    <div className="buttons">
                        <Button className={classes.button1} variant="contained" href='#home'>hire me</Button>
                        <Button className={classes.button2} variant="outlined" href='#about'>Explore</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}