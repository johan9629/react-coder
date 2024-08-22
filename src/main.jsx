import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";


const firebaseConfig = {
  apiKey: "AIzaSyCjzXiUrWEvrJQuujfASL11lHIHA9ETNUY",
  authDomain: "react-coder-e1d49.firebaseapp.com",
  projectId: "react-coder-e1d49",
  storageBucket: "react-coder-e1d49.appspot.com",
  messagingSenderId: "325655378524",
  appId: "1:325655378524:web:2166b4478f18ca723f0499"
};

initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
