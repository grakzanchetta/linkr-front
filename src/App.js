import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetCSS from "./assets/css/reset";
import GlobalCSS from "./assets/css/global";
import { GlobalProvider } from "./context/globalContext";
import Home from "./pages/home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalCSS />
      <GlobalProvider>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}
