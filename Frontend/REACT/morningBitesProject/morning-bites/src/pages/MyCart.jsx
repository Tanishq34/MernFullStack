import Card from "../components/Card.jsx"
import "../components/Card.css"
import { useNavigate } from "react-router-dom"

function Mycart({ mycartitem }) {
    const navigate = useNavigate()
    console.log("item in cart", mycartitem)

    function GoToHome() {
        navigate("/")
    }

    return (
       <div>
      {mycartitem?.length === 0 ? (
        <div className="empty-cart">
          <p>There is no item in Cart</p>
          <button
            onClick={() => {
              GoToHome();
            }}
          >
            GoToHome
          </button>
        </div>
      ) : (
        <div className="card-container">
          {mycartitem?.map((item, index) => (
            <div key={index}>
              <Card data={item} />
            </div>
          ))}
        </div>
      )}
    </div>)
}

export default Mycart;