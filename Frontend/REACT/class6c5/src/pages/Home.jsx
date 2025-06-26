import Card from "../components/Card.jsx"
import "../components/Card.css"
import { BiteContext } from "../context/MyContext.jsx"
import { useContext } from "react"
// import { Variable } from "../utils/variables.js";
// import { data } from "react-router-dom";
// import "../utils/variables.js"

function Home() {
 const  {Variable}=useContext(BiteContext)
  return (
    <div className="card-container">
      {Variable?.map((item, index) => {
        return (
          <div key={index}><Card data={item}  /></div>
        )
      }

      )}
    </div>
  )
}

export default Home;