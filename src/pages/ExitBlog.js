import React from "react";
import {signOut} from "firebase/auth"
import {auth} from "../firebase-config"
import { useNavigate } from "react-router-dom";

function ExitBlog({setIsAuth}) {
    function SignOutBlog() {
        const navigate = useNavigate();
        signOut(auth).then(()=>{
            localStorage.clear();
            setIsAuth(false);
            navigate("/login");
    
        });
    }
    return (
        <div onClick={SignOutBlog}>Blog Sign Out</div>
    )
}
export default ExitBlog;