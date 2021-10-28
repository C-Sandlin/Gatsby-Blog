import * as React from "react"
import { Link } from "gatsby"
import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  // const isRootPath = location.pathname === rootPath
  // let header

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  return (
    <div>
      {/* <header className="global-header">{header}</header> */}
      <Nav></Nav>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
