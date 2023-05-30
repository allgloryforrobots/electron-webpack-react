import React from 'react'
import { App }  from './app/index'
import { createRoot } from "react-dom/client"


// на этом слое только работа с подключением библиотеки React
const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);



