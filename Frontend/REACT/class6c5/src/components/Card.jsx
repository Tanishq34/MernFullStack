import "./Card.css"
import { useContext } from "react";
import { BiteContext } from "../context/MyContext.jsx"

function Card({data}) {
   
const { handleCarditem,
        decrement,
        increment,
        trackbtn,
        setTrackbtn,
        mycartitem }=useContext(BiteContext)
        
    const allreadyadded = mycartitem?.find((item) => {
        return item?.id == data?.id;
        //  console.log("",allreadyadded);
    })
   
   

   
    return (
        <div className="cardBox">
            <img src={data?.image} alt="image" />
            <div className="div1">
                <div><span>Name:</span>{data?.productName}</div>
                <div><span>Price:Rs</span>{data?.productPrice}</div>
            </div>
            <div className="div2">
                <div><span>MadeBy:</span>{data?.madeBy}</div>
                <div><span>Rating:</span>{data?.rating}<span id="star">★</span></div>
            </div>
            <div className="div3"><span>Quantity:</span>{data?.quantity}</div>
            <div className="description">
                {
                    trackbtn === true ? (
                        <div>
                            <p>Description:{data.description.substr(0, 100)}<br />
                                <button onClick={() => {
                                    setTrackbtn(!trackbtn)
                                }}>read more</button></p>
                        </div>) : (<div>
                            <p>Description:{data.description}<div>
                                <br />
                                <button onClick={() => {
                                    setTrackbtn(!trackbtn)
                                }}>Read less</button></div></p>
                        </div>)
                }
            </div>
            {
                allreadyadded !== undefined ? (<div className="cartbtn">
                    <div className="add-to-cart">
                        <p onClick={() => {
                            decrement(data);
                        }}>-</p>
                        <p>{allreadyadded?.quantity}</p>
                        <p onClick={() => {
                            increment(data);
                        }}>+</p>

                    </div>
                </div>)
                    :
                    (<div className="cartbtn">
                        <div className="add-to-cart">
                            <button onClick={() => {
                                handleCarditem(data)
                            }}>Add to cart</button>
                        </div>
                    </div>)}
        </div>
    )
}
export default Card;                                   