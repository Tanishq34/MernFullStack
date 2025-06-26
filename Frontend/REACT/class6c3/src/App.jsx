import { useState, createContext } from 'react'
import Child from './components/Child';
import Child2 from './components/Child2';
import Child3 from './components/Child3';

 export const mycontext = createContext();
function App() {
  const [age, setAge] = useState(23);
  const Uname = "Tanu"
  function printTable() {
    for (let i = 1; i <= 10; i++) {
      console.log(`2*${i}=`, 2 * i);
    }
  }
  const user = {
    age,
    setAge,
    Uname,
    printTable
  }
  return (
    <mycontext.Provider value={user}>
      <Child />
      <Child2 />
      <Child3 />
    </mycontext.Provider>
  )
}

export default App
