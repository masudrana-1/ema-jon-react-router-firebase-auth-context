import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

// this is private route 

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    // get current router location 
    const location = useLocation();


    // for loading
    // condition 
    if (loading) {
        return <div>Loading.......</div>
    }


    // user login kora thakle children route a jabe
    // mane shipping route a jete parbe na hole login page a jabe 
    if (user && user.uid) {
        return children;
    }

    // current route location k replace kore dibe 
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;