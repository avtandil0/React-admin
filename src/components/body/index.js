import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import NotFoundPage from "../NotFoundPage/index";
import User from "../user/index";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Body() {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const moviesState = useSelector((state) => state.movieReducer);

  useEffect(() => {
    // dispatch(getMovies());
    console.log("useEffect Body -------------------", moviesState);
  }, []);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      <Switch>
        <Route exact path="/">
          {/* <Movies /> */}
        </Route>
        <Route path="/users" children={<User />}></Route>
        {/* <Route path="/movie/:id" children={<Movie />} />
        <Route path="/genres/:id/:name" children={<Movies />} /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </main>
  );
}
