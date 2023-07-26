import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        });
    };

    return (
       <>
        <div className="loginPage">
                <img src="https://meowrain.cn/upload/2023/06/IMG_20230622_212948_886.jpg" className="rounded-avatar" alt="avatar" />
                <span className="text-center name-show"> <strong>MeowRain's React Blog</strong></span>
                <p>Sign In With Google to Continue</p>
                <button className="login-with-google-btn" onClick={signInWithGoogle}>
                    Sign in with Google
                </button>
        </div>
       </>
    );
}

export default Login;