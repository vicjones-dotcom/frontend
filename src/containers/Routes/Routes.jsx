import React from "react";
import { Route, Switch } from "react-router-dom";
import EmotionsList from "../EmotionsList/EmotionsList";
import EmotionsRegister from "../EmotionsRegister/EmotionsRegister";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/emotions">
        <EmotionsList />
      </Route>
      <Route path="/add">
        <EmotionsRegister />
      </Route>
    </Switch>
  );
};
