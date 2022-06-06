import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
    <div className="blog_form_container">
    <Link to="/"> <div className="back">
    <span>Back</span>
</div></Link>
    <div className="form_container">
        <div className="login_heading">
            Sign Up
        </div>
        <form method="POST" action="">
          
            
                    <div className="input-group mb-3">
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                        </div>
                        <input type="text" className="pad user" name="" id=""/>
                    </div>
                    <div className="input-group mb-2">
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="fas fa-envelope-square"></i></span>
                        </div>
                        <input type="email" className="pad" name="email"/>
                    </div>
                    <div className="input-group mb-2">
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                        </div>
                        <input type="password" className="pad" name="password"/>
                        
                    </div>
                    <div className="input-group mb-2">
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                        </div>
                        <input type="password" name="password"/>

                    </div>

            <input type="submit" className="art_btn form_btn" name="" id=""  style={{ marginTop: "1rem", marginBottom: "5px" }}
                value="Sign Up"/>

                <h6 style={{color:"black", textAlign:"center"}} >Already Registered, <Link to="/login">Login</Link> </h6>
            <p id="messages"></p>
        </form>
    </div>
</div>
    </>
  )
}

export default Register