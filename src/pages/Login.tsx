import type React from "react";
import logo from '../assets/images/logo/logo-ligth.svg'
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
                        <div className="card sm:my-12 w-full max-w-[480px] shadow-none">
                            <div className="card-body !p-10">
                                <div className="text-center">
                                    <a href="#">
                                        <img src={logo} alt="Logo" className="w-36 mx-auto my-4" />
                                    </a>

                                    {/* <div className="grid my-4">
                                        {['facebook', 'twitter', 'google'].map((platform) => (
                                            <button
                                                key={platform}
                                                type="button"
                                                className="btn mt-2 flex items-center justify-center gap-2 text-theme-bodycolor dark:text-themedark-bodycolor bg-theme-bodybg dark:bg-themedark-bodybg border border-theme-border dark:border-themedark-border hover:border-primary-500 dark:hover:border-primary-500"
                                            >
                                                <img src={`../assets/images/authentication/${platform}.svg`} alt={platform} />
                                                <span>Sign In with {platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
                                            </button>
                                        ))}
                                    </div> */}
                                </div>
                                {/* <div className="relative my-5">
                                    <div aria-hidden="true" className="absolute flex inset-0 items-center">
                                        <div className="w-full border-t border-theme-border dark:border-themedark-border"></div>
                                    </div>
                                    <div className="relative flex justify-center">
                                        <span className="px-4 bg-theme-cardbg dark:bg-themedark-cardbg">OR</span>
                                    </div>
                                </div> */}
                                {/* <h4 className="text-center font-medium mb-4">Preencha com sua credenciais</h4> */}
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Email Address" value={email} onChange={e=>setEmail(e.target.value)} />
                                </div>
                                <div className="mb-4">
                                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
                                </div>
                                {/* <div className="flex mt-1 justify-between items-center flex-wrap">
                                    <div className="form-check">
                                        <input className="form-check-input input-primary" type="checkbox" id="rememberMe" defaultChecked />
                                        <label className="form-check-label text-muted" htmlFor="rememberMe">
                                            Remember me?
                                        </label>
                                    </div>
                                    <h6 className="font-normal text-primary-500 mb-0">
                                        <Link to="/forgot-password">Forgot Password?</Link>
                                    </h6>
                                </div> */}
                                <div className="mt-4">
                                    <button type="button" className="btn btn-primary w-full" onClick={handleLogin}>
                                        Login
                                    </button>
                                </div>
                                {/* <div className="flex justify-between items-end flex-wrap mt-4">
                                    <h6 className="f-w-500 mb-0">Don't have an Account?</h6>
                                    <Link to="/register" className="text-primary-500">
                                        Create Account
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;