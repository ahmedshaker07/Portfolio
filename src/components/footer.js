import React from "react";
// material-ui core components
import {makeStyles} from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Toolbar from "@material-ui/core/Toolbar";

const styles = {
  container: {
    justifyContent: "space-between"
  }
}
const useStyles = makeStyles(styles);

export default function Footer() {
  const classes = useStyles();
  return (
    <footer id="colophon" className="footer">
        <Toolbar className={classes.container}>
          <div className='cont'>
            <div>
              <IconButton href='https://www.facebook.com/Ahmed.Shaker.07' target="_blank">
                <FacebookIcon color="secondary"/>
              </IconButton>
              <IconButton href='https://twitter.com/ahmedshaker07' target="_blank">
                <TwitterIcon color="secondary"/>
              </IconButton>
              <IconButton href='https://www.instagram.com/ahmedshaker07' target="_blank">
                <InstagramIcon color="secondary"/>
              </IconButton>
              <IconButton href='https://github.com/ahmedshaker07' target="_blank">
                <GitHubIcon color="secondary"/>
              </IconButton>
            </div>
            <div className="phone">
              <p>Phone: +201220294989</p>
            </div>
          </div>
          <IconButton href='#' aria-label="delete">
            <ArrowUpwardIcon color="secondary"/>
          </IconButton>
          <p >2020. All Rights Reserved</p>
        </Toolbar>
    </footer>
  );
}
