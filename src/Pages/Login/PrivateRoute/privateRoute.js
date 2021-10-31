import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './privateRoute.css'

const PrivateRoute = ({ children, ...rest }) => {
    const  {user, isLoading} = useAuth();
        if(isLoading){
            return <div class="text-center spinner">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        
        }
    return (
        <Route
        {...rest}
            render={({location}) => user.email ? children : <Redirect
            to={{
                pathname: "/login",
                state: { from: location }
              }}
            >

            </Redirect>
        } 
        >
            
        </Route>
    );
};

export default PrivateRoute;