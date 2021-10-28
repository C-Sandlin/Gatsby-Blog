import * as React from "react"
import { Link } from "gatsby"

export default function Nav() {
  return (
    <nav>
      <h1>Logo</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/404">404</Link>
      </div>
    </nav>
  )
}
