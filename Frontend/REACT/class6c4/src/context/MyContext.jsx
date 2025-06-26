import Child1 from "../components/Child1";
import Child2 from "../components/Child2";
import Child3 from "../components/Child3";

import { useState, createContext } from "react";

export const mycontext = createContext();
function Mycontext() {
    const [age, setAge] = useState(24)
    const Uname = "Tanishq"
    function printTable() {
        for (let i = 1; i <= 10; i++) {
            console.log(`2*${i}`, 2 * i);
        }
    }
     const user = {
        Uname, age, printTable
    }
    return (
        <mycontext.Provider value={user}>
            <Child1 />
            <Child2 />
            <Child3 />
        </mycontext.Provider>
    )
}
export default Mycontext