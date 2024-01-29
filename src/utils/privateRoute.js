import React,{useState,useEffect} from 'react'
import { Route, Redirect } from 'react-router-dom'
import Loader from "react-loader-spinner";
import { validateJwtTokenCall } from 'shared/services/auth/authService';

// eslint-disable-next-line react/prop-types
export function PrivateRoute({ component: Component, ...rest }) {
  const[authed,setAuthed]=useState({loading:true,token:null})
  
  const verifyToken = async (token) => {
    if(token===null){
      setAuthed({token:null,loading:false})
    }
    else{
    let response = await validateJwtTokenCall({
      jwt_token: token?.toString(),
    });
    if (response) {
      if (response.responseCode === 200) {
        setAuthed({token:response,loading:false})
      } else {
        setAuthed({token:null,loading:false})
      }
    }
  }
  }; 

  useEffect(() => {
    let token=localStorage.getItem('jwt_token')
    verifyToken(token)
  }, []);

  return (
    authed.loading?

    <div className="small-loader d-flex align-items-center justify-content-center">
      <Loader type="Oval" color="#00ec93" height={100} width={100} />
    </div>:
    <Route
      {...rest}
      render={(props) => authed.token
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login' }} />}
    />
    )
}