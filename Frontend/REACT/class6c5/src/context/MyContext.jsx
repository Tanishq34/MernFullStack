import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home.jsx";
import{ Variable } from '../utils/variables.js';
import Contact from "../pages/Contact.jsx"
import About from "../pages/About.jsx"
import PageNotFound from "../pages/PageNotFound.jsx"
import Navbar from "../components/Navbar.jsx";
import Mycart from "../pages/MyCart.jsx"

import { useState,createContext } from "react";

export const BiteContext=createContext()
function MyContext(){
 const [trackbtn, setTrackbtn] = useState(true)
    
    const [count, setcount] = useState(1)

  const [mycartitem,setcartitem]=useState([])


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

   function increment(data) {
        console.log("IIII");
        setcount(data.quantity++);
        // data.quantity++; Ui me render nahi karega change to hoga
    }

    function decrement(data) {
        console.log("dddd");
        setcount(() => {
            if (data.quantity === 1) {
                removeFromCard(data.id);
                return;
            }
            return data.quantity--;
        })

    }
 function removeFromCard(id) {
        const filterValaArray = mycartitem?.filter((item) => {
            return item.id !== id;
        })
        setcartitem(filterValaArray);
    }
    const user={
        setcartitem,
        mycartitem,
        removeFromCard,
        decrement,
        increment,
        handleCarditem,count,
        setcount,
        trackbtn,
        setTrackbtn,
        Variable,
    }


  return(
    <BiteContext.Provider value={user}>
<Navbar/>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/mycart" element={<Mycart/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BiteContext.Provider>
  )

}
export default MyContext;
  
