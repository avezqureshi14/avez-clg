import React, { useState } from 'react'
import Bgpost from '../postAPI';
import { Link } from 'react-router-dom';


const Slider = () => {

    const [bgpostData, setbgpostData] = useState(Bgpost);
    const filterItem = (category) => {
        const updatedList = Bgpost.filter((curEle) => {
            return curEle.category === category;
        })
        setbgpostData(updatedList)
    }
    return (
        <>
            <div className="cards_container">
                <div className="cards">
                <Link to="/allposts">
                <div onClick={() => filterItem("PA")} className="card">
                <div className="card_content">
                    <div className="time">Uploaded</div>
                    <div className="topic">Processor Architecture</div>
                    <div className="author">Information Technology</div>
                </div>
            </div>
                </Link>
                
                <Link to="/allposts">
                 
                    <div onClick={() => filterItem("CG")} className="card">
                        <div className="card_content">
                            <div className="time">Uploaded</div>
                            <div className="topic">Computer <br /> Graphics</div>
                            <div className="author">Information Technology</div>

                        </div>
                    </div>
                </Link>

                <Link to="/allposts">

                    <div onClick={() => filterItem("DBMS")} className="card">
                        <div className="card_content">
                            <div className="time">Uploaded</div>
                            <div className="topic desc">Database Management Systems </div>
                            <div className="author">Information Technology</div>

                        </div>
                    </div>
                </Link>

                <Link to="/allposts">

                    <div onClick={() => filterItem("M3")} className="card">
                        <div className="card_content">
                            <div className="time">Uploaded</div>
                            <div className="topic" >Engineering Mathematics</div>
                        <div className="author">Information Technology</div>

                    </div>
                </div>
                </Link>

                <Link to="/allposts">

                <div onClick={() => filterItem("SE")} className="card">
                    <div className="card_content">
                        <div className="time">Uploaded</div>
                        <div className="topic">Software Engineering</div>
                        <div className="author">Information Technology</div>

                    </div>
                </div>
                </Link>

            </div>
        </div>
    </>
  )
}

export default Slider