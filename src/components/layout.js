import * as React from "react"
import { Link } from "gatsby"
import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Nav></Nav>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
