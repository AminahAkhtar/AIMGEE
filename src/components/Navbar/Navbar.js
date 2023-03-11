import React, { useState } from 'react'
import { useEffect } from 'react'
import '../../components/Navbar/Navbar.css'
import LOGO from '../../assets/aimgee.png'
import Slider from '../Home/Slider'
import Aos from "aos";
import "aos/dist/aos.css";

function Navbar() {
    useEffect(() => {
		Aos.init({duration: 1000});  
	}, []);
	const [activeLink, setActiveLink] =useState(0);
	useEffect(() => {
		const handleScroll = () => {
		  const sections = document.querySelectorAll('.flow');
		  const links = document.querySelectorAll('li');
		  
		  let current = 0;
		  for (let i = sections.length - 1; i >= 0; i--) {
			if (window.scrollY >= sections[i].offsetTop - 500) {
			  current = i;
			  break;
			}
		  }
		  
		  links.forEach(link => link.classList.remove('active'));
		  links[current].classList.add('active');
		  
		  setActiveLink(current);
		};
		window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
<>
    <nav>
	<input id="nav-toggle" type="checkbox" />
	<div className="logo"><img src={LOGO} alt="" /></div>
	<ul className="links">
		<li className={activeLink === 0 ? 'active' : ''}><a href="#home">Home</a></li>
		<li className={activeLink === 1 ? 'active' : ''}><a href="#about">About</a></li>
		<li className={activeLink === 2 ? 'active' : ''}><a href="#mission">Mission</a></li>
		<li className={activeLink === 3 ? 'active' : ''}><a href="#motive">Motive</a></li>
	</ul>
	<label for="nav-toggle" className="icon-burger">
		<div className="line"></div>
		<div className="line"></div>
		<div className="line"></div>
	</label>
</nav>
<div className="hero" id='home'>
<div className="filter-blur"></div>
</div>
<div className='text'>
    <Slider/>
</div>

</>

  )
}

export default Navbar
