import React, { useState } from 'react'
import Bgpost from '../postAPI'
import Navbar from '../Navbar/navbar'
import BgPost from '../All Posts/BgPost'
import Sidebar from '../Sidebar/Sidebar'
import './allposts.css'

const Allposts = () => {

    
    const [bgpostData, setbgpostData] = useState(Bgpost);
    const filterItem = (category) => {
      const updatedList  = Bgpost.filter((curEle)=>{
        return curEle.category === category;
      })
      setbgpostData(updatedList)
    }

    return (
        <>
        <main>

        <div className="space">
    
        </div>
        <div className="space">
    
          <Navbar />

          

        
    
          <div className="articles_space"  >
          <div class="articles_space all_post_no_grid">
          <div class="navigateBapu">
        <div class="navigate">
            <ul>
                <li onClick={() => setbgpostData(Bgpost)} >All</li>
                <li onClick={() => filterItem("PA")} >PA</li>
                <li onClick={() => filterItem("CG")} >CG</li>
                <li onClick={() => filterItem("M3")} >M3</li>
                <li onClick={() => filterItem("SE")} >SE</li>
                <li onClick={() => filterItem("DBMS")} >DBMS</li>
              
            </ul>
        </div>
        </div>
                <div class="allpost_card_container">
                    <div class="allpost_cards">
                        <BgPost bgpostData={bgpostData} />
                    </div>
                </div>

            </div>
            <div className="margintop" style={{marginTop:"6.5rem"}} >
            <Sidebar  />
            </div>

          </div>
        </div>

    
        <div className="space">
    
        </div>
      </main>
    

        </>
    )
}

export default Allposts