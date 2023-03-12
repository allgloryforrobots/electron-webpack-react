import React from "react"
import "./styles/index.less"

import { RouterProvider } from "react-router-dom"
import router from './Router'
  
// только управляющие обертки

const App = () => {
    return <RouterProvider router={router} />
}

export default App;
