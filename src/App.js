import React, { useEffect, useState } from 'react'

import pic1 from './pic1.jpg'
import pic3 from './pic3.jpg'
import pic5 from './pic5.png'
import pic6 from './pic6.png'
import pic7 from './pic7.png'
import {BiMenu, BiLogoFacebook}  from 'react-icons/bi'
import { FaFacebook, FaLinkedin, FaExpandArrowsAlt, FaArrowUp, FaGithub, FaExternalLinkAlt, FaPaintBrush, FaRegChartBar, FaReact } from "react-icons/fa";
// import girl from './girl.png'
// import {AiOutlineMenu} from 'react-icons/io'
// import { AiOutlineMenu } from "react-icons/fa";
// import 'boxicons';
import { useMediaPredicate } from "react-media-hook";
import Fade from 'react-reveal/Fade'
import swal from 'sweetalert'
import Typed from 'react-typed'

const App = () => {

  // let url = props.match.params
  // console.log(url, "url")
  const [menuActive, setMenuActive] = useState(false)
  const [number, setNumber] = useState(1)

  const lessThan768 = useMediaPredicate("(max-width: 768px)");
  const bigThan768 = useMediaPredicate("(min-width: 768px)");

  window.onload = function(){ 
  let menuIcon = document.querySelector('#menu-icon')
  let navbar = document.querySelector('.navbar')

  menuIcon.onClick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
  } 

  let sections = document.querySelectorAll('section')
  let navLinks = document.querySelectorAll('header nav a')

  window.onscroll = () => {
    sections.forEach(ec => {
      let top = window.scrollY
      let offset = ec.offsetTop - 150
      let height = ec.offsetHeight
      let id = ec.getAttribute('id')

      if (top >= offset && top < offset + height) {
        navLinks.forEach((linkde) => {
          linkde.classList.remove('active')
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
        })
      }
    })
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)
  }
}

const alertMg = () => {
  swal("Error!", "Unable to download CV right now", "error");
}

  return (
    <>
    {/* <IconName /> */}
    {/* <nav>
      <div className='container nav__container'>
      <a href='index.html' className='nav__logo'>
        <img src={girl} alt="logo" />
      </a>
      <ul className='nav__menu'>
        {
          data?.map(item => <li key={item.id}>
            <a style={{
              color: "white"
            }} href={item.link}>{item.title}</a>
          </li>)
        }
      </ul>
      <button id='theme__icon'><AiOutlineMenuFold /></button>
      </div>
    </nav> */}
    {/* <BrowserRouter>
              <Routes>
                <Route path="/" element={<Navigate to="policy/1" />} />
                </Routes>
                </BrowserRouter> */}
      <header className='header'>
           <a href='#home' onClick={() => setNumber(1)} className='logo'>Afroz.dev
           </a>
           { lessThan768 && 
           <>
           { !menuActive ?  
           <FaExpandArrowsAlt onClick={() => setMenuActive(true)} style={{ fontSize: "2.5rem", margin: "6px 6px 0px 0px", cursor: "pointer" }}  /> 
          :
          <BiMenu id='menu-icon' className='bx-x' onClick={() => setMenuActive(false)} style={{  cursor: "pointer" }} />
          }
           </>
           }
           {/* {menuActive ?  
          } */}

           <nav className='navbar' style={{ display: bigThan768 ? "block" : !menuActive ? "block" : "none", scrollBehavior: "smooth", transition: "0.5s ease" }}>
            <a href='#home' className='active' style={{ color: number == 1 ? "#0ef" : "white" }} onClick={() => setNumber(1)}>Home</a>
            <a href='#about' style={{ color: number == 2 ? "#0ef" : "white" }} onClick={() => setNumber(2)}>About</a>
            <a href='#services' style={{ color: number == 3 ? "#0ef" : "white" }} onClick={() => setNumber(3)}>Services</a>
            <a href='#portfolio' style={{ color: number == 4 ? "#0ef" : "white" }} onClick={() => setNumber(4)}>Projects</a>
            <a href='#contact' style={{ color: number == 5 ? "#0ef" : "white" }} onClick={() => setNumber(5)}>Contact</a>

           </nav>
      </header> 
      <Fade top distance="20%" duration={1500}>
      <section 
      className='home' id='home'>
        <div className='home-content'>
          <h3>Hello, It's me</h3>
          <h1>Afroz Ahmed</h1>
          <h3>And I'm a <span>
          <Typed
                strings={[
                    'Frontend Developer!',
                    ''
                  ]}
                    typeSpeed={30}
                    backSpeed={30}
                    loop >
                </Typed></span></h3>
          <p>Hi, I'm Afroz Ahmed, A passionate Front-end React Developer.</p>
          <div className='social-media'>
            {/* <a href='#'><FaFacebook /></a> */}
            <a target="_blank" rel="noopener" href='https://www.linkedin.com/in/afroz-ahmed-7227731a5/'><FaLinkedin /></a>
            <a target="_blank" rel="noopener" href='https://github.com/afroz214'><FaGithub /></a>
          </div>
          <a onClick={alertMg} className='btn' style={{ cursor: "pointer" }}>Download CV</a>
        </div>
        <div className='home-img'>
          <img src={pic3} style={{ height: lessThan768 ? "250px" : "524px", margin: !lessThan768 && "0 10px 0px 70px", borderRadius: "50%" }} />
        </div>
      </section>
      </Fade>
      <Fade top distance="20%" duration={1500}>
      <section className='about' id='about'>
       <div className='about-img'>
        <img src={pic1} />
       </div>
       <div className='about-content'>
        <h2 className='heading'>About<span>Me</span></h2>
        <h3>A dedicated Front-end Developer</h3>
        <p>
        As a junior Front-End Developer, i possess an impressive arsenal of skills in HTML, CSS, javaScript, React, SCSS.
        I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting
        dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in colloborating with cross-functional teams to produce outstanding web applications.
        </p>
        <a  className='btn' onClick={""} style={{ cursor: "not-allowed" }}>Read More</a>
       </div>
      </section>
      </Fade>
      <Fade top distance="20%" duration={1500}>
      <section className='services' id='services'>
       
        <h2 className='heading'>Our <span>Services</span></h2>
        <div className='services-container'>
          <div className='services-box'>
          <FaReact className='services-icon' />
          <h3>Web Development</h3>
          <p>Integrating the API and some other tools in the development part.</p>
          <a className='btn' style={{ cursor: "not-allowed" }}>Read More</a>
          </div>
          <div className='services-box'>
          <FaPaintBrush className='services-icon'/>
          <h3>Graphic Design</h3>
          <p>Design the UI/UX to look the page beautiful.</p>
          <a style={{ cursor: "not-allowed" }} className='btn'>Read More</a>
          </div>
          <div className='services-box'>
          <FaRegChartBar className='services-icon'/>
          <h3>Back-end Development</h3>
          <p>Don't known too much about it, just started.</p>
          <a style={{ cursor: "not-allowed" }} className='btn'>Read More</a>
          </div>
        </div>
      </section> 
        </Fade>

       <Fade top distance="20%" duration={1500}> 
      <section className='portfolio' id='portfolio'>
        <h2 className='heading'>Latest <span>Project</span></h2>
        
        <div className='portfolio-container'>
          <div className='portfolio-box' style={{ height: "300px" }}>
            <img src={pic5} />
            <div className='portfolio-layer'>
              <h4>Insurance App</h4>
              <p>The last project i worked on as a React developer</p>
              <a target="_blank" rel="noopener" href='https://preprodcar.rbstaging.in/landing-page'><FaExternalLinkAlt /></a>
            </div>
          </div>
          <div className='portfolio-box' style={{ height: "300px" }}>
            <img src={pic6}  />
            <div className='portfolio-layer'>
              <h4>E-commerce</h4>
              <p>This app has been made using MERN Stack Development. This is kind of old projects when i was learning to how to connect the front-ent to backend.</p>
              <a target="_blank" rel="noopener" href='https://shoppingnekoapp.herokuapp.com/products' className='external-link'><FaExternalLinkAlt /></a>
            </div>
          </div>
          <div className='portfolio-box' style={{ height: "300px" }}>
            <img src={pic7} />
            <div className='portfolio-layer'>
              <h4>Insta-clone</h4>
              <p>This app has been made using MERN Stack Development. This is kind of old projects when i was learning to how to connect the front-ent to backend.</p>
              <a target="_blank" rel="noopener" href='https://socialappinstaclone.herokuapp.com/'><FaExternalLinkAlt /></a>
            </div>
          </div>
        </div>
      </section>  
      </Fade> 

<Fade top distance="20%" duration={1500}>
      <section className='contact' id='contact'>
         <h2 className='heading'>Contact<span>Me !</span></h2>
         <form action='#'>
          <div className='input-box'>
            <input type="text" placeholder='Full Name' />
            <input type="email" placeholder='Email Address' />
          </div>
          <div className='input-box'>
            <input type="number" placeholder='Mobile Number' />
            <input type="text" placeholder='Email Subject' />
          </div>
          <textarea name='' id='' cols="30" rows="10" placeholder='Your Message'></textarea>
          <input type="submit" value="Send Message" className='btn' />
         </form>
      </section> 
      </Fade> 

      <footer className='footer'>
        <div className='footer-text'>
          <p>Copyright &copy; by Afroz | All Rights Reserved.</p>
        </div>
        <div className='footer-iconTop'>
          <a href='#home'><FaArrowUp className='up-arrow' /></a>
        </div>
      </footer> 
    </>
  )
}

export default App