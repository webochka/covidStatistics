import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from './routes';

export const Routes = () => {
    const routesJSX = Object.values(routes).map(({url, page: Page}) => (
        <Route key={url} exact path={ url }>
            <Page />
        </Route>
    ));

    return (
        <Switch>
            {routesJSX}
        </Switch>
    );
}
