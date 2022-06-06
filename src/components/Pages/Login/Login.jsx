import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>

                <div className="blog_form_container"  >
                <Link to="/"> <div className="back">
                        <span>Back</span>
                    </div></Link>
                    <div className="form_container">
                        <div className="login_heading">
                            Login
                        </div>
                        <form method="POST" action="">
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" className="user form-control" name="username" placeholder="Username..." />
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" className="pass form-control" name="password" placeholder="Password..." />
                            </div>

                            <input type="submit" className="art_btn form_btn" name="" id="" style={{ marginTop: "1rem", marginBottom: "5px" }} value="Sign in" />
                            <h6 style={{ color: "black", textAlign: "center" }} >Not yet Registered, <Link to='/register'>Register</Link> </h6>

                            <p id="messages"></p>
                        </form>
                    </div>
                </div>

                

        </>
    )
}

export default Login