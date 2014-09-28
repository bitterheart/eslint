/**
 * @fileoverview  a rule that enforces or disallows spaces after Property names (and before Property values) inside of objects.
 * @author Emory Merryman
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslint = require("../../../lib/eslint"),
    ESLintTester = require("eslint-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new ESLintTester(eslint);
eslintTester.addRuleTest("lib/rules/key-spacing", {

    valid: [{
        code: "var x={foo1 : bar};",
        args: [2, "always"]
    }, {
        code: "var x={'foo2' : 'bar'};",
        args: [2, "always"]
    }, {
        code: "var x={'foo3':bar};",
        args: [2, "never"]
    }, {
        code: "var x={'foo4':'bar'};",
        args: [2, "never"]
    }],

    invalid: [{
        code: "var x={foo5:'bar'};",
        args: [1, "always"],
        errors: [{
            message: "A single space is required before ':' in the foo5 property.",
            type: "Property"
        }, {
            message: "A single space is required after ':' in the foo5 property.",
            type: "Property"
        }]
    }, {
        code: "var x={'foo6':'bar'};",
        args: [2, "always"],
        errors: [{
            message: "A single space is required before ':' in the foo6 property.",
            type: "Property"
        }, {
            message: "A single space is required after ':' in the foo6 property.",
            type: "Property"
        }]
    }, {
        code: "var x={foo7: 'bar'};",
        args: [2, "always"],
        errors: [{
            message: "A single space is required before ':' in the foo7 property.",
            type: "Property"
        }]
    }, {
        code: "var x={'foo8': 'bar'};",
        args: [2, "always"],
        errors: [{
            message: "A single space is required before ':' in the foo8 property.",
            type: "Property"
        }]
    }, {
        code: "var x={foo9 :'bar'};",
        args: [2, "always"],
        errors: [{
            message: "A single space is required after ':' in the foo9 property.",
            type: "Property"
        }]
    }, {
        code: "var x={'foo10' :'bar'};",
        args: [2, "always"],
        errors: [{
            message: "A single space is required after ':' in the foo10 property.",
            type: "Property"
        }]
    }, {
        code: "var x={foo11 : 'bar'};",
        args: [2, "never"],
        errors: [{
            message: "There must not be any spaces before ':' in the foo11 property.",
            type: "Property"
        }, {
            message: "There must not be any spaces after ':' in the foo11 property.",
            type: "Property"
        }]
    }, {
        code: "var x={'foo12' : 'bar'};",
        args: [2, "never"],
        errors: [{
            message: "There must not be any spaces before ':' in the foo12 property.",
            type: "Property"
        }, {
            message: "There must not be any spaces after ':' in the foo12 property.",
            type: "Property"
        }]
    }, {
        code: "var x={foo13 :'bar'};",
        args: [2, "never"],
        errors: [{
            message: "There must not be any spaces before ':' in the foo13 property.",
            type: "Property"
        }]
    }, {
        code: "var x={'foo14' :'bar'};",
        args: [2, "never"],
        errors: [{
            message: "There must not be any spaces before ':' in the foo14 property.",
            type: "Property"
        }]
    }, {
        code: "var x={foo15: 'bar'};",
        args: [2, "never"],
        errors: [{
            message: "There must not be any spaces after ':' in the foo15 property.",
            type: "Property"
        }]
    }, {
        code: "var x={'foo16': 'bar'};",
        args: [2, "never"],
        errors: [{
            message: "There must not be any spaces after ':' in the foo16 property.",
            type: "Property"
        }]
    }]
});
