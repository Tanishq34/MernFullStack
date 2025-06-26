
import "./card.css" 
function Card({imgurl,changeimg,MSname,changeName,aboutTOMS,changeAboutMS }){
return(
    <div  className="demo">
    
        <img src={imgurl} alt="demo" />
        <p className="msname">{`${MSname}`}</p>
        <p className="aboutMS">{`${aboutTOMS}`}</p>
        <button className="btn" onClick={()=>{
            changeName("THALA")
        }}>Change Name</button>
    </div>
)
}


export default Card;