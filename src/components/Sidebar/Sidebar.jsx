import React from 'react'
import Contact from '../Contact/Contact'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Sidebar = () => {
    return (
        <>
            <div className="sidebar_container">
                <div className="blog_Category">
                    <div className="heading"><h3>Departments</h3></div>

                    <div className="category">
                        <ul>
                            <li>Information Technology</li>
                        </ul>
                    </div>

                </div>

                <div className="blog_Category">
                    <div className="heading"><h3>Time Table</h3></div>

                    <div className="category linked">
                        <ul>
                           <a href="https://drive.google.com/file/d/12_pNEMlmtGC3zTPje5QOfBs_mLRAm9n1/view?usp=sharing" target="_blank" style={{color:"black"}} className="linked" ><li>SPPU End-Sem Examination TimeTable</li></a>
                        </ul>
                    </div>

                </div>
                <div className="blog_Category">
                    <div className="heading"><h3>Events</h3></div>

                    <div className="category">
                        <ul>
                            <li>No Current Events Found</li>
                        </ul>
                    </div>

                </div>
                <div className="blog_Category">
                    <div className="heading"><h3>Important Dates</h3></div>

                    <div className="category">
                        <ul style={{display:"flex",    marginBottom: "7px"}} >
                            <li>20 June &nbsp; </li> <span> : </span> <li>&nbsp; Engg. Math III</li>
                            
                        </ul>
                        <ul style={{display:"flex",    marginBottom: "7px"}} >
                            <li>22 June &nbsp; </li> <span> : </span> <li>&nbsp; Processor Architecture</li>
                        </ul>
                        <ul style={{display:"flex",    marginBottom: "7px"}} >
                            <li>24 June &nbsp; </li> <span> : </span> <li>&nbsp; DBMS </li>
                        </ul>
                        <ul style={{display:"flex",    marginBottom: "7px"}} >
                            <li>27 June &nbsp; </li> <span> : </span> <li>&nbsp; Computer Graphics </li>
                        </ul>
                        <ul style={{display:"flex",    marginBottom: "7px"}} >
                            <li>29 June &nbsp; </li> <span> : </span> <li>&nbsp; Software Engineering </li>
                        </ul>
                    </div>

                </div>
                <div className="blog_Category">
               <a href="https://docs.google.com/forms/d/e/1FAIpQLSf0IoSRAH3qzdg4-VUZ3d2K6Lto78odkI8ZB_RVk7AAk7zkWA/viewform?usp=sf_link" >    <div className="heading feedback"><h3>Give Your Feedback</h3></div></a> 

                </div>
                


            </div>
        </>
    )
}

export default Sidebar