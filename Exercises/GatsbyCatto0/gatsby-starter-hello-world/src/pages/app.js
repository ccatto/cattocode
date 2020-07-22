import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
// import Details from "../components/Details"
import Login from "../components/Login"
// import Default from "../components/Default"
// import PrivateRoute from "../components/utilities/privateRoute"

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        {/* <Profile path="/profile" /> */}
        {/* <PrivateRoute path="/profile" component={Profile} /> */}
        {/* <Details path="/details" /> */}
        <Login path="/login" />
        {/* <Default path="/" /> */}
      </Router>
    </Layout>
  )
}

export default App
