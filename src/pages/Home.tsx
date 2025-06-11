import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../utils/routes/routes";

const Home: React.FC = () => {
    const navigate = useNavigate()
    const handleLogin = ()=>{
        navigate(routes.login)
    }
    return (
        <>
            <button onClick={handleLogin}>Aceder</button>
        </>
    )
}

export default Home;