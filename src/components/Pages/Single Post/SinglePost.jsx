import React from 'react'
import Navbar from '../../Navbar/navbar'
import Article from '../../Article/Article'
import Sidebar from '../../Sidebar/Sidebar'
const SinglePost = () => {
  return (
    <>
      <main>

        <div className="space">

        </div>
        <div className="space">

          <Navbar />

          <div className="articles_space">
            <Article />
            <Sidebar />
          </div>
        </div>

        <div className="space">

        </div>
      </main>
      <div className="foot">
        <div className="foot-content">
          Designed and Developed by <a href="/" style={{ color: "#fff" }} >Avez Qureshi (SEIT
            ) </a>
        </div>
      </div>
    </>
  )
}

export default SinglePost