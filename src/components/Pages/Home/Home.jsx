import Navbar from '../../Navbar/navbar'
import Sidebar from '../../Sidebar/Sidebar'
import Post from '../../Posts/Post'
import Slider from '../../Slider/Slider'

const Home = () => {

  return (
    <>
      <main>

        <div className="space">

        </div>
        <div className="space">

          <Navbar />
          <Slider />

          <div className="articles_space">
            <Post />
            <Sidebar />
            
          </div>

        </div>

        <div className="space">

        </div>
      </main>
      <div className="foot">
        <div className="foot-content">
          Designed and Developed  by <a  href="https://www.instagram.com/avezqureshi14/" target="_blank" style={{color:"#fff"}} >Avez Qureshi (SEIT
            ) </a>
        </div>
      </div>
    </>
  )
}

export default Home