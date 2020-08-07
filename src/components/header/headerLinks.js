import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Scrollspy from 'react-scrollspy'

const styles = {
  list: {
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit"
  },
  listItem: {
    float: "left",
    color: "black",
    position: "relative",
    display: "block", 
    width: "auto",
    margin: "0",
    padding: "0",
    borderBottom: "2px solid transparent",
    transition: "border-color .35s ease-in-out",
    "&:hover,&:focus": {
      backgroundColor: "transparent",
      borderBottom: "2px solid #f50057"
    }
  },
  navLink: {
    color: "inherit",
    position: "relative",
    padding: "20px",
    textTransform: "uppercase",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex"
  },
  navLink1: {
    borderBottom: "2px solid #f50057"
  }
}
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {

  const classes = useStyles();

    return (
      <Scrollspy items={ ['home', 'about', 'service','contact'] } currentClassName={classes.navLink1}>
          <ListItem className={classes.listItem}>
            <a className={classes.navLink} href="#home">Home</a>
          </ListItem>
          <ListItem className={classes.listItem}>
            <a className={classes.navLink} href="#about">About</a>
          </ListItem>
          <ListItem className={classes.listItem}>
            <a className={classes.navLink} href="#service">Service</a>
          </ListItem>
          <ListItem className={classes.listItem}>
            <a className={classes.navLink} href="#contact">Contact</a>
          </ListItem>
        </Scrollspy>
    );
}

