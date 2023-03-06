import React, {useEffect} from 'react'
import './Motive.css'
import clean from '../../assets/clean.png'
import battery from '../../assets/battery.png'
import cost from '../../assets/cost.png'
import sale from '../../assets/sale.png'
import Aos from "aos";
import "aos/dist/aos.css";
function Motive() {
  useEffect(() => {
    Aos.init({duration: 1000});  
}, []);
  return (
    <div id='motive' className='motive-container flow'>
      <h2><span>OUR</span> MOTIVE</h2>
      <div className="cols">
        <div className="col" data-aos="fade-right">
          <div className="mo-container">
            <div className="front">
              <div className="inner">
                  <span className='motive-title'><img src={clean} alt="" className='icon' /><br />
                    CLEAN AND GREEN FUTURE</span>
              </div>
            </div>
            <div className="back">
                <div className="inner">
                  <p>AIM provides services to clients in the developing and rising economies, which are among the most crowded and polluted regions of the world. Our network of commercial and governmental partners across the globe supports us in our mission to rid the earth of carbon-based energy pollution while also enhancing the health and way of life of its inhabitants.</p>
                </div>
            </div>
          </div>
        </div> 

          <div className="col" data-aos="fade-left">
          <div className="mo-container">
            <div className="front">
              <div className="inner">
                  <span className='motive-title'><img src={cost} alt="" className='icon' /><br />
                    SAVE OPERATIONAL COST OF VEHICLES</span>
              </div>
            </div>
            <div className="back">
                <div className="inner">
                  <p>AIM is bringing high-performance and most efficient electric vehicles (EV) for the transportation sector that are specifically made to meet the needs of its customers in Pakistan, with a significant operating cost savings over conventional internal combustion engine (ICE) vehicles at a comparable price point.</p>
                </div>
            </div>
          </div>
        </div>  

          <div className="col" data-aos="fade-right">
          <div className="mo-container">
            <div className="front">
              <div className="inner">
                  <span className='motive-title'><img src={sale} alt="" className='icon' /><br />
                    AFTER-SALE SUPPORT</span>
              </div>
            </div>
            <div className="back">
                <div className="inner">
                  <p>The AIM Motors automotive brand is driven by svelte, contemporary products of the highest calibre and strives for the greatest levels of customer satisfaction and after-sale support.</p>
                </div>
            </div>
          </div>
        </div>  

          <div className="col" data-aos="fade-left">
          <div className="mo-container">
            <div className="front">
              <div className="inner">
                  <span className='motive-title'><img src={battery} alt="" className='icon' /><br />
                    "BATTERY AS A SERVICE" SUPPORT</span>
              </div>
            </div>
            <div className="back">
                <div className="inner">
                  <p>AIM is engaged in the manufacture of market-disrupting bulk charging stations for energy storage that support "Battery as a Service" (BaaS) users in the consumer and transportation sectors.</p>
                </div>
            </div>
          </div>
        </div>    
        









     

       


       
      </div>
    </div>
  )
}

export default Motive
