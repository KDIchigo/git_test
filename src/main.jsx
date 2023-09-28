import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./SignIn.jsx";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Register from "./Register.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
