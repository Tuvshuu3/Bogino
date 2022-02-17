import React from "react";
import Home from './pages/Home.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import ForgotPass from './pages/ForgotPass'
import { AuthProvider } from "./providers/auth-context.js";
import Shorturl from "./components/shorturl.js";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPass" element={<ForgotPass />} />
          <Route path=":docId"  element={<Shorturl />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;   