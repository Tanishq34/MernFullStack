import { useContext } from "react";
import {mycontext} from "../App"

function Child2(){
    const {age,Uname}=useContext(mycontext)
    return(
        <div>
            <h1>child Two</h1>
            <p>Name:{Uname}</p>
             <p>Age:{age}</p>
        </div>
    )
}
export default Child2;