import React from 'react'
import './Hero.css'
import profile_img from '../../assets/imgPerfCirc.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>Oi, eu sou Tiago Santos, </span>desenvolvedor full stack.</h1>
      <p>Sou de Juazeiro do Norte - CE, com 4 anos de experiência.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <a href="https://github.com/TiagoEngSoft" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} className='icone-connect' />
          </a>
          {/* <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink> */}
          </div>
        <div className="hero-resume"><a href="https://www.linkedin.com/in/tiago-santos-a005511b7/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={40} className='icone-resulme'/>
      </a></div>

      </div>
    </div>
  )
}

export default Hero
