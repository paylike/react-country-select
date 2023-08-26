'use strict'

const ce = require('react').createElement
const countries = require('@paylike/countries')

module.exports = render

function render(props) {
	const classes = []

	classes.push(props.className ? props.className : 'country-select')

	if (props.value === null || props.value === '') classes.push('initial')

	return ce(
		'select',
		{
			value: props.value,
			required: props.required,
			className: classes.join(' '),

			onChange: function (e) {
				props.onChange && props.onChange(e.target.value)
			},
		},
		props.initial && ce('option', {value: ''}, props.initial),

		countries.map((c) =>
			ce(
				'option',
				{
					key: c.code,
					value: c.name,
				},
				c.name
			)
		)
	)
}
