import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

// this is private route 

const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    return (
        <div>

        </div>
    );
};

export default PrivateRoute;