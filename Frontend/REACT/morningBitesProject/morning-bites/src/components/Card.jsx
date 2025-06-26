import "./Card.css"
import { useState } from "react";
function Card({ data, mycartitem, setcartitem }) {
    const [trackbtn, setTrackbtn] = useState(true)
    
    const [count, setcount] = useState(data?.quantity)

    const allreadyadded = mycartitem?.find((item) => {
        return item?.id == data?.id;
        //  console.log("",allreadyadded);
    })
    function increment() {
        console.log("IIII");
        setcount(data.quantity++);
        // data.quantity++; Ui me render nahi karega change to hoga
    }

    function decrement() {
        console.log("dddd");
        setcount(() => {
            if (data.quantity === 1) {
                removeFromCard(data.id);
                return;
            }
            return data.quantity--;
        })

    }

    function handleCarditem(data) {
        console.log("btn click", data);

        const kyacartmehu = mycartitem?.some((item) => {
            return item?.id === data?.id
        })
        setcartitem((olditem) => {
            if (kyacartmehu) {
                alert("me phle se hu cart me")
                return olditem;
            }
            return [...olditem, data];
        })

    }

    function removeFromCard(id) {
        const filterValaArray = mycartitem?.filter((item) => {
            return item.id !== id;
        })
        setcartitem(filterValaArray);
    }
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
                            decrement();
                        }}>-</p>
                        <p>{allreadyadded?.quantity}</p>
                        <p onClick={() => {
                            increment();
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