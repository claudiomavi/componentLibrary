// Card.Image = src with the logo
// Card.Header = write the children
// Card.Body = write the children
// Card > CardImage + CardHeader + CardBody

import './Card.css'

export default function Card({ children }) {
	return <div className="card">{children}</div>
}
