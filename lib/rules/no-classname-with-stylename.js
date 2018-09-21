/**
 * @fileoverview Disallow string className alongwith styleName in the same JSX tag
 * @author Abhas Bhattacharya
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const reportText = "Do not use className alongwith styleName in same JSX tag. \nstyleName should compose from the className";

module.exports = {
    meta: {
        docs: {
            description: "Disallow string className alongwith styleName in the same JSX tag",
            recommended: true
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "JSXOpeningElement": function (node) {
                const hasClassNameWithoutExpr = node.attributes.some((attr) => attr.name.name === "className" && (attr.value === null || attr.value.type !== 'JSXExpressionContainer'))
                const hasStyleName = node.attributes.some((attr) => attr.name.name === "styleName");

                if (hasClassNameWithoutExpr && hasStyleName) {
                    const nodeAttrClassName = node.attributes.find((attr) => attr.name.name === "className");
                    context.report(nodeAttrClassName, reportText);
                }
            }
        };
    }
};
