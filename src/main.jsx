import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { ChakraProvider } from "@chakra-ui/react";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZuqJuPq4PChL1FvZmDve9iUsJ0QackqE",
  authDomain: "eiroacommerce.firebaseapp.com",
  projectId: "eiroacommerce",
  storageBucket: "eiroacommerce.appspot.com",
  messagingSenderId: "556337925947",
  appId: "1:556337925947:web:fd86e0dedc03b2c589711e"
};

initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
