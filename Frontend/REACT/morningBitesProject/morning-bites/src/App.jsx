// import Card from "./components/Card.jsx"
// import { Variable } from "./utils/variables.js";
// import "./components/Card.jsx"

// function App() {
//   return (
//     <div className="App-container">
//     {
//       Variable?.map((item, index)=>{
//         return (
//           <div key={index}>
// <Card data={item}/>
//           </div>
//         )
//       })
//     }
      
//     </div>
//   );
// }

// export default App;




import { useState } from 'react';
import{ Variable } from './utils/variables.js';
import Card from './components/Card.jsx';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx"
import About from "./pages/About.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"
import Navbar from "./components/Navbar.jsx";
import Mycart from "./pages/MyCart.jsx"

function App() {
  const [product] = useState(Variable);
  const [mycartitem,setcartitem]=useState([])

  return (

    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home product={product} mycartitem={mycartitem} setcartitem={setcartitem} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/mycart" element={<Mycart mycartitem={mycartitem} setcartitem={setcartitem}/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
