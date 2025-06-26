import "./card.css"

function Card({First}){
    return(
        <div className="Maindiv">
<img src={First.filename} alt="" />
<p>{First.name}</p> 
<p>{First.size}</p>
    </div>
    );
}
export default Card;