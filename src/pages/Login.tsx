import type React from "react";
// import logo from '../assets/images/logo/logo-ligth.svg'
import logo from '../assets/images/logo/logo-kriative-h.svg'
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Login: React.FC = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const handleLogin = ()=>{
        navigate("/dashboard/default")
    }
    return (
        <>

            <div className="auth-main relative">
                <div className="auth-wrapper v1 flex items-center w-full h-full min-h-screen">
                    <div className="auth-form flex items-center justify-center grow flex-col min-h-screen bg-cover relative p-6 bg-[url('../images/authentication/img-auth-bg.jpg')] dark:bg-none dark:bg-themedark-bodybg">
                        <div className="card sm:my-12 w-full max-w-[480px] shadow-none cardLogin">
                            <div className="card-body !p-10">
                                <div className="text-center">
                                    <a href="#">
                                        <img src={logo} alt="Logo" className="w-36 mx-auto my-2" />
                                    </a>
                                 <h2 className="loginLbn">
                                    Login
                                 </h2>
                                 <h3 className="loginLbn2">
                                    Preencha com sua credenciais
                                 </h3>
                                </div>
                           
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Email Address" value={email} onChange={e=>setEmail(e.target.value)} />
                                </div>
                                <div className="mb-4">
                                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
                                </div>
                                
                                <div className="mt-4">
                                    <button type="button" className="btn btn-primary w-full btnLogin" onClick={handleLogin}>
                                        Login
                                    </button>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;