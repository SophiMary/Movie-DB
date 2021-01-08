import React from "react";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({

});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <Switch>
        <Route exact from="/Movie-DB/movies" component={Movies} />
      </Switch>
    </div>
  );
}