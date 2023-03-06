import React, {useEffect} from "react";
import "../../components/About/About.css";
import Aos from "aos";
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    Aos.init({duration: 1000});  
}, []);
  return (
    <div className="about-section flow" id="about" data-aos="fade-right">
      <div className="inner-container" data-aos="zoom-in">
        <h2>
          ABOUT <span>US</span>
        </h2>
        <p className="para">
          Using the most cutting-edge AI-based state-of-the-art engineering
          technologies, the USA-based technology company AI in Mobility and
          Green Energy Corp. and its subsidiary in Pakistan, AIM Motors (Pvt.)
          Ltd. ("AIM"), are introducing market-disrupting mobility and green
          energy EV solutions to developing and emerging markets. AIM Business
          is Revolutionizing the Green Energy Space by Serving Customers in the
          Commercial, Industrial, and Consumer Sectors
        </p>
      </div>
    </div>
  );
}

export default About;
