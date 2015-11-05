# Paylike country select

A ReactJS module exporting a select of [paylike supported countries](https://github.com/paylike/countries)


## Usage

#### Requires ReactJS ^v0.14.2

Pin the dependency to the current version branch to ensure future installs of
your application will work. Like so:

```json
"dependencies": {
	"paylike-country-select": "paylike/react-country-select#v1.x"
}
```

This will keep you on the `1.x` branch which will not have breaking changes
merged.

```js

var ReactDOM = require('react-dom');
var CountrySelect = require('react-country-select');

ReactDOM.render(CountrySelect, {
/*
	value,
	required,
	initial,		// set a text to display in an initial option
	className,

	onChange: function( country ){},
*/
});

```

