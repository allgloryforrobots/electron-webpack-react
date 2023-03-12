import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/test");
    }, []);

    return <div>Main Page</div>
}

export default MainPage