import React from "react";
import NavDrawer from "./drawer/NavDrawer";
import Header from "./header/header";
import Body from "./body/index";
import "./App.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  BrowserRouter as Router,
} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const setting = useSelector((state) => state.settingReducer);
  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <Header />
        {/* <Loader /> */}
        <NavDrawer />
        <Body />
      </Router>
    </div>
  );
}

export default App;
