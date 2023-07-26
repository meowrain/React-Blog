import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import ExitBlog from "./pages/ExitBlog";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket,faHouse,faBlog } from '@fortawesome/free-solid-svg-icons'
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const Exit = () => {
    ExitBlog({ setIsAuth });
  }
  return (
    <Router>
      <nav>
        <Link to="/"> <FontAwesomeIcon icon={faHouse} />主页 </Link>

        {!isAuth ? (
          <Link to="/login"> <FontAwesomeIcon icon={faRightToBracket} />登录 </Link>
        ) : (
          <>
            <Link to="/createpost"> <FontAwesomeIcon icon={faBlog} />创建文章 </Link>
            <Link to="/login" onClick={Exit}><FontAwesomeIcon icon={faRightToBracket} />注销</Link>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router >
  );
}

export default App;