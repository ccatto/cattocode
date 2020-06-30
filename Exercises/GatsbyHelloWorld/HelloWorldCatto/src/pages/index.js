import React from "react"
import { Link } from "gatsby"


export default function Home() {
  return <div>
    <div>
      <a href="/">home</a> | <a href="/about">About </a>
    </div>

    <div>
    <h3>link components: </h3> 
    <Link to="/">home </Link>
      <Link to="/about">about </Link>
    </div>


    Hello world Catto!</div>
}
