import React from "react"
import Headerbar01 from "./headerbar01"

export default ({ children }) => (
  <div>
    <Headerbar01></Headerbar01>
    <main>{children}</main>
    <footer></footer>
  </div>
)
