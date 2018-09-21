/**
 * @fileoverview While using CSS Modules, disallow using (non-conditional / string) classNames in a JSX tag if it already has a styleName
 * @author Abhas Bhattacharya
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

module.exports.configs = {
    recommended: {
      plugins: ['no-classname-with-stylename'],
  
      rules: {
        'no-classname-with-stylename': 2,
      },
    },
  };


