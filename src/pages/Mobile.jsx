import Card from 'antd/es/card/Card'
import React from 'react'
import { Link } from 'react-router-dom'

const Mobile = () => {
  return (
    <div>
        <>
            <div className="container">
                <div className="ms-mains    ">
                    <h1>ENGINEERED FOR THE GAME, DESIGNED FOR LIFE</h1>
                    <br />
                    <p>This is freedom of play, redefined. Our mobile gaming and lifestyle audio products are crafted to seamlessly integrate <br />
                    gaming into every aspect of your life.</p>
                </div>
            </div>
        </>
        <div className="kolim">
            <div className="container">
                <div className="jj">
                    <h2>RAZER EDGE</h2>
                    <br />
                    <p>The Ultimate Android Gaming Handheld</p>
                    <div className="kok">
                        <br />
                    <Link to={'/store'}>Learn More</Link>
                    </div>
                </div>
            </div>
        </div>

       <div className="container">
       <div className="wrapper">
           
            <div className="card">
                <img src="https://razer-shop.netlify.app/static/media/iphone.13ece4ea997fd66f9fd2.jpg" alt="" />
                <h2>RAZER KISHI V2 FOR IPHONE</h2>
                <br />
                <p>Universal Mobile Gaming Controller for iPhone</p>
                <br />
                <Link to={'/store'}>Learn More</Link>
            </div>
            <div className="card">
                <img src="https://razer-shop.netlify.app/static/media/android.d268e8bce7dcefe7f19b.jpg" alt="" />
                <br />
                <h2>RAZER KISHI V2 FOR ANDROID</h2>
                <br />
                <p>Universal Mobile Gaming Controller for Android</p>
                <br />
                <Link to={'/store'}>Learn More</Link>
            </div>
            <div className="card">
                <img src="https://razer-shop.netlify.app/static/media/kishi.a3af1219ca17ee677674.jpg" alt="" />
                <br />
                <h2>RAZER KISHI</h2>
                <br />
                 <p>Universal Mobile Gaming Controller for Android</p>
                 <br /> 
                 <Link to={'/store'}>Learn More</Link>

            </div>
        

       </div>
       </div>








       <div className="hus">
        <div className="container">
            <div className="ko">
                <h1>GO THE EXTRA MILE</h1>
                <br />
                <p>
                When you’re filling those few minutes in line at the coffee shop or commuting to work with a quick game or listening <br /> to that banger on repeat, Razer has the accessory that lets fellow gamers know they’re among their own.
                </p>
                <br />
                <Link to={'/store'}>Learn More</Link>
            </div>
        </div>
       </div>




       <div className="container">
       <div className="wrapper">
        
            <div className="card">
                <img src="https://razer-shop.netlify.app/static/media/m-case.19a2ca51d2cec42dbc72.jpg" alt="" />
                <br />
                <h2>RAZER ARCTECH CASES</h2>
                <br />
                <p>
                Protect your investment while experiencing better <br /> device performance and improved phone cooling <br /> with a Thermaphene Performance layer for <br /> maximum heat dissipation.
                </p>
                <br />
                <Link to={'/store'}>Learn More</Link>
            </div>
            <div className="card">
                <img src="https://razer-shop.netlify.app/static/media/m-wireless.4b3c374c2269c73165db.jpg" alt="" />
                <br />
                <h2>RAZER HAMMERHEAD TRUE </h2>
                <br />
                <p>
                Protect your investment while experiencing better <br /> device performance and improved phone cooling <br /> with a Thermaphene Performance layer for <br /> maximum heat dissipation.
                </p>
                <br />
                <Link to={'/store'}>Learn More</Link>
            </div>
            <div className="card">
                <img src="https://razer-shop.netlify.app/static/media/m-cooler.857e1f6419774cff32d9.png" alt="" />
                <br />
                <h2>RAZER PHONE COOLER CHROMA</h2>
                <br />
                <p>
                Protect your investment while experiencing better <br /> device performance and improved phone cooling <br /> with a Thermaphene Performance layer for <br /> maximum heat dissipation.
                </p>
                <br />
                <Link to={'/store'}>Learn More</Link>
            </div>
        
       </div>
       </div>









       <footer>
        <div className="container">
            <div className="wrappers">
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

export default Mobile