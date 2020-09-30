import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from './Auth';


const PrivateRoute = ({component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        (currentUser !== 'not logged in') ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/login'} />
        )
      }
    />
  )
}

export default PrivateRoute
