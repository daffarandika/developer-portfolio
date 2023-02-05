import './Card.css'
export default function Card({imageUrl, text}) {
  return (
    <div className="card">
      <img className="card-image" src={imageUrl} alt={text}/>
      <strong className="card-text">{text}</strong>
    </div>
  )
}
