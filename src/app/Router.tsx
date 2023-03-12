import React from "react"
import { createHashRouter } from "react-router-dom"
import TestPage  from "../pages/test"
import MainPage  from "../pages/main"

  
const router = createHashRouter([
    {
        path: "/",
        element: <MainPage/>,
    },
    {
        path: "/test",
        element: <TestPage/>,
    },
])

export default router

