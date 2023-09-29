# React country selector

A ReactJS module exporting a select of [paylike supported countries](https://github.com/paylike/countries)

## Usage

```json
"dependencies": {
	"@paylike/react-country-select": "*",
}
```

```js

var ReactDOM = require('react-dom');
var CountrySelect = require('react-country-select');

ReactDOM.render(CountrySelect, {
	/*
	value,
	required,
	initial,		// set a text to display in an initial option
	className,
	exclude, // Array of country codes to exclude
	filter, // function to filter countries (( { code, currency, name } ) => Boolean)

	onChange: function( country ){},
	*/
});

```
