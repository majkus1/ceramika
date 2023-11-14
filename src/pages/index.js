import React, { useState } from "react"
import Header from "../components/header"
import { Link } from "gatsby"

const IndexPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="wrapper">
      <Header onMenuToggle={isOpen => setIsMenuOpen(isOpen)} />
      {/* <h1>Witaj na mojej stronie Gatsby!</h1> */}
      <main className={isMenuOpen ? "blurred" : ""}>
        <picture>
          <source srcSet="/icons/mob6.jpg" media="(max-width: 599px)" />
          <img src="/icons/6.jpg" alt="Background" />
        </picture>
        <div class="overlay">
          {/* <h1>
          <span>Klinkier</span> <span>to</span> <span>nasza</span> <span>specjalność</span>
          </h1> */}
          <div className="text-effect6 effect">
            <div className="overlau"></div>
            <div>
              <p>Klinkier <span>to nasza</span> specjalność</p>
              <p>Witamy w Hurtowni <span>Materiałów Budowlanych</span></p>
            </div>
          </div>
          <br></br>
          <div className="shopbtnmain">
            {/* <p>Witamy w Hurtowni Materiałów Budowlanych</p> */}
            <Link href=""><img src="/icons/arrow-right.png" />Sklep online</Link>
          </div>
        </div>
      </main>
      <section className={isMenuOpen ? "blurred" : ""}></section>
      <section className={isMenuOpen ? "blurred" : ""}></section>
    </div>
  )
}

export default IndexPage
