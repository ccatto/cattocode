const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/uy00413/Documents/GitHub/CattoCode/CattoCode/Exercises/GatsbyCatto0/gatsby-starter-hello-world/src/pages/404.js"))),
  "component---src-pages-about-css-modules-js": hot(preferDefault(require("/Users/uy00413/Documents/GitHub/CattoCode/CattoCode/Exercises/GatsbyCatto0/gatsby-starter-hello-world/src/pages/about-css-modules.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/uy00413/Documents/GitHub/CattoCode/CattoCode/Exercises/GatsbyCatto0/gatsby-starter-hello-world/src/pages/about.js"))),
  "component---src-pages-account-js": hot(preferDefault(require("/Users/uy00413/Documents/GitHub/CattoCode/CattoCode/Exercises/GatsbyCatto0/gatsby-starter-hello-world/src/pages/account.js"))),
  "component---src-pages-auth-app-js": hot(preferDefault(require("/Users/uy00413/Documents/GitHub/CattoCode/CattoCode/Exercises/GatsbyCatto0/gatsby-starter-hello-world/src/pages/authApp.js"))),
  "component---src-pages-auth-js": hot(preferDefault(require("/Users/uy00413/Documents/GitHub/CattoCode/CattoCode/Exercises/GatsbyCatto0/gatsby-starter-hello-world/src/pages/auth.js"))),
  "component---src-pages-code-js": hot(preferDefault(require("/Users/uy00413/Documents/GitHub/CattoCode/CattoCode/Exercises/GatsbyCatto0/gatsby-starter-hello-world/src/pages/code.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/uy00413/Documents/GitHub/CattoCode/CattoCode/Exercises/GatsbyCatto0/gatsby-starter-hello-world/src/pages/index.js")))
}

