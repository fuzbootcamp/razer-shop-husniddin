import React from 'react'
import { Link } from 'react-router-dom'

import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div>
        <header>
          <div className="n-main">
            <h1>RING IN THEWINNING  SEASON</h1>
            <br />
            <h3>DECK THE HALLS WITH EXCLUSIVE OFFERS</h3>
            <div className="nnd">
              <br />
            <Link to={'/store'}>Learn More <IoIosArrowForward /></Link>
            <Link to={'/store'}>Buy <IoIosArrowForward /></Link>
            </div>
          </div>
        </header>
        
        <div className="do-mas">
          <div className="container">
            <div className="s-main">
              <h1>RAZER ENKI PRO</h1>
              <br />
              <h2>ULTIMATE ALL-DAY COMFORT</h2>
              <div className="mmd">
                <br />
                <Link to={'/store'}>Koenigsegg Edition <IoIosArrowForward /></Link>
                <Link className='asi' to={'/store'}>Williams Esports Edition <IoIosArrowForward /></Link>
              </div>
            </div>
          </div>
          </div>
        
        <aside>
          <div className="container">
            <div className="u-main">
              <h1>RAZER DEATHSTALKER V2 PRO TENKEYLESS</h1>
              <br />
              <h3>LOW-PROFILE ERGONOMICS. HIGH-PERFORMANCE WIRELESS.</h3>
              <div className="nns">
                <br />
              <Link to={'/store'}>Learn More <IoIosArrowForward /></Link>
              <Link to={'/store'}>Buy <IoIosArrowForward /></Link>
              </div>
            </div>
          </div>
        </aside>
        <div className="main">
         
            <div className="row">
            <div className="d-main">

            </div>
            <div className="a-main">

            </div>
            <div className="l-main">

            </div>
            <div className="p-main">

            </div>
            <div className="j-main">
              
            </div>
            <div className="z-main">

            </div>
            </div>
          </div>



          
       <footer>
        <div className="container">
            <div className="wrapperss">
             <div className="item">
                <h3>Shop</h3>
                <br />
                <p>RazerStores</p>
                <br />
                <p>RazerCafe</p>
                <br />
                <p>Store Location</p>
                <br />
                <p>Purchase Programs</p>
                <br />
                <p>Exclusives</p>
             </div>
             <div className="item">
                <h3>Explore</h3>
                <br />
                <p>Technology</p>
                <br />
                <p>Chroma RGB</p>
                <br />
                <p>Concepts</p>
                <br />
                <p>Esports</p>
                <br />
                <p>Collabs</p>
             </div>
             <div className="item">
                <h3>Support</h3>
                <br />
                <p>Get Help</p>
                <br />
                <p>Registration & Warranty</p>
                <br />
                <p>RazerStore Support</p>
                <br />
                <p>Manage Razer ID</p>
                <br />
                <p>Support Videos</p>
             </div>
             <div className="item">
                <h3>Company</h3>
                <br />
                <p>About Us</p>
                <br />
                <p>Careers</p>
                <br />
                <p>Press Room</p>
                <br />
                <p>zVentures</p>
                <br />
                <p>Contact Us</p>
             </div>
             <div className="item">
                <h3>FOR GAMERS. BY GAMERS.™</h3>
                <br />
                <img src="https://razer-shop.netlify.app/static/media/facebook.6d206ecad05f831d58c69260d311e89a.svg" alt="" />
                <img src="https://razer-shop.netlify.app/static/media/inst.fbfd248812615df77ea3ccdfdca75b54.svg" alt="" />
                <img src="https://razer-shop.netlify.app/static/media/twitter.991caa5f81fb29441a7956367c45896a.svg" alt="" />
             </div>
            
            </div>
        </div>
        <br />
            <hr />
            <div className="container">
            <div className="gg">
               
                <p>Copyright © 2022 Razer Inc. All rights reserved.</p>
                <p>Created by: husniddinalimbaev|IT Academy</p>
            </div>
            </div>
       </footer>



















        </div>
  
  )
}

export default Home