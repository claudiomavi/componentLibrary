import logo from './assets/cardImgDefault.svg'

export default function CardImage({ src = logo }) {
	return <img src={src} />
}
