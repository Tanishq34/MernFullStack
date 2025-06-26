import { useContext } from 'react'
import './App.css'
import { mycontext } from './main.jsx'

function App() {
  // step-4
const {firstName,printTable}=useContext(mycontext)
printTable()
console.log(firstName);

  return (
   <p>{firstName}</p>
  )
}

export default App
