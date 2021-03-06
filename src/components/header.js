import * as React from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import Title from "./title"
import NavToggler from "./ui/nav-toggler"
import Nav from "./nav"
import Logo from "../svg/logo.svg"

const Header = ({ color }) => {
  const [isNavOpen, setisNavOpen] = React.useState(false)

  const headerClass = classNames({
    "fixed top-0 left-0 z-50 py-3 w-full backdrop-filter backdrop-blur-lg backdrop-saturate-150 lg:py-5": true,
    "bg-light bg-opacity-50": color === "light",
    "bg-[#110e50] bg-opacity-90": color !== "light",
  })

  const logoClass = classNames({
    "h-8 w-auto lg:h-10": true,
    "text-dark": color === "light",
    "text-light": color !== "light",
  })

  return (
    <header className={headerClass}>
      <div className="container flex items-center">
        <Link to="/">
          <span className="sr-only">
            <Title />
          </span>

          <Logo className={logoClass} />
        </Link>

        <Nav isOpen={isNavOpen} color={color} />

        <NavToggler
          onClick={() => setisNavOpen(!isNavOpen)}
          isOpen={isNavOpen}
          color={color}
        />
      </div>
    </header>
  )
}

export default Header
