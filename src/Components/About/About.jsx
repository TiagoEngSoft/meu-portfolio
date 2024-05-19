import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/eu_aboutme2.png'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>Sobre</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Sou apaixonado por tecnologia. É meu trabalho e hobby. Por isso estou sempre querendo aprender algo novo que me ajude a ser um desenvolvedor cada vez melhor.</p>
                <p>Minha paixão pelo desenvolvimento não se reflete apenas na minha experiência, mas também no entusiasmo e dedicação que trago a cada projeto.</p>
            </div>
            <div className="about-skills">
            <div className="about-skill"><p>Android Nativo (Java/Kotlin)</p><hr style={{width:"70%"}} /></div>
            <div className="about-skill"><p>Flutter - Cross Platform (Dart)</p><hr style={{width:"70%"}} /></div>
            <div className="about-skill"><p>JQuery, Ajax, Bootstrap..</p><hr style={{width:"40%"}} /></div>
            <div className="about-skill"><p>SASS e TypeScript</p><hr style={{width:"40%"}} /></div>

            <div className="about-skill"><p>HTML,CSS e JavaScript</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Node.js/Express.js, Sequelize</p><hr style={{width:"40%"}} /></div>
                <div className="about-skill"><p>Data Snap (Delphi)</p><hr style={{width:"25%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>04</h1>
            <p>ANOS DE EXPERIÊNCIA</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>+30</h1>
            <p>PROJETOS NA CARREIRA</p>
        </div>
      </div>
    </div>
  )
}

export default About
