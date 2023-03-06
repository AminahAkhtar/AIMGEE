import React, {useEffect} from 'react'
import aimgeelogo from '../../assets/aimgeelogo.png'
import pakistanlogo from '../../assets/pakistanlogo.png'
import nedlogo from '../../assets/nedlogo.png'
import americanlogo from '../../assets/americalogo.png'
import '../Collaboration/Collaboration.css'
import handshakes from '../../assets/handshakes.png'
import Aos from "aos";
import "aos/dist/aos.css";
function Collaboration() {
    useEffect(() => {
        Aos.init({duration: 1000});  
    }, []);
  return (
    <div>
        <h3 className='joint' data-aos="zoom-in">AIM is building an American-Pakistan joint venture in collaboration with the NED university</h3>
     <div className='logos'>
      <img src={americanlogo} alt="" className='col-img'/>
      <img src={aimgeelogo} alt="" className='col-img'/> 
      <img src={handshakes} alt="" className='col-img hand'/>
      <img src={nedlogo} alt="" className='col-img'/>
      <img src={pakistanlogo} alt="" className='col-img'/>   
     </div>
     
    </div>
  )
}

export default Collaboration
