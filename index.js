'use strict';

var ce = require('react').createElement;
var countries = require('paylike-countries');

module.exports = render;

function render( props ){
	return ce('select', {
		value: props.value,
		required: props.required,
		className: props.className || 'country-select',

		onChange: function( e ){
			props.onChange && props.onChange(e.target.value);
		},
	},
		props.initial && ce('option', { value: '' }, props.initial),

		countries.map(function( c ){
			return ce('option', { key: c.code, value: c.name }, c.name);
		})
	);
}
