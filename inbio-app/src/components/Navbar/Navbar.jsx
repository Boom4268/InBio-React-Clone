import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import Logo from '../../images/InBio-Logo.png'
import 'boxicons'

export default function Navbar() {

  const [isHover, setIsHover] = useState(false);
  const [responsive, setResponsive] = useState({status: false});
  const res = useRef();
  const scrollHandle = useRef();
  
  const handleClick = () => {
    if(responsive.icon === 'menu'){
      setResponsive(prev => {
        return {
          ...prev,
          icon: 'x'
        }
      })

      res.current.style.display = '';
    }else {
      setResponsive(prev => {
        return {
          ...prev,
          icon: 'menu'
        }
      })
      res.current.style.display = 'none';
    }
  }

  useEffect(() => {
    console.log('re-render');
    if(window.innerWidth <= 820){
      setResponsive({status: true, icon: 'menu'});
    }

    window.addEventListener('resize', () => {
      if(window.innerWidth <= 820){
        setResponsive({status: true, icon: 'menu'});
      } else{
        setResponsive({status: false});
      }
    })

    window.addEventListener('scroll', () => {
      if(window.scrollY < 15){
        scrollHandle.current.style.backgroundColor = 'rgba(0, 0, 0, 0)';
      }else {
        scrollHandle.current.style.backgroundColor = '#000';
      }
    }) 
  }, [])
  
  return (
    <div className='nav' ref={scrollHandle}>
      <div className="logo-nav">
        <img src={Logo} alt="logo" />
      </div>
      <div
        className="navbar"
        style={{ display: (responsive.status) ? 'none' : '' }}
        ref={res}
      >
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#" className="nav-link">HOME</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="nav-link">AUTHOR</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="nav-link">PROJECTS</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="nav-link">REVIEWS</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="nav-link">BLOG</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="nav-link">CONTACT US</a>
          </li>
        </ul>
      </div>
      <div
        className='btn-menu'
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={handleClick}
      >
        <box-icon size='md' name={responsive.icon} color={isHover ? 'red' : 'white'}></box-icon>
      </div>
    </div>
  )
}
