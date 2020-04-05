import React from "react"
import Headerbar from "./headerbar"

export default ({ children }) => (
  <div>
    <Headerbar></Headerbar>
    <main>{children}</main>
    <footer></footer>
  </div>
)
