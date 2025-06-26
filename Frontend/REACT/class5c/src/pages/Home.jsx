import Card from "../components/Card.jsx"
import "../components/Card.css"
// import { Variable } from "../utils/variables.js";
// import { data } from "react-router-dom";
// import "../utils/variables.js"

function Home({ product, setcartitem, mycartitem }) {
  return (
    <div className="card-container">
      {product?.map((item, index) => {
        return (
          <div key={index}><Card data={item} mycartitem={mycartitem} setcartitem={setcartitem} /></div>
        )
      }

      )}
    </div>
  )
}

export default Home;