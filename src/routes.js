import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Linhas from './pages/Linhas'
import Corredores from './pages/Corredores';
import Paradas from './pages/Paradas';
import Documentacao from './pages/Documentacao';
import NotFound from './pages/NotFound';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + "/"} component={Home}/>
                <Route exact path={process.env.PUBLIC_URL + "/linhas"} component={Linhas}/>
                <Route exact path={process.env.PUBLIC_URL + "/corredores"} component={Corredores}/>
                <Route exact path={process.env.PUBLIC_URL + "/paradas" }component={Paradas}/>
                <Route exact path={process.env.PUBLIC_URL + "/documentacao"} component={Documentacao}/>
                <Route exact path={process.env.PUBLIC_URL + "/not-found"} component={NotFound}/>
                <Redirect to={process.env.PUBLIC_URL + "/not-found"} />
            </Switch>
        </BrowserRouter>
    )
}
