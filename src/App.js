import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Login from "./Modules/Login";
import SignupPage from "./Modules/SignupPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
