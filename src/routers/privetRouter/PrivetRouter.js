import React, { useContext } from 'react';
import { AuthContextProvider } from '../../context/AuthContext/AuthContex';
import { Navigate, useLocation} from 'react-router-dom';
import Spiner from '../../pages/shared/loader/Spiner';

const PrivetRouter = ({children}) => {
    const {user,loader} = useContext(AuthContextProvider)
    const location = useLocation();
        if(loader){
            return <Spiner></Spiner>
        }
        if(user && user.uid){
            return children
        }
        else{
            return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
        }
};

export default PrivetRouter;