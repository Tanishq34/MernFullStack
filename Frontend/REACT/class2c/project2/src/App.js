import Card from "./components/Card.jsx";
import "./components/card.css"
import { useState } from "react";
// import "./components/card.css";
function App() {
  const Alldetails = [
    {
      "filename": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGi_FJnvq9ZRPbFGnQ8W_dyl2nSeJGdBq2w&s",
      "name": "yellow lambo",
      "size": "6.8 mb"
    },
    {
      "filename": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNXSAJ3uNY1nT0xSUAGTNzvxONERFkVdh1Q&s",
      "name": "CAR Art",
      "size": "3.4 mb"
    },
    {
      "filename": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjR0HKXKRJZgxSHqmRcMGIcFZkBqr5uahLYw&s",
      "name": "CAR 3",
      "size": "3.2 mb"
    },
    {
      "filename": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH8610idxkhrL6A_KC0hvZjD-uNaLRpjA7-g&s",
      "name": "BMW",
      "size": "7.6 mb"
    },
    {
      "filename": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54vHmtz3HkNS11oZs3y1jlkgGE3h6uH-pfg&s",
      "name": "RED CAR",
      "size": "5.8 mb"
    },
    {
      "filename": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHSECBgXcwqO_qW-4DcffZh9QtcxOFsFUNwQ&s",
      "name": "MERCEDES",
      "size": "7.8 mb"
    },
    {
      "filename": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWjaSnijpjuscl3nMkUezgu9xEWu-mo7R5Gg&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWjaSnijpjuscl3nMkUezgu9xEWu-mo7R5Gg&s",
      "name": "Orange LAMBO",
      "size": "7.6 mb"
    },
    {
      "filename": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWjaSnijpjuscl3nMkUezgu9xEWu-mo7R5Gg&s",
      "name": "10/6/13",
      "size": "5.5 mb"
    },
    {
      "filename": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWjaSnijpjuscl3nMkUezgu9xEWu-mo7R5Gg&s",
      "name": "CAR 9",
      "size": "5.7 mb"
    },
    {
      "filename": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWjaSnijpjuscl3nMkUezgu9xEWu-mo7R5Gg&s",
      "name": "CAR 10",
      "size": "7.2 mb"
    }
  ]
  const [data, setdata] = useState(Alldetails)

  return (
    <div className="container">{
       data.map((item,index)=>{
        return (
      <Card First={item} />
      )
      })

      }
     
    </div>

  )
}

export default App;
