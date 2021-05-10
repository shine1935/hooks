import React, { Fragment, Suspense } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import routes from './router';

const renderRoutes = (routes) => {
  if (!Array.isArray(routes)) {
    return null;
  }

  return (
    <Switch>
      {routes.map((route, index) => {
        if (route.redirect) {
          return (
            <Redirect
              key={route.path || index}
              exact={route.exact}
              strict={route.strict}
              from={route.path}
              to={route.redirect}
            />
          );
        }
        return (
          <Route
            key={route.path || index}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={() => {
              const renderChildRoutes = renderRoutes(route.childRoutes);
              if (route.component) {
                return (
                  <Fragment>
                    <Suspense fallback={<h1>Loading profile...</h1>}>
                      <route.component route={route}>
                        {renderChildRoutes}
                      </route.component>
                    </Suspense>
                  </Fragment>
                );
              }
              return renderChildRoutes;
            }}
          />
        );
      })}
    </Switch>
  );
};
const AppRouter = () => <Router>{renderRoutes(routes)}</Router>;
export default AppRouter;
