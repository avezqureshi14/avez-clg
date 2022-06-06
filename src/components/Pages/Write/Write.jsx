import React from 'react'
import './Write.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const user = true;
const Write = () => {
    return (
        <>

            <main>

                <div classNameName="space">

                </div>
                <div classNameName="space">

                <header>
            <div className="logo">
                <h1> <Link to="/" style={{color:"#fff"}}  >Avez .</Link> </h1>
            </div>
            <nav>
                <ul>
                    <li className="search" >
                       <input type="search" placeholder="C++, DSA, JavaScript ..." />
                    </li>
                    <li className="about" >
                        About Me 
                    </li>
                    <li className="acc" >
                        <div className="nav_image">
                        {
                          user ? (
                            <Link to="/profile"><img src="images/bg.png" alt=""/></Link>  
                            
                            ) : (
                              <Link to="/login"><i class=' myUser bx bx-user'></i></Link>  
                              
                              )
                            }
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
                    <div className="articles_space"  style={{display:"flex"}} >

                        <div className="article_container">
                            <div className="art_cards">
                                <div className="art_card">
                                    <div className="image">
                                        <img src="images/bg.png" alt="" />
                                    </div>
                                    <div className="content blog_inside_content">

                                        <div className="art_title" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                                            <input type="text" className="art_single_title" placeholder="Add Title" />
                                        </div>
                                        <div className="art_words" style={{ marginTop: "1rem", marginBottom: "2rem" }}>
                                            <textarea name="" className="art_single_post" id="" cols="30" rows="10"></textarea>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>

                        <div>
                            <input type="submit" className="art_btn write" name="" id="" style={{ marginTop: "3rem", marginBottom: "5rem",paddingBottom:'2rem', paddingTop:'10px' }}
                                value="Publish" />
                        </div>

                    </div>
                </div>

                <div classNameName="space">

                </div>
            </main>

        </>
    )
}

export default Write