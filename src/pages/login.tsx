import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import {useNavigate} from "react-router-dom"

import { auth, provider } from "../config/firebase"


const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () =>{
    const result = await signInWithPopup(auth, provider)
    console.log(result)
    navigate("/");
  }

  return (
    <>
        <p>Sign In With Google To Continue</p>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
    </>
  )
}

export default Login