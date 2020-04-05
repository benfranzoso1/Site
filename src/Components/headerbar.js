import React from "react"
import { Link } from "gatsby"
import Logo from "../assets/Logo.svg"

export default () => (
<header className="headerbar">
    <div className="header_container">
        <Link to="/">
            <Logo></Logo>
        </Link>
    </div>
</header>
)

