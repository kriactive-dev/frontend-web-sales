import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../utils/routes/routes";

const Home: React.FC = () => {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate(routes.login)
    }
    return (
        <>
            <div className="button">
                <button onClick={handleLogin} className="btn">Aceder</button>
            </div>

        </>
    )
}

export default Home;