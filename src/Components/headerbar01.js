import React from "react"
import { Link } from "gatsby"
import Logo from "../assets/Logo.svg"

export default () => (
<header className="headerbar02">
    <div className="header_container">
        <div className="logo_container">
            <Link to="/">
                <Logo className="brandlogo"></Logo>
            </Link>
        </div>
        <nav role="naviagtion">
            <Link to="/getstarted" activeStyle={{ borderBottom: "4px solid #01f055" }} >Get Financing</Link>
        </nav>
    </div>
</header>
)
