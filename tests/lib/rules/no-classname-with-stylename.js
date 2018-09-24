/**
 * @fileoverview Disallow string className alongwith styleName in the same JSX tag
 * @author Abhas Bhattacharya
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-classname-with-stylename"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        ecmaVersion: 7,
    }
});
ruleTester.run("no-classname-with-stylename", rule, {

    valid: [
        "<span styleName='my-card' />",
        "<span className='card' />",
        "<span className={123} styleName='my-card' />",
        "<span {...({a:1})} className={'card'} styleName='my-card' />",
        "<span {...someVar} className={'card'} styleName='my-card' />",
        "<span className={'card'} styleName='my-card' />",
        "<span className={true ? 'card' : 'no-card'} styleName='my-card' />"
        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "<span className='card' styleName={true ? 'my-card' : 'not-my-card'} />",
            errors: [{
                // message: "Disallow string className alongwith styleName in the same JSX tag",
            }]
        },
        {
            code: "<span className styleName='my-card' />",
            errors: [{
                // message: "Disallow string className alongwith styleName in the same JSX tag",
            }]
        },
        {
            code: "<span className='card' styleName='my-card' />",
            errors: [{
                // message: "Disallow string className alongwith styleName in the same JSX tag",
            }]
        },
        {
            code: "<span {...({qwe:234})} className='card' styleName='my-card' />",
            errors: [{
                // message: "Disallow string className alongwith styleName in the same JSX tag",
            }]
        },
        {
            code: "<span {...someVar} className='card' styleName='my-card' />",
            errors: [{
                // message: "Disallow string className alongwith styleName in the same JSX tag",
            }]
        }

    ]
});
