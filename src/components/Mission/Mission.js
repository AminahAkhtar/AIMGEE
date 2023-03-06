import React, {useEffect} from 'react'
import '../Mission/Mission.css'
import mission from '../../assets/mission.png'
import leftIcon from '../../assets/left-icon.png'
import rightIcon from '../../assets/right-icon.png'
import Aos from "aos";
import "aos/dist/aos.css";
function Mission() {
    useEffect(() => {
        Aos.init({duration: 1000});  
  }, []);
  return (
    <div id='mission' className='flow'>
             <div className='timeline'>
         <h2><span>OUR</span> MISSION</h2>
        <div className="mission-container left-container" data-aos="fade-right">
            <img src={mission} alt="" />
            <div className="text-box">
                <h3>Eliminate Carbon-based Energy Emissions and Clean Our Planet</h3>
                <img src={leftIcon} className="left-mission-container-arrow"/>
            </div>
        </div>

        <div className="mission-container right-container" data-aos="fade-left">
        <img src={mission} alt="" />
            <div className="text-box">
                <h3>Improving Lives and Promoting Well-being Across the Planet</h3>
                <img src={rightIcon} className="right-mission-container-arrow"/>
            </div>
        </div>

        <div className="mission-container left-container" data-aos="fade-right">
        <img src={mission} alt="" />
            <div className="text-box">
                <h3>Create a Sustainable Planet for Future Generations</h3>
                <img src={leftIcon} className="left-mission-container-arrow"/>
            </div>
        </div>

        <div className="mission-container right-container" data-aos="fade-left">
        <img src={mission} alt="" />
            <div className="text-box">
                <h3>Empowering Our Customers with Sustainable Mobility Solutions and Energy Products</h3>
                <img src={rightIcon} className="right-mission-container-arrow"/>
            </div>
        </div>
      </div>
    </div>
  
  
  )
}

export default Mission
