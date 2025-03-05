import './Banner.css'
import { IoWarning } from 'react-icons/io5'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { IoCloseCircle } from 'react-icons/io5'
import { IoInformationCircle } from 'react-icons/io5'
import classNames from 'classnames'

// State = success, warning, error, or empty string for information
// Banner > Banner.Header + Banner.Body

export default function Banner({ children, state }) {
	const stateClass = state ? `banner-${state}` : null

	const icon = {
		warning: <IoWarning />,
		success: <IoCheckmarkCircle />,
		error: <IoCloseCircle />,
		'': <IoInformationCircle />,
	}

	const classes = classNames('banner', stateClass)

	return (
		<div className={classes}>
			<div className="banner-left">{icon[state]}</div>
			<div className="banner-right">{children}</div>
		</div>
	)
}
