import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";

const styles = {
  appBar: {
    padding: "0.625rem 0",
    color: "#555",
    backgroundColor: "#fff",
    boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s",
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: "25px",
    color: "#FFFFFF"
  },
  white: {
    border: "0",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    backgroundColor: "#fff !important",
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)"
  },
  fixed: {
    position: "fixed",
    zIndex: "1100"
  },
  container: {
    marginRight: "auto",
    marginLeft: "auto",
    width: "75%",
    justifyContent: "space-between",
  },
  logo: {
    fontWeight: "700",
    fontSize: "24px",
    textTransform: "Uppercase",
    "&:hover,&:focus": {
      background: "transparent"
    }
  },
  contact: {
    textTransform: "Uppercase",
    "&:hover,&:focus": {
      background: "transparent"
    }
  }
}
const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const {color, rightLinks, brand, fixed} = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.fixed]: fixed
  });

  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
    }
    else{
      document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
    }
  };
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>       
        <Button className={classes.logo}>{brand}</Button>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}


