import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
const user = true;
  
  return (
    <>
    <header>
            <div className="logo">
                <h1> <Link to="/" style={{color:"#fff"}}  >SE-IT</Link> </h1>
                <h5>SAE, Khondhwa</h5>
            </div>
            <nav>
                <ul>
           {/*}         <li className="search" >
                       <input type="search" placeholder="C++, DSA, JavaScript ..." />
  </li> */}
                    <li className="about none" >
                        About Me 
                    </li>
                    <li className="acc" >
                        <div className="nav_image none">
                        {
                            <Link to="/profile"><img src="images/bg.png" alt=""/></Link>  
                            }
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
        <marquee className="marquee1" behavior="" direction=""> <span className='warning' >PYQ's and Notes </span>  of all the Subjects of SEM - 4 have been uploaded  ||  SPPU Examination declared to be start at <span className='warning' >20th June</span> </marquee>
    </>
  )
}

export default Navbar