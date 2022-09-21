import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Redirect } from 'react-router';


function Dash() {
    const acctype = (sessionStorage.getItem("acctype"));
    const isAuth = (sessionStorage.getItem("isAuth"));

    if(isAuth){
        if(acctype === "Admin"){
            return(
                <Redirect to="/reviewform" />
            );
        } 
        if(acctype === "Collector") {
            return(
                <Redirect to="/collectionform" />
            );
        } 
    }else{
        return(
            <Redirect to="/" />
        );
    }
       
}

export default Dash;
