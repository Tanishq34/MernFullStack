import {useState} from"react";
import Child1 from "./component/Child1.jsx";
function App() {
  const [name1,setName]=useState();
  function getdata(data){
    setName(data)
  }
  return (
    <div className="App">
      <p>{name1}</p>
     <Child1 getdata={getdata}/>
    </div>
  );
}

export default App;
