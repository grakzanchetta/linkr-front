import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ResetCSS from "./assets/css/reset";
import GlobalCSS from "./assets/css/global";
import { GlobalProvider } from "./context/globalContext";
import Home from "./pages/home/Home";
import PostsUser from "./pages/user/PostsUser";
import Hashtag from "./pages/hashtag/Hashtag";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

export default function App() {

  const token = JSON.parse(localStorage.getItem("token"));
  
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalCSS />
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/timeline" element={<Home />} />
          <Route path="/user/:id" element={<PostsUser />} />
          <Route path="/hashtag/:hashtag" element={<Hashtag />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}
