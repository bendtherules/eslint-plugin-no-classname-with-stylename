# eslint-plugin-no-classname-with-stylename

[![NpmVersion](https://img.shields.io/npm/v/eslint-plugin-no-classname-with-stylename.svg)](https://www.npmjs.com/package/eslint-plugin-no-classname-with-stylename)
Travis: [![Travis (.org) branch](https://img.shields.io/travis/bendtherules/eslint-plugin-no-classname-with-stylename/master.svg)](https://travis-ci.org/bendtherules/eslint-plugin-no-classname-with-stylename)
Appveyor: [![AppVeyor branch](https://img.shields.io/appveyor/ci/bendtherules/eslint-plugin-no-classname-with-stylename/master.svg)](https://ci.appveyor.com/project/bendtherules/eslint-plugin-no-classname-with-stylename)

While using CSS Modules, disallow using (non-conditional / string) classNames in a JSX tag if it already has a styleName

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-classname-with-stylename`:

```
$ npm install eslint-plugin-no-classname-with-stylename --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-classname-with-stylename` globally.

## Usage


Either extend from the plugin or add the rules explicitly.

### A. Extend from plugin
```js
{
    "extends": [
        // ... other extends here (like airbnb)
        "plugin:no-classname-with-stylename/recommended"
    ]
}
```

## OR

### B. Use rule directly

Add `no-classname-with-stylename` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-classname-with-stylename"
    ]
}
```

Then configure the rules you want to use under the rules section.

```js
{
    "rules": {
        "no-classname-with-stylename/no-classname-with-stylename": 1,
    }
}
```

## Supported Rules

There is only one rule, for now -

* `no-classname-with-stylename` - Disallow string className alongwith styleName attribute in the same JSX tag.





