import "../../styles/FactCard.css"

export default function FactCard({item}) {
  console.log(item)
  return (
    <div className="cardContainer">
        <img className="cardImg" src={item.image} alt={item.fact} />
        <p>{item.fact}</p>
    </div>
  )
}
