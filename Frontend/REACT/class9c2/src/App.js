// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// function App() {
//   return (
//     <div className="App">
//    <Navbar/>
//    <Home/>
//     </div>
//   );
// }

// export default App;
import { useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Data from './utils/Data';
function App() {
  const [data, setData] = useState(Data)
  const [copydata,setCopyData]=useState(data)
  function getValueFromNavbar(item) {
    console.log("item", item)
    let array1 = data.filter((cardItem) => {
      return cardItem === item
    })
    setData(array1)
  }


  return (
    <div className="App">
      <Navbar getValueFromNavbar={getValueFromNavbar} setData={setData} data={data} copydata={copydata}/>
      <Home data={data} />

    </div>
  );
}

export default App;