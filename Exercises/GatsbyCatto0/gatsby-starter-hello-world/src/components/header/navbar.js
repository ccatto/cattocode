import React from "react"
// import styles from "./navbar.module.scss"
import { nav, button } from "react-bootstrap"
import { Link } from "gatsby"

export default () => (
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
      <Link className="navbar-brand" to="/#">
        Home{" "}
      </Link>
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample11"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse text-center" id="navbarsExample11">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link className="nav-link" to="/code">
              Code{" "}
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/about">
              About{" "}
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/auth">
              Auth{" "}
            </Link>
          </li>  
          <li class="nav-item">
            <Link className="nav-link" to="/authApp">
              authApp{" "}
            </Link>
          </li>     
          <li class="nav-item">
            <Link className="nav-link" to="/profile">
              Profile{" "}
            </Link>
          </li>                           
        </ul>
      </div>
    </div>
  </nav>
)
