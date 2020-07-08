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


#### Creating New Gatsby Site:
* gatsby new [SITE_DIRECTORY_NAME] [URL_OF_STARTER_GITHUB_REPO]

#### Gatsby components next
