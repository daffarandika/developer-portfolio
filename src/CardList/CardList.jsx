import './CardList.css'
import Card from '../Card/Card'

export default function ({ cardItems }){
  return (
    <div className="card-list">
    {
      cardItems.map((ci) => (
        <Card key={ci.imageUrl} {...ci} />
      ))
    }
    </div>
  )
}
