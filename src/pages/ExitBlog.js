import { signOut } from "firebase/auth"
import { auth } from "../firebase-config"
function ExitBlog({setIsAuth}) {
    signOut(auth).then((res) => {
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = "/login";
    });
}
export default ExitBlog;