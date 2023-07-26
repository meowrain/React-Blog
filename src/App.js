import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost"
import Login from "./pages/Login"
import ExitBlog from "./pages/ExitBlog";
import "./App.css"
import { useState } from "react";
function App() {
  const [isAuth,setIsAuth] = useState(false);
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/createpost">CreatePost</Link>
        {!isAuth ? <Link to="/login">Login</Link> : <ExitBlog setIsAuth={setIsAuth}></ExitBlog>}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;
