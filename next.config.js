const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "./styles/variables.scss";`,
  },
}