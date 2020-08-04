import React from "react"
import { Helmet } from "react-helmet"
import { navigate } from "gatsby"
// import { Link } from 'gatsby'
// import favicon from `../static/favicon.ico`
import Layout from "../components/layout"
// import Header from "../components/header"
// import Main from "../components/main"
// import Footer from "../components/footer/footer"
import { handleLogin, isLoggedIn } from "../services/auth"




// import React from "react"
// import { navigate } from "gatsby"
// import { handleLogin, isLoggedIn } from "../services/auth"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }

    return (
      <>
        <h1>Log in Index</h1>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            navigate(`/app/profile`)
          }}
        >
          <label>
            Username
            <input type="text" name="username" onChange={this.handleUpdate} />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              onChange={this.handleUpdate}
            />
          </label>
          <input type="submit" value="Log In" />
        </form>
      </>
    )
  }
}

export default Login









// export default function Home() {
//   return (
//     <Layout>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>Catto Tomato Hello World Page Title</title>
//       </Helmet>
//       <div className="text-center">
//         <h2>Home Catto</h2>
//         <p>This is the home page</p>
//       </div>
//     </Layout>
//   )
// }
