import { useState } from "react";
import Child1 from "./components/Child1.jsx";
function App() {
  
  const [money,setMoney]=useState(1000000)
 
   return (
    < div className="App-container">
    <Child1 money={money} setMoney={setMoney}/>
    </div>

    
  );
}

export default App;
