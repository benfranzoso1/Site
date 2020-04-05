import React from "react"
import { Link } from "gatsby"
import Logo from "../assets/Logo.svg"

export default () => (
<header className="headerbar">
    <div className="header_container">
        <div className="logo_container">
            <Link to="/">
                <Logo className="brandlogo"></Logo>
            </Link>
        </div>
        <nav role="naviagtion">
            <Link to="/">Equipment Types</Link>
            <Link to="/">About</Link>
            <Link to="/">Learn</Link>
            <Link to="/">Get Started</Link>

        </nav>
    </div>
</header>
)

