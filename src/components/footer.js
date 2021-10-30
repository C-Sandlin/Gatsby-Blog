import * as React from "react"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <footer id="footer-main">
      <div className="footer-info">
        <h1>Footer</h1>
      </div>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/404">404</Link>
      </div>
    </footer>
  )
}
