# Gatsby Notes

https://www.gatsbyjs.org/tutorial/part-zero/


# check homebrew version - homebrew helps install other software
* brew -v
https://docs.brew.sh/Installation


* brew install node
npm --version
node --version

* Install GIT

Intall gatsby cli 
npm install -g gatsby-cli

# VS Code IDE

# https://github.com/prettier/prettier

## Gatsby Starters

#### install sass plugin 
1. Install sass 
`npm install --save node-sass gatsby-plugin-sass`

2. update plugins in config file `gatsby-config.js` : 

`gatsby-plugin-sass`

3. Change style file from .css to .sass

#### Components: 


#### Running App Local

* `npm start` || `npm develop`
* Navigate to `http://localhost:8000`
* if port in use: `sudo lsof -i :8000`
* kill process `sudo kill -9 111` where 111 is PID


## Gatsby Styles
* checking out this page https://www.gatsbyjs.org/tutorial/part-two/ & below are my notes;


#### Creating New Gatsby Site:
* gatsby new [SITE_DIRECTORY_NAME] [URL_OF_STARTER_GITHUB_REPO]

#### Gatsby components next


### INstalling SASS to Gatsby 
1. Install
* `npm install --save node-sass gatsby-plugin-sass` 
2. add plugin to our gatsby-config.js file


### Adding Global Styles 
1. Add `styles` folder in `src` folder
2. defint a file in such as global.css
3. Include styles in gatsby-browser.js in root
* we may need to create this file

### Build a new page using CSS Modules:

### Adding components 
1. Create new directory `src/components` 
2. we can create a new file `container.js` or any other components;
3. 


### API Files: 


#### atsby-node.js api file
https://www.gatsbyjs.org/docs/api-files-gatsby-node/



#### absolute imports: 
* so on import we don't use `./` just `src/`
https://www.gatsbyjs.org/packages/gatsby-plugin-root-import/

npm install --save-dev gatsby-plugin-root-import

add to plugins:     'gatsby-plugin-root-import'
import Container from "src/components/container


#### Helmet 
https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/?=

Install: 
npm install --save gatsby-plugin-react-helmet react-helmet

use add to plugins: 
`gatsby-plugin-react-helmet`


````
import React from "react"
import { Helmet } from "react-helmet"
class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>
    )
  }
}
````

#### Google Fonts v2 
* Install plugin `npm install gatsby-plugin-google-fonts-v2` 
* page: https://www.gatsbyjs.org/packages/gatsby-plugin-google-fonts-v2/
* add to gatsby config: 
Here is a long example of more than one font & weights:
````
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Roboto Mono',
            variable: true,
            weights: ['200..900']
          },
          {
            family: 'limelight',
            weights: ['700']
          },
          {
            family: 'Titillium',
            variable: true,
            weights: ['200..900']
          }
        ],
        display: "swap",
      },
    }
````

#### Plugin - gatsby-source-filesystem

* install plugin `npm install --save gatsby-source-filesystem`
* page: https://www.gatsbyjs.org/packages/gatsby-source-filesystem/?=
* update gatsby-config.js:
````
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    }
````

#### React Bootstrap

* trying to figure this out
* ran `npm install react-bootstrap bootstrap --save`


* Optional Dependencies
These libraries are not included in the main distribution file reactstrap.min.js and need to be manually included when using components that require transitions or popover effects (e.g. Tooltip, Modal, etc).

* react-transition-group
* react-popper

* combining bootstrap css class & a css modules class Example:
* className={``${styles.cattoTopThinBar} row``}

#### Boostrap 4 (should break into separate page)

* Nice Link: [Bootstrap 4 Layout Grid official page](https://getbootstrap.com/docs/4.0/layout/grid/)
* full width row 
    *  <div class="row"></div>
* 2 column


#### Auth0 Adding Authentication
* https://auth0.com/blog/securing-gatsby-with-auth0/
* In Auth0 account after creating app added the following:
* Add http://localhost:8000/callback to the Allowed Callback URLs field.
* Add http://localhost:8000 to Allowed Web Origins and Allowed Logout URLs.
* Installed `npm i auth0-js`
* Added a file `.env.development` which includes:
````
# ./.env.development
# Get these values at https://manage.auth0.com
AUTH0_DOMAIN=<value>
AUTH0_CLIENTID=<value>
AUTH0_CALLBACK=http://localhost:8000/callback

````
This file does not get checked in to git;
* Added a file: `src/utils/auth.js`
* updated `gatsby-node.js` the `onCreateWebpackConfig` with some Auth0 code;

#### Client-only Routes & User Auth
* [Gatsby's Client-only Routs & Auth](https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/)
* @reach/router is installed & it's recommended approach to create client-only routes
* src/pages/app.js 


#### Firebase

* [good tutorial to set up firebase dashboard admin](https://www.robinwieruch.de/firebase-tutorial)
* 
