import React from 'react'
import './Badge.css'
import classNames from 'classnames'

// Round = square (default), pill
// Color = red, yellow, green, blue, indigo, purple, pink

export default function Badges({ children, round, color }) {
	const roundClass = round ? `badge-${round}` : ''
	const colorClass = color ? `badge-${color}` : ''

	const classes = classNames('badge', roundClass, colorClass)

	return <div className={classes}>{children}</div>
}
