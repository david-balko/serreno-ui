import { inject, observer } from "mobx-react";
import { Route, Redirect, Switch } from "react-router-dom";
import { AppInit } from "./AppInit/AppInit";
import { AppMain } from "./AppMain/AppMain";
import { SplashScreen } from "./SplashScreen";
import { cssConstants } from '../consts/theme';

export const AppRouter = inject()(observer((props) =>  {


  return (
    <div style={{height: `calc(100vh - ${cssConstants.header.height}px)`}}>
      <Switch>
        <Route exact path="/" render={() => <AppMain />}/>
        {/* <Route exact path="/splash" render={() => <SplashScreen />}/>
        <Route exact path="/init" render={() => <AppInit />}/> */}
        <Redirect to="/" />
      </Switch>
    </div>
  )
}))
