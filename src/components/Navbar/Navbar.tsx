import React, { FC, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Tabs, Tab } from "@material-ui/core";

interface Props {
  setValue: Function;
  value: number;
}

const Navbar: FC<Props> = ({ setValue, value }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" style={{ backgroundColor: "black" }}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h5" noWrap>
            Einstein
          </Typography>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Toolbar>
        <Tabs
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
          aria-label="simple tabs example"
        >
          <Tab label="Critique" />
          <Tab label="Answer" />
          <Tab label="Organize" />
        </Tabs>
      </AppBar>
    </div>
  );
};

export default Navbar;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    alignItems: "flex-start",
    paddingTop: theme.spacing(1)
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-start",
    paddingTop: 10
  }
}));
