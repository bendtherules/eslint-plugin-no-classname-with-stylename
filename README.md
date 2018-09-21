# eslint-plugin-no-classname-with-stylename

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

Add `no-classname-with-stylename` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-classname-with-stylename"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-classname-with-stylename/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





