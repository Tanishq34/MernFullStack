import { createContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// step-1 create context
 export const mycontext=createContext();
// step-2 write you all data like variables ans function jo app me use krna chahte hai
let firstName="jackky dada"
function printTable(){
    for(let i=1; i<=10;i++){
        console.log(`2*${i}=`,2*i);
    }
}
createRoot(document.getElementById('root')).render(
    // step-3
    <mycontext.Provider value={{firstName,printTable}}> 
     <App/>
    </mycontext.Provider>
 
  
 
)
