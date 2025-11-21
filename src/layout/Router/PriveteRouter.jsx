import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PriveteRouter = ({children}) => {

    const {user,loading} = use(AuthContext);
    const location = useLocation();
    console.log(location)

    if(!user){
        return <Navigate to={'/login'}></Navigate>
    }
    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }
  

    return children
};

export default PriveteRouter;