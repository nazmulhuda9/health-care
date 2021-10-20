import React from 'react';
import { Redirect, Route, useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    let history = useHistory();
    let location = useLocation();
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            />

            }
        />
    );
};

export default PrivateRoute;