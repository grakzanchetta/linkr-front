import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetCSS from "./assets/css/reset";
import GlobalCSS from "./assets/css/global";
import { GlobalProvider } from "./context/globalContext";
import Home from "./pages/home/Home";
import PostsUser from "./pages/user/PostsUser";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

export default function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalCSS />
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route exact path="/user/:id" element={<PostsUser />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}
