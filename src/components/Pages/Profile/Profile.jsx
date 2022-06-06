import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        <>

                <div  style={{ display:"flex", justifyContent:'center',alignItems:'center', marginTop:'26%' }} >
                <div className="blog_profile_container">
                <Link to="/"> <div className="back">
                        <span>Back</span>
                    </div></Link>
                    <div className="profile_blog">
                        <div className="profile_image">
                            <img src="images/bg.png" alt="" />
                        </div>
                        <div className="profile_name">
                            <span>Mohammad Avez Nizamuddin Qureshi</span>
                        </div>
                        <div className="profile_about">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore distinctio doloribus dolores
                                mollitia reiciendis nisi esse, autem labore pariatur fugit.</p>
                        </div>
                    </div>
                    <div className=" profile_grid" style={{ marginTop: " 1rem" }}>
                        <div className="share_grid ">

                            <div className="know profile_blog_grids">
                                Know More
                            </div>
                            <div className="contact profile_blog_grids">
                                Contact Us
                            </div>
                        </div>

                        <div className="share_grid ">
                            <div className="privacy profile_blog_grids">
                                Privacy Policy

                            </div>
                            <div className="dmca profile_blog_grids">
                                DMCA
                            </div>
                        </div>

                    </div>

                    <div className="developer">
                        <span> Developed by <a  href="/" style={{color:"#000"}} >Avez Qureshi </a> </span>
                    </div>
                </div>
                </div>
                
            </>
            )
}

            export default Profile