# sass-to-js

[![Build Status](https://travis-ci.org/malyw/sass-to-js.svg?branch=master)](https://travis-ci.org/malyw/sass-to-js)
[![npm version](https://badge.fury.io/js/sass-to-js.svg)](http://badge.fury.io/js/sass-to-js)
[![devDependency Status](https://david-dm.org/malyw/sass-to-js/dev-status.png)](https://david-dm.org/malyw/sass-to-js/dev-status.png)

**sass-to-js** is a Library to easily pass Sass variables via CSS to JavaScript.

It provides Sass methods to save Sass maps and list as JSON to CSS and

JavaScript helpers to read those strings from CSS to JavaScript objects.

It requires **no dependencies** and has [nice Code Coverage with Tests](https://github.com/malyw/sass-to-js/tree/master/test/jasmine/specs)!

Library provides utils functions `sassToJs` for both Sass and JavaScript.

## Usage examples

You can use it e.g. for passing data from Sass to JS like:

* media breakpoints list to reuse in JavaScript/HTML (like in [responsive image solutions](https://css-tricks.com/making-sass-talk-to-javascript-with-json/))
* some variables values (e.g. theme colors, dimensions etc.)
* list of variable values which might be applied in some circumstances (for example, columns count for different types of devices)
* to test your Sass code/framework with JavaScript
* to prevent providing same variables in Sass and JavaScript (as described in [sass-to-js article](http://blog.gospodarets.com/) ToDo link)

## Install

Library is available via **bower**:

```bash
bower install sass-to-js --save
```

as  **npm module**:

```bash
npm install sass-to-js --save
```

or you can just download it [from Github](https://github.com/malyw/sass-to-js)

## Usage

### Sass

Import `sass/_sass-to-js.scss` library file:

```sass
@import "sass-to-js/sass/sass-to-js";
```

After that you can pass any your Sass maps or lists variables to util function `sassToJs`. Examples:

```sass
$mediaBreakPoints: (
  small-min: 768px,
  extra-small: 767px,
  medium-min: 992px,
  small-max: 991px,
  large-min: 1200px,
  medium-max: 1199px
);

.breakpoints-data{
  font-family: sassToJs($mediaBreakPoints);
}

$colorMap: (
  colorHexShort: #f00,
  colorHex: #ff0000,
  colorRgba: rgba(255, 0, 0, 0.5),
  blackGradations: ('#000', '#111', '#222')
);

.colors-data{
  &:before{
    content: sassToJs($colorMap);
    display: none;
  }
}
```

### JS

### Including

Include `js/dist/sass-to-js.min.js`file to your project.
It might be added via `<script/>` tag:

```html
<script src="sass-to-js/js/dist/sass-to-js.min.js"></script>
```

as CommonJS module:

```js
var sassToJs = require('sass-to-js/js/dist/sass-to-js.min.js');
```

or AMD module:

```js
require([
    'sass-to-js/js/dist/sass-to-js.min'
], function (sassToJs) {

});
```

### Syntax

Library provides util function `sassToJs` which applies two params:

1) Required `element` - HTMLElement, from which converted Sass JSON will be read;

2) Optional `params`- Object with params.

```js
/**
 * @public
 * @param element [HTML Element]
 *
 * @param [params] {Object}
 * @param [params.cssProperty] {String} CSS property name for CSS to be taken form. 'font-family' is set if not provided.
 * @param [params.pseudoEl] {String} e.g. ':before' or '::after'- if CSS need to be taken from CSS generated element
 * @param [params.debug] {Boolean} If "true"- errors are thrown to console to simplify debug
 *
 * @returns  {Object} JSON object
 */
function sassToJs(element, params) {
    ...
}
```

Variations of usage:

1. **Without `params` Object** library will read "font-family" property and try to parse it as JSON
Example:

```js
sassToJs(
    document.querySelector('.helper')
);
```

2. **`params.pseudoEl`**- sets that JSON has to read from CSS generated content inside of element:

```js
sassToJs(
    document.querySelector('.helper'),
    {
        pseudoEl: ':before'
    }
);
```

3. **Providing `params.cssProperty`** - in this string param you can set from which CSS property has to read JSON

```js
sassToJs(
    document.querySelector('.helper'),
    {
        pseudoEl: ':before',
        cssProperty: 'content'
    }
);
```

4. **`params.debug`**- as expected, adds logging parsing etc. error to developer console.
Otherwise library doesn't trigger errors and just returns empty Object `{}` as result of its call.

### AngularJS/jQuery support

If you use Angular or/and jQuery, library detects it and provides util methods for them.

#### AngularJS

```js
angular.element(htmlEl)
    .sassToJs({pseudoEl: '::before', cssProperty: 'content'});
```

#### jQuery

```js
$(testEl)
    .sassToJs({pseudoEl: '::before', cssProperty: 'content'});
```

## Links and demos

### Article
ToDo link to article

### Demo
ToDo demo

### Codepen

It's possible to use the library on Codepen when you use [sass-to-js Pen](http://codepen.io/malyw/pen/zGxodr)
as [External Resource](http://blog.codepen.io/2013/05/28/new-feature-use-pens-as-external-resources/).

Example: [Sass-to-json demo](http://codepen.io/malyw/pen/zGxodr).

## License

MIT

[![logo](http://imgh.us/sass-to-js_1.svg)](http://blog.gospodarets.com/) ToDo article link