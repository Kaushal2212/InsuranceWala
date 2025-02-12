import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserContextProvider from "./User/UserContext";
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        
            <UserContextProvider>
            <App />
            </UserContextProvider>
        
    </React.StrictMode>
);
