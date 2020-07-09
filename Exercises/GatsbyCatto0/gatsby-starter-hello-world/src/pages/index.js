import React from "react"
import { Helmet } from "react-helmet"

export default function Home() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Catto Tomato Hello World Page Title</title>
        </Helmet>
        return <div>Hello world!</div>
      </div>
    )
}
