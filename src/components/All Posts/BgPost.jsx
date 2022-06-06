import React from 'react'
import { Link } from 'react-router-dom'

const BgPost = ({ bgpostData }) => {
    console.log(bgpostData)
    return (
        <>
            {bgpostData.map((curEle) => {
                return (
                    <>
                    <div class="allpost_card">
                    <div class="allpost_card_content">
                        <div class="allpost_card_title desc">
                          <h3>{curEle.title}</h3> 
                        </div>
                        <div class="allpost_card_para">
                          <p>{curEle.description}</p> 
                        </div>
                        <div style={{ marginBottom: "2rem"}}  class="allpost_card_author">
                           <h5>{curEle.author}</h5> 
                        </div>
                <a href={curEle.link} target='_blank'  style={{ paddingLeft: "20px", paddingRight:"20px"}}  className="art_btn">Download</a>

                    </div>
                </div>
                    </>
                )
            })}

        </>
    )
}

export default BgPost