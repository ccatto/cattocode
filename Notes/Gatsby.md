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