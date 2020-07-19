import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/authLayout"
import Profile from "../components/profile"
import Login from "../components/login"
import PrivateRoute from "../components/privateRoute"

const App = () => (
  <Layout>
    <Router>
      <Profile path="/app/profile" />
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App