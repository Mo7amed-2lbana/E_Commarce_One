import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({children , UserData}) {

    if(UserData === null){
        return <Navigate to={"/login"}/>   
    }else {
        return children;
    }



}
