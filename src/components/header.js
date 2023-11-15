// src/components/Header.js
import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { Link } from "gatsby"
import "../styles/style.scss"

const linkPaths = {
  Oferta: "/oferta",
  Materiały: "/materialy",
  Producenci: "/producenci",
  Partnerzy: "/partnerzy",
  Kontakt: "/kontakt",
  SKLEP: "/sklep",
}

const Header = ({ onMenuToggle }) => {
  const linksMobileRef = useRef(null)
  const menuBtnRef = useRef(null)
  const linksRefs = useRef([])

  const setLinksInitialState = () => {
    linksRefs.current.forEach(link => {
      gsap.set(link, { autoAlpha: 0, y: 30 })
    })
  }

  useEffect(() => {
    const linksMobile = linksMobileRef.current
    const menuBtn = menuBtnRef.current

    gsap.set(linksMobile, { autoAlpha: 0, y: -50 })
    setLinksInitialState()

    menuBtn.addEventListener("click", () => {
      const isOpen = gsap.getProperty(linksMobile, "autoAlpha") === 1
      setLinksInitialState()

      if (isOpen) {
        gsap.to(linksMobile, { autoAlpha: 0, y: -50, duration: 1.2 })
      } else {
        gsap.to(linksMobile, { autoAlpha: 1, y: 0, duration: 1.2 })
        linksRefs.current.forEach((link, index) => {
          gsap.to(link, {
            autoAlpha: 1,
            y: 0,
            delay: 0.1 * index,
            duration: 2.5,
          })
        })
      }
    })
  }, [])

  const handleMenuClick = () => {
    const isOpen = menuBtnRef.current.classList.contains("open");
    menuBtnRef.current.classList.toggle("open");
  
    onMenuToggle(!isOpen);
  
    setLinksInitialState();
    if (isOpen) {
      gsap.to(linksMobileRef.current, { autoAlpha: 0, y: -50, duration: 1.2, display: 'none' })
    } else {
      gsap.to(linksMobileRef.current, { autoAlpha: 1, y: 0, duration: 1.2, display: 'block' }) // Możesz zmienić 'block' na 'flex' w zależności od układu
      linksRefs.current.forEach((link, index) => {
        gsap.to(link, { autoAlpha: 1, y: 0, delay: 0.1 * index, duration: 2.5 })
      })
    }
  }
  

  return (
    <div class="home">
      <header className="header">
        {/* Twój kod HTML tutaj */}
        <div className="header-logo">
          <img src="/icons/CERAMIKAlogo.png" />
        </div>
        <ul className="desktop-links">
          <li><Link href="">Oferta</Link></li>
          <li><Link href="">Materiały</Link></li>
          <li><Link href="">Producenci</Link></li>
          <li><Link href="">Partnerzy</Link></li>
          <li><Link href="">Kontakt</Link></li>
          <li><Link href="">SKLEP</Link></li>
        </ul>
        <div className="header-nav">
          <div class="header-nav__btns">
            <button
              className="menu-btn"
              ref={menuBtnRef}
              onClick={handleMenuClick}
            >
              <span className="menu-btn__burger"></span>
            </button>
          </div>
        </div>
      </header>
      <nav className="links-mobile" ref={linksMobileRef}>
        <ul>
          {Object.entries(linkPaths).map(([item, path], index) => (
            <li key={index}>
              <Link to={path} ref={el => (linksRefs.current[index] = el)}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header
