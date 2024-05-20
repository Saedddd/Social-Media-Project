import React from 'react'
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from 'firebase/auth';

import { auth } from '../config/firebase';



const Navbar = () => {
    const [user] = useAuthState(auth);

    const signUserOut = () =>{
        signOut(auth)
    }
  return (
    <>
        <Link to="/">Home</Link>
        {!user ?(
        <Link to="/login">Login</Link> 
        ):(
        <Link to="/createpost">Create Post</Link>
        )}
        

            { user && (
        <nav className="">
            <p>{user?.displayName}</p>
            <img src={user?.photoURL || ""} width="100" height="100"/>
            <button onClick={signUserOut}>Log Out</button>
        </nav>
        )}
    </>


  )
}

export default Navbar
