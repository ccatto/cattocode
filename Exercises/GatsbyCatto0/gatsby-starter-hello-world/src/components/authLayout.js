import React from "react"

import NavBar from "./authNav"

const authLayout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
)

export default authLayout