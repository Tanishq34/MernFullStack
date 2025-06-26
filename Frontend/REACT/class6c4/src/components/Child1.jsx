import { useContext } from "react";
import {mycontext} from "../context/MyContext"

function Child1(){
    const {age,Uname}=useContext(mycontext)
    return(
        <div>
            <h1>child Two</h1>
            <p>Name:{Uname}</p>
             <p>Age:{age}</p>
        </div>
    )
}
export default Child1;