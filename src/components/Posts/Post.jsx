import React from 'react'
import { Link } from 'react-router-dom'
const Post = () => {
    return (
        <>
            <div className="article_container">
                <div className="art_cards">
                    <div className="art_card">
                        <div className="image">
                          <img src="images/seit.jpg" alt="" />
                        </div>
                        <div className="content">
                            <div className="art_title" style={{ marginTop: "1rem" }}> <a style={{ color: "#000" }} className="blue_hover" href="/post/1"><h2>Department of Information Technology</h2></a> </div>
                        </div>
                    </div>
                    <div class="allpost_card_container">
                        <div class="allpost_cards">
                            <div class="allpost_card">
                                <div class="allpost_card_content">
                                    <div class="allpost_card_title desc">
                                        <h3>Computer Graphics Previous Year Questions</h3>
                                    </div>
                                    <div class="allpost_card_para">
                                        <p>Computer Graphics Previous Year Questions, This below PDF contains all the questions of Computer Graphics which appeared in the previous years of SPPU Examination</p>
                                    </div>
                                    <div style={{ marginBottom: "2rem" }} class="allpost_card_author">
                                        <h5>👇 Download the PDF through below link </h5>
                                    </div>
                                    <a href='https://docs.google.com/spreadsheets/d/1KNO2S3Kvgrec88Jslh-bnqPIJzUYLE0A/edit?usp=sharing&ouid=111632125658072570750&rtpof=true&sd=true' target="_blank" style={{ paddingLeft: "20px", paddingRight: "20px" }} className="art_btn">Download</a>

                                </div>
                            </div>
                            <div class="allpost_card">
                            <div class="allpost_card_content">
                            <div class="allpost_card_title desc">
                                <h3>Database Management Systems Previous Year Questions</h3>
                            </div>
                            <div class="allpost_card_para">
                                <p>Database Management Systems Previous Year Questions, This below PDF contains all the questions of Database Management Systems which appeared in the previous years of SPPU Examination</p>
                            </div>
                            <div style={{ marginBottom: "2rem" }} class="allpost_card_author">
                                <h5>👇 Download the PDF through below link </h5>
                            </div>
                            <a href='https://docs.google.com/spreadsheets/d/1gfwfnmqMsGNPoooOeDCFSxx4j0CyaXfo/edit?usp=sharing&ouid=101817454926070390726&rtpof=true&sd=true' target="_blank" style={{ paddingLeft: "20px", paddingRight: "20px" }} className="art_btn">Download</a>

                        </div>
                            </div>
                        </div>
                    </div>
                    <div className="art_card view" style={{ padding: "10px" ,marginTop:"1.5rem" }} >
                        <Link to="/allposts"> <h3>View More Such Posts</h3></Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Post