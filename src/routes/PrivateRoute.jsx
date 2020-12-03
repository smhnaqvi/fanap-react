import React from 'react'
import {Route,Redirect} from "react-router-dom"
import { useAuth } from "providers/auth";
import axios from 'axios'
export default function PrivateRoute({component:Component,...rest}){
    const token = localStorage.getItem("token");
    return (<Route {...rest} render={props => (
        !!token ? <Component {...props} /> : <Redirect to="/signin" />
    )}
/>)
}