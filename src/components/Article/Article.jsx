import React from 'react'
import './Article.css'

const Article = () => {
  return (
    <>
    <div className="article_container">
    <div className="art_cards">
        <div className="art_card">
            <div className="image">
                <img src="bg.png" alt=""/>
            </div>
            <div className="content blog_inside_content">
                <div className="art_details art_details_inside" style={{marginTop: "1rem", marginBottom: "1rem"}}>
                    <div className="author">Javascript Mastery |</div>
                    <div className="time">| 22 April 2022</div>
                </div>
                <div className="art_title" style={{marginTop: "1rem", marginBottom: "1rem"}}>
                    <h2> Best React Techniques</h2>
                </div>
                <div className="art_words" style={{marginTop: "1rem", marginBottom: "1rem"}}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic rem facionsectetur
                        adipisicing elit. Hic rem facilis eius assumenda debitis quas aut facere
                        consequuntur, dolores, amet, nisi alias molestiae sint quo. onsectetur adipisicing
                        elit. Hic rem facilis eius assumenda debitis quas aut facere consequuntur, dolores,
                        amet, nisi alias molestiae sint quo. onsectetur adipisicing elit. Hic rem facilis
                        eius assumenda debitis quas aut facere consequuntur, dolores, amet, nisi alias
                        molestiae sint quo. onsectetur adipisicing elit. Hic rem facilis eius assumenda
                        debitis quas aut facere consequuntur, dolores, amet, nisi alias molestiae sint quo.
                        lis eius assumenda debitis quas aut facere consequuntur, dolores, amet, nisi alias
                        molestiae sint quo. </p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic rem facionsectetur
                        adipisicing elit. Hic rem facilis eius assumenda debitis quas aut facere
                        consequuntur, dolores, amet, nisi alias molestiae sint quo. onsectetur adipisicing
                        elit. Hic rem facilis eius assumenda debitis quas aut facere consequuntur, dolores,
                        amet, nisi alias molestiae sint quo. onsectetur adipisicing elit. Hic rem facilis
                        eius assumenda debitis quas aut facere consequuntur, dolores, amet, nisi alias
                        molestiae sint quo. onsectetur adipisicing elit. Hic rem facilis eius assumenda
                        debitis quas aut facere consequuntur, dolores, amet, nisi alias molestiae sint quo.
                        lis eius assumenda debitis quas aut facere consequuntur, dolores, amet, nisi alias
                        molestiae sint quo. </p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic rem facionsectetur
                        adipisicing elit. Hic rem facilis eius assumenda debitis quas aut facere
                        consequuntur, dolores, amet, nisi alias molestiae sint quo. onsectetur adipisicing
                        elit. Hic rem facilis eius assumenda debitis quas aut facere consequuntur, dolores,
                        amet, nisi alias molestiae sint quo. onsectetur adipisicing elit. Hic rem facilis
                        eius assumenda debitis quas aut facere consequuntur, dolores, amet, nisi alias
                        molestiae sint quo. onsectetur adipisicing elit. Hic rem facilis eius assumenda
                        debitis quas aut facere consequuntur, dolores, amet, nisi alias molestiae sint quo.
                        lis eius assumenda debitis quas aut facere consequuntur, dolores, amet, nisi alias
                        molestiae sint quo. </p>
                </div>
            </div>

        </div>
        
            <div className="author_container">
                <div className="author_detail">
                    <div className="author_content">
                        <h3> <span>T</span> &nbsp; Thank Avez</h3>
                    </div>
                </div>
            </div>

            

    </div>
</div>

    </>
  )
}

export default Article